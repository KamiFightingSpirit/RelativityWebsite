// THIS IS THE OLD FILE, WILL BE DELETED ONCE THE REFORMAT HAS GONE THROUGH
"use strict";

import { timeDilationToolbar } from "./timeDilationToolbar.js";
import { increaseExternalTime } from "./increaseExternalTime.js";

increaseExternalTime(30);
timeDilationToolbar();

PIXI.utils.skipHello(); // remove pixi message in console

var canvas = document.getElementById("canvas");
var rendererOptions = {
  width: window.innerWidth,
  height: window.innerHeight,
  view: canvas,
  resolution: window.devicePixelRatio,
  backgroundColor: 0x191919,
  autoDensity: true,
  antialias: true,
};

let _ = void 0;
const app = new PIXI.Application(rendererOptions);
app.stage.sortableChildren = true;

const planetContainer = new PIXI.Container();
planetContainer.scale.y = 0.2;
planetContainer.scale.x = 0.5;
planetContainer.position.set(app.screen.width / 2, app.screen.height / 2);
planetContainer.name = "planetContainer";
planetContainer.sortableChildren = true;
app.stage.addChild(planetContainer);

//create the loader
const baseUrl = "./assets/";
const loader = new PIXI.Loader(baseUrl);

loader
  .add("jupiter1k.jpg") //programmingexp
  .add("blackrock.jpg") //Blackrock
  .add("sunTest.jpg") //tester for sun - smaller image
  .add("sunShrunk1.jpg") //AboutThisSite-Sun
  .add("cyberburn.jpg") //Cyberburn
  .add("bridgewater.jpg") //Bridgewater
  .add("bgassets/particlefromeditor.png") //used for stars
  .load(setup);

function setup() {
  //Cinzel|Noto+Serif|Titilliu
  let planetTextOptions = {
    fontFamily: "Noto+Serif",
    fontSize: 37,
    fill: "white",
    fontWeight: "800",
    wordWrap: true,
    wordWrapWidth: 400,
    leading: 4,
    resolution: 3,
  };

  //create an infographic for on hover
  let sunInfo = new PIXI.Graphics()
    .lineStyle(2, 0xc9b799)
    .beginFill(0x0c0d0c)
    .setTransform(_, _, _, 2, _, _)
    .drawRoundedRect(0, 0, 400, 200, 50);
  sunInfo.zIndex = 10000;
  sunInfo.visible = false;
  planetContainer.addChild(sunInfo);

  let sunText = new PIXI.Text("About\nThis\nSite", planetTextOptions);
  sunText.position.set(
    sunInfo.width - sunText.width * 2.6,
    sunInfo.height / 10 - sunText.height / 5
  );
  sunText.style.fontSize = 50;
  sunText.style.align = "center";
  sunInfo.addChild(sunText);

  let sunTexture = loader.resources["sunShrunk1.jpg"].texture;
  sunTexture.frame = new PIXI.Rectangle(2, -50, 200, 100);
  let sunGraphic = new PIXI.Graphics()
    //add a semi-transparent corona
    .lineStyle(12, 0xcc9f4c, 0.15, 0.5)
    .beginTextureFill(sunTexture)
    .drawCircle(0, 0, 135)
    .endFill()
    .setTransform(_, _, _, 2.1, _, _);
  sunGraphic.interactive = true;
  sunGraphic.hovering = false;
  sunGraphic.info = sunInfo;
  planetContainer.addChild(sunGraphic);

  sunGraphic.on("pointerdown", function () {
    let target = "https://andrewdehuff.me/aboutsite.html";
    window.location = target;
  });

  //add a background sun to create a double layered corona for the sun
  let backgroundSun = new PIXI.Graphics();
  backgroundSun
    .lineStyle(30, 0xcc9f4c, 0.5, 0.5)
    .drawCircle(0, 0, 127)
    .setTransform(_, _, _, 2.1, _, _).filters = [
    new PIXI.filters.BlurFilter(4),
  ];
  planetContainer.addChild(backgroundSun);

  //create an infographic for on hover
  let blackrockInfo = new PIXI.Graphics()
    .lineStyle(2, 0xc3b6aa)
    .beginFill(0x0c0d0c)
    .setTransform(_, _, _, 2, _, _)
    .drawRoundedRect(0, 0, 400, 200, 50);
  blackrockInfo.zIndex = 10000;
  blackrockInfo.visible = false;
  planetContainer.addChild(blackrockInfo);

  let blackrockText = new PIXI.Text(
    "Name: BlackRock \nTitle: Analyst \nYears: 2015-2017",
    planetTextOptions
  );
  blackrockText.style.align = "center";
  blackrockText.position.set(61, 35); //moves text within the box
  blackrockInfo.addChild(blackrockText);

  let blackrockTexture = loader.resources["blackrock.jpg"].texture;
  blackrockTexture.frame = new PIXI.Rectangle(0, -300, 800, 200); //Texture.frame (x, y, width, height)
  let blackrockGraphic = new PIXI.Graphics()
    .lineStyle(7, 0xc3b6aa, 0.25, 0.5) //add atmostphere
    .beginTextureFill(blackrockTexture)
    .setTransform(_, _, _, 2, _, _) //setTransform(x, y, x-scale,y-scale,xkew,yskew )
    .drawCircle(0, 0, 60)
    .endFill();
  blackrockGraphic.interactive = true;
  blackrockGraphic.hovering = false;
  blackrockGraphic.info = blackrockInfo;
  planetContainer.addChild(blackrockGraphic);

  blackrockGraphic.on("pointerdown", function () {
    let target = "https://andrewdehuff.me/blackrock.html";
    window.location = target;
  });

  let bridgewaterInfo = new PIXI.Graphics()
    .lineStyle(2, 0xc07158)
    .beginFill(0x0c0d0c)
    .setTransform(_, _, _, 2, _, _)
    .drawRoundedRect(0, 0, 400, 200, 50);
  bridgewaterInfo.zIndex = 10000;
  bridgewaterInfo.visible = false;
  planetContainer.addChild(bridgewaterInfo);

  let bridgewaterText = new PIXI.Text(
    "Name: Bridgewater \nTitle: Associate \nYears: 2017-2018",
    planetTextOptions
  );
  bridgewaterText.style.align = "center";
  bridgewaterText.position.set(48, 35); //moves text within the box
  bridgewaterInfo.addChild(bridgewaterText);

  let bridgewaterTexture = loader.resources["bridgewater.jpg"].texture;
  bridgewaterTexture.frame = new PIXI.Rectangle(0, -300, 800, 200);
  let bridgewaterGraphic = new PIXI.Graphics()
    .lineStyle(6, 0xc07158, 0.25, 0.8) //add atmostphere
    .beginTextureFill(bridgewaterTexture)
    .setTransform(_, _, _, 2, _, _)
    .drawCircle(0, 0, 75)
    .endFill();
  bridgewaterGraphic.interactive = true;
  bridgewaterGraphic.hovering = false;
  bridgewaterGraphic.info = bridgewaterInfo;
  planetContainer.addChild(bridgewaterGraphic);

  bridgewaterGraphic.on("pointerdown", function () {
    let target = "https://andrewdehuff.me/bridgewater.html";
    window.location = target;
  });

  //create an infographic for on hover
  let cyberburnInfo = new PIXI.Graphics()
    .lineStyle(2, 0xcabaad)
    .beginFill(0x0c0d0c)
    .setTransform(_, _, _, 2, _, _)
    .drawRoundedRect(0, 0, 400, 200, 50);
  cyberburnInfo.zIndex = 10000;
  cyberburnInfo.visible = false;
  planetContainer.addChild(cyberburnInfo);

  let cyberburnText = new PIXI.Text(
    "Name: Cyberburn \nTitle: Owner and CEO \nYears: 2009-2014",
    planetTextOptions
  );
  cyberburnText.style.align = "center";
  cyberburnText.position.set(20, 30); //moves text within the box
  cyberburnInfo.addChild(cyberburnText);

  let cyberburnTexture = loader.resources["cyberburn.jpg"].texture;
  cyberburnTexture.frame = new PIXI.Rectangle(0, -100, 400, 200); //Texture.frame (x, y, width, height)
  let cyberburnGraphic = new PIXI.Graphics()
    .lineStyle(8, 0xcabaad, 0.25, 0.5) //add atmostphere
    .beginTextureFill(cyberburnTexture)
    .setTransform(_, _, _, 2, _, _) //setTransform(x, y, x-scale,y-scale,xkew,yskew )
    .drawCircle(0, 0, 75)
    .endFill();
  cyberburnGraphic.interactive = true;
  cyberburnGraphic.hovering = false;
  cyberburnGraphic.info = cyberburnInfo;
  planetContainer.addChild(cyberburnGraphic);

  cyberburnGraphic.on("pointerdown", function () {
    let target = "https://andrewdehuff.me/cyberburn.html";
    window.location = target;
  });

  //create an infographic for on hover
  let programmingExpInfo = new PIXI.Graphics()
    .lineStyle(2, 0xc9b799)
    .beginFill(0x0c0d0c)
    .setTransform(_, _, _, 2, _, _)
    .drawRoundedRect(0, 0, 400, 200, 50);
  programmingExpInfo.zIndex = 10000;
  programmingExpInfo.visible = false;
  planetContainer.addChild(programmingExpInfo);
  //Create the text within the infographic
  let programmingExpText = new PIXI.Text(
    "Tech and Programming Experience\nYears: 2009-Today",
    planetTextOptions
  );
  programmingExpText.style.align = "center";
  programmingExpText.position.set(14, 35);
  programmingExpInfo.addChild(programmingExpText);

  let programmingExpTexture = loader.resources["jupiter1k.jpg"].texture;
  programmingExpTexture.frame = new PIXI.Rectangle(0, -300, 900, 450);

  let programmingExpGraphic = new PIXI.Graphics()
    .lineStyle(12, 0xf2ddbb, 0.25, 0.5) //add atmostphere
    .beginTextureFill(programmingExpTexture)
    .setTransform(_, _, _, 2, _, _)
    .drawCircle(0, 0, 120)
    .endFill();
  programmingExpGraphic.interactive = true;
  programmingExpGraphic.hovering = false;
  programmingExpGraphic.info = programmingExpInfo;
  planetContainer.addChild(programmingExpGraphic);

  programmingExpGraphic.on("pointerdown", function () {
    let target = "https://andrewdehuff.me/programmingexp.html";
    window.location = target;
  });

  let sunOrbitControl = {
    graphic: sunGraphic,
    texture: sunTexture,
    orbitRadius: _,
    speedFactor: _,
    textureTickerFactor: 1.33,
    step: _,
    hoverEffects: hoverEffects,
  };

  let blackrockOrbitControl = {
    graphic: blackrockGraphic,
    texture: blackrockTexture,
    orbitRadius: 300,
    speedFactor: 2,
    textureTickerFactor: 2.8,
    step: Math.floor(Math.random() * Math.floor(8000)), //randomize initial position
    hoverEffects: hoverEffects,
  };
  let bridgewaterOrbitControl = {
    graphic: bridgewaterGraphic,
    texture: bridgewaterTexture,
    orbitRadius: 500,
    speedFactor: 1.1,
    textureTickerFactor: 3,
    step: Math.floor(Math.random() * Math.floor(8000)),
    hoverEffects: hoverEffects,
  };
  let cyberburnOrbitControl = {
    graphic: cyberburnGraphic,
    texture: cyberburnTexture,
    orbitRadius: 700,
    speedFactor: 0.5,
    textureTickerFactor: 2.5,
    step: Math.floor(Math.random() * Math.floor(8000)),
    hoverEffects: hoverEffects,
  };

  let programmingExpOrbitControl = {
    graphic: programmingExpGraphic,
    texture: programmingExpTexture,
    orbitRadius: 950,
    speedFactor: 0.3,
    textureTickerFactor: 4,
    step: Math.floor(Math.random() * Math.floor(8000)),
    hoverEffects: hoverEffects,
  };

  let planetOrbitControlArr = [
    sunOrbitControl,
    blackrockOrbitControl,
    bridgewaterOrbitControl,
    cyberburnOrbitControl,
    programmingExpOrbitControl,
  ];

  //Build Orbital Lines
  //Kick off the event handlers
  const isometryPlane = new PIXI.Graphics();
  isometryPlane.zIndex = -10000;
  isometryPlane.lineStyle(1.5, 0xffffff);
  planetContainer.addChild(isometryPlane);
  planetOrbitControlArr.map((planet) => {
    isometryPlane.drawCircle(0, 0, planet.orbitRadius);
    planet.hoverEffects();
  });
  //Event handlers for planets
  function hoverEffects() {
    this.graphic.on("mouseover", function () {
      this.hovering = !this.hovering;
      this.info.visible = !this.info.visible;
    });
    this.graphic.on("mouseout", function () {
      this.hovering = !this.hovering;
      this.info.visible = !this.info.visible;
    });
  }

  //THESE NEED TO BE SPLIT UP, I AM COMBINING FUNCTIONS HERE.
  function animatePlanetTextures(planetOrbitControlArr, delta) {
    //Controls the positioning and texture scrolling of all planets
    planetOrbitControlArr.map((planet) => {
      //gives the appearance of the planet rotating
      planet.texture.frame.width =
        200 + textureTicker * planet.textureTickerFactor;
      planet.texture.updateUvs();
      planet.graphic.geometry.invalidate();
      //positioning of planet and infoText
      if (planet.orbitRadius) {
        if (!planet.graphic.hovering) {
          planet.step += delta;
          planet.graphic.position.set(
            Math.cos(planet.step * planetSpeed * planet.speedFactor) *
              planet.orbitRadius,
            Math.sin(planet.step * planetSpeed * planet.speedFactor) *
              planet.orbitRadius
          );
          planet.graphic.info.position.set(
            Math.cos(planet.step * planetSpeed * planet.speedFactor) *
              planet.orbitRadius,
            Math.sin(planet.step * planetSpeed * planet.speedFactor) *
              planet.orbitRadius
          );
        }
      }
      //Adjust the zIndex of planets based on their y-position
      planet.graphic.zIndex = Math.floor(planet.graphic.position.y);
    });
  }

  //ADD IN DYNAMIC BACKGROUND
  //Create the container to hold all stars
  const staticStarContainer = new PIXI.Container();
  let starsArr = staticStarContainer.children;
  staticStarContainer.position.set(0, 0);
  staticStarContainer.zIndex = -1;
  staticStarContainer.name = "staticStarContainer";
  app.stage.addChild(staticStarContainer);
  let starTexture = loader.resources["bgassets/particlefromeditor.png"].texture;

  addStarSprites();
  //ADD STATIONARY STARS RANDOMLY THROUGHOUT THE CANVAS
  function addStarSprites() {
    for (let i = 0; i < 700; i++) {
      let starSprite = new PIXI.Sprite(starTexture);
      //Place star randomly on screen
      let randX = Math.random() * app.renderer.screen.width;
      let randY = Math.random() * app.renderer.screen.height;
      //Randomize alpha between 0.3 and 1 to create depth
      let randAlpha = Math.floor(Math.random() * (10 - 3) + 3) / 10;
      starSprite.anchor.set(0.5);
      //Randomize brightness to add depth to the background
      starSprite.alpha = randAlpha;
      //Randomize star's starting size
      starSprite.currentScale = Math.random() / 6.5;
      //Set the max size the star will become
      starSprite.maxScale = starSprite.currentScale + 0.06;
      //Make half of the stars expand to start and half shrink
      starSprite.yoyo = starsArr.length % 2 === 0 ? false : true;
      starSprite.setTransform(
        randX,
        randY,
        starSprite.currentScale,
        starSprite.currentScale
      );
      staticStarContainer.addChild(starSprite);
    }
  }

  //Blinks the static stars
  function blinkStars(starsArr, starTicker) {
    if (starTicker % 3 === 0) {
      starsArr.map((star) => {
        if (star.currentScale < star.maxScale && star.yoyo === false) {
          star.currentScale += 0.0033;
          star.scale = new PIXI.Point(star.currentScale, star.currentScale);
          if (star.currentScale > star.maxScale) {
            star.yoyo = true;
          }
        } else {
          star.currentScale -= 0.0033;
          star.scale = new PIXI.Point(star.currentScale, star.currentScale);
          if (star.currentScale < 0.05) {
            star.yoyo = false;
          }
        }
      });
    }
  }

  //create a bunch of stars that that flicker in and out of existence
  let suicideStarContainer = new PIXI.Container();
  let suicideStarsArr = suicideStarContainer.children;
  suicideStarContainer.zIndex = -1;
  app.stage.addChild(suicideStarContainer);
  function createSuicideStar() {
    if (Math.random() > 0.6) {
      let suicideStar = new PIXI.Sprite(starTexture);
      let randX = Math.random() * app.renderer.screen.width;
      let randY = Math.random() * app.renderer.screen.height;
      let randAlpha = Math.floor(Math.random() * (10 - 6) + 6) / 10; //I may prefer weighted random over floored
      suicideStar.currentScale = Math.random() / 6;
      // suicideStar.maxScale = suicideStar.currentScale + 0.5;
      suicideStar.alpha = randAlpha;
      suicideStar.yoyo = false;
      suicideStar.anchor.set(0.5);
      suicideStar.setTransform(
        randX,
        randY,
        suicideStar.currentScale,
        suicideStar.currentScale
      );
      suicideStar.fadeAway = function () {
        this.alpha > 0.05 ? (this.alpha -= 0.005) : this.destroy();
      };
      suicideStarContainer.addChild(suicideStar);
    }
  }

  //Create variables that are passed into the animation function
  let starTicker = 0;
  let textureTicker = 0;
  const planetSpeed = 0.015; //can this be removed?

  //Animate everything
  app.ticker.add((delta) => {
    textureTicker += 0.7;
    starTicker += 1;
    createSuicideStar();
    blinkStars(starsArr, starTicker);
    suicideStarsArr.map((suicideStar) => {
      suicideStar.fadeAway();
    });
    animatePlanetTextures(planetOrbitControlArr, delta);
  });
}
//THIS WILL CHANGE TO RESIZING THE RENDERER
// Center emitter upon window resize
window.onresize = function () {
  //resize the canvas to the size of the window
  let _w = window.innerWidth;
  let _h = window.innerHeight;
  app.renderer.resize(_w, _h);

  //recenters all containers upon resize.
  app.stage.children.map((container) => {
    container.name === "planetContainer"
      ? container.position.set(
          app.renderer.screen.width / 2,
          app.renderer.screen.height / 2
        )
      : container.name === "staticStarContainer"
      ? ""
      : "";
  });
};
window.addEventListener("resize", window.onresize());
