"use strict";

import { animatePlanetTexture } from "./animatePlanetTexture.js";

function planetCreator(planetInfo) {
  PIXI.utils.skipHello(); // remove pixi message in console

  let canvas = document.getElementById("canvas");
  let size = [1920, 300];
  let ratio = size[0] / size[1];
  let radius = 525;

  let rendererOptions = {
    width: size[0],
    height: size[1],
    view: canvas,
    resolution: window.devicePixelRatio,
    backgroundColor: 0x191919,
    autoDensity: true,
    antialias: true,
  };

  //setup the app
  const app = new PIXI.Application(rendererOptions);
  let planetContainer = new PIXI.Container();
  planetContainer.position.set(app.screen.width / 2, app.screen.height + 250);
  app.stage.addChild(planetContainer);

  //create the loader
  const baseUrl = "./assets/";
  const loader = new PIXI.Loader(baseUrl);
  loader.add(planetInfo.textureImage).load(setup);

  function setup() {
    let planetTexture = loader.resources[planetInfo.textureImage].texture;
    planetTexture.frame = planetInfo.frame;

    let planetGraphic = new PIXI.Graphics()
      //add a semi-transparent corona
      .lineStyle(planetInfo.lineStyleOptions)
      .beginTextureFill(planetTexture)
      .drawCircle(0, 0, radius)
      .endFill();
    planetGraphic.texture = planetTexture; //for animatePlanetTexture function
    planetGraphic.textureTickerFactor = planetInfo.textureTickerFactor; //for animatePlanetTexture function
    planetContainer.addChild(planetGraphic);

    let textureTicker = 0;
    app.ticker.add((delta) => {
      textureTicker += 0.7;
      animatePlanetTexture(planetGraphic, textureTicker);
    });
  }

  resize();
  window.onresize = resize;
  function resize() {
    if (window.innerWidth / window.innerHeight >= ratio) {
      var w = window.innerHeight * ratio;
      var h = window.innerHeight;
    } else {
      var w = window.innerWidth;
      var h = window.innerWidth / ratio;
    }
    app.renderer.view.style.width = w + "px";
    app.renderer.view.style.height = h + "px";
  }
}

export { planetCreator };
