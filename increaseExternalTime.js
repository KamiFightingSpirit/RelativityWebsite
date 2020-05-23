"use strict";

function increaseExternalTime(num) {
  let externalTime = parseInt(sessionStorage.externalTime);
  sessionStorage.externalTime = externalTime + num;
}

export { increaseExternalTime };
