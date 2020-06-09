//Connects to the canvas element, loads up the renderer, kicks off the main loader

import { Assets } from "./assets_CodeRefactor.js";
import { Planets } from "./planets_CodeRefactor.js";
// import { helperFunction } from "./ahelperfunctions.js";

export class Application {
  constructor() {
    const canvas = document.getElementById("canvas");

    const rendererOptions = {
      width: window.innerWidth,
      height: window.innerHeight,
      view: canvas,
      resolution: window.devicePixelRatio,
      backgroundColor: 0x191919,
      autoDensity: true,
      antialias: true,
    };

    this.screen = new PIXI.Rectangle(
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );
    // this.width = window.innerWidth;
    // this.height = window.screen.height;

    this.renderer = new PIXI.Renderer(rendererOptions);
    this.stage = new PIXI.Container();
    this.stage.sortableChildren = true;
    this.ticker = new PIXI.Ticker();

    this.ticker.add(() => {
      this.render();
    });
    this.ticker.start();

    this.runners = {
      init: new PIXI.Runner("init", 0),
      load: new PIXI.Runner("load", 0),
    };

    this.loader = new PIXI.Loader();

    //creates objects to run initializations and load on
    this.addComponent((this.assets = new Assets(this)));
    this.addComponent((this.planets = new Planets(this)));
  }

  addComponent(comp) {
    for (let key in this.runners) {
      let runner = this.runners[key];
      runner.add(comp);
    }
  }

  render() {
    this.renderer.render(this.stage);
  }
}
