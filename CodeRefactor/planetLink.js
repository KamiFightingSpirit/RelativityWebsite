"use strict";

function planetLink(planet) {
  planet.on("pointerdown", function () {
    let target = planet.url;
    window.location = target;
  });
}

export { planetLink };
