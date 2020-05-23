//CURRENTLY NOT CONNECTED - NEED TO FIGURE OUT HOW TO ACCESS APP AND RADIUS FROM A MODULE
"use strict";

export class ResizeClass {
  constructor(app, ratio) {
    this.app = app;
  }

  resizeClass() {
    let ratio = 6.4;

    if (window.innerWidth / window.innerHeight >= ratio) {
      var w = window.innerHeight * ratio;
      var h = window.innerHeight;
    } else {
      var w = window.innerWidth;
      var h = window.innerWidth / ratio;
    }
    window.app.renderer.view.style.width = w + "px";
    window.app.renderer.view.style.height = h + "px";
  }
}
