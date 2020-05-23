function timeDilationToolbar() {
  //select the toolbar
  let renderShipboardYears = document.getElementById("renderShipboardYears");
  let renderShipboardMonths = document.getElementById("renderShipboardMonths");
  let renderShipboardDays = document.getElementById("renderShipboardDays");
  let renderExternalYears = document.getElementById("renderExternalYears");
  let renderExternalMonths = document.getElementById("renderExternalMonths");
  let renderExternalDays = document.getElementById("renderExternalDays");

  //create a home link
  $("#goBackKey").click(function () {
    window.location = "https://andrewdehuff.me/home.html";
    return false;
  });

  //if there is no session instance of shipboardTime create it
  parseInt(sessionStorage.shipboardTime)
    ? ""
    : (sessionStorage.shipboardTime = 0);

  //if there is no session instance of externalTime create it
  parseInt(sessionStorage.externalTime)
    ? ""
    : (sessionStorage.externalTime = 30);
  //setup tracker variables
  let shipboardTimeTracker = {};
  let externalTimeTracker = {};

  //Increment the ticker - incrementing every second
  runUpdate();
  setInterval(runUpdate, 1000);

  function runUpdate() {
    //increment shipboard ticker in storage
    incrementShipboardTime();
    //format shipboardTime
    formatTime(parseInt(sessionStorage.shipboardTime), shipboardTimeTracker);
    //format externalTime
    formatTime(parseInt(sessionStorage.externalTime), externalTimeTracker);
    //calculate percent speed of light
    percentageSpeedOfLight();
    //render to toolbar
    renderToolbar();
  }

  function incrementShipboardTime() {
    let ticker = parseInt(sessionStorage.shipboardTime) + 1;
    sessionStorage.shipboardTime = ticker;
  }

  function formatTime(timeToFormat, targetObj) {
    //calculate the years, months, and days
    targetObj.years =
      timeToFormat / 360 >= 1 ? Math.floor(timeToFormat / 360) : 0;
    timeToFormat = timeToFormat - targetObj.years * 360;
    targetObj.months =
      timeToFormat / 30 >= 1 ? Math.floor(timeToFormat / 30) : 0;
    timeToFormat = timeToFormat - targetObj.months * 30;
    targetObj.days = timeToFormat;
    //format the time with leading zeros
    for (var key in targetObj) {
      targetObj[key] = targetObj[key] + "";
      while (targetObj[key].length < 2) {
        targetObj[key] = "0" + targetObj[key];
      }
    }
  }

  function percentageSpeedOfLight() {
    let shipboardTime = parseInt(sessionStorage.shipboardTime);
    let externalTime = parseInt(sessionStorage.externalTime);
    //calculate the speed of light to experience this time dilation
    let percentageSpeedOfLight =
      100 *
      Math.pow(
        1 - Math.pow(shipboardTime, 2) / Math.pow(externalTime, 2),
        1 / 2
      );
    percentageSpeedOfLight = percentageSpeedOfLight.toFixed(2) + "%";
    sessionStorage.percentageSpeedOfLight = percentageSpeedOfLight;
  }

  function renderToolbar() {
    renderShipboardYears.innerText = shipboardTimeTracker.years;
    renderShipboardMonths.innerText = shipboardTimeTracker.months;
    renderShipboardDays.innerText = shipboardTimeTracker.days;

    renderExternalYears.innerText = externalTimeTracker.years;
    renderExternalMonths.innerText = externalTimeTracker.months;
    renderExternalDays.innerText = externalTimeTracker.days;

    renderSpeedOfLight.innerText = sessionStorage.percentageSpeedOfLight;
  }
}

export { timeDilationToolbar };
