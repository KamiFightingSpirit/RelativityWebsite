import { helperFunction } from "./helperfunctions_CodeRefactor.js";
import { planetLink } from "./planetLink.js";
import { PlanetText } from "./PlanetText.js";
import { PlanetInfo } from "./PlanetInfo.js";
import { PlanetGraphic } from "./PlanetGraphic.js";

export class Planets {
  constructor(app) {
    this.app = app;
  }
  load() {
    /*
     * I want to return an object that is attached to app, like app.planets.all
     * you do this by writing this.XXXX = {foobar}
     * I want this so that any helper functions I setup can access the properties needed
     */
    //instantiate application variables
    const _ = void 0;
    const renderer = this.app.renderer;
    const stage = this.app.stage;
    const ticker = this.app.ticker;
    const loader = this.app.loader;

    //create a main container to hold the planets
    const planetContainer = new PIXI.Container();
    planetContainer.scale.y = 0.2;
    planetContainer.scale.x = 0.5;
    planetContainer.position.set(
      this.app.screen.width / 2,
      this.app.screen.height / 2
    );
    planetContainer.sortableChildren = true;
    stage.addChild(planetContainer);

    //this adds the items to the main app in an array,  may use later if I separate out planets/info boxes
    this.app.planets = planetContainer.children;

    //Planet text options used for all popup info boxes : nice font options -- Cinzel|Noto+Serif|Titilliu
    const planetTextOptions = {
      align: "center",
      fontFamily: "Noto+Serif",
      fontSize: 37,
      fill: "white",
      fontWeight: "800",
      wordWrap: true,
      wordWrapWidth: 400,
      leading: 4,
      resolution: 3,
    };
    //standard yscale to be used on most planets
    const standardYScale = 2;

    //******** SUN/ABOUTSITE *******//
    //Create the info box for the sun
    const sunInfo = new PlanetInfo(0xc9b799);
    const sunText = new PlanetText(
      "About\nThis\nSite",
      planetTextOptions,
      50,
      sunInfo
    );
    sunInfo.addChild(sunText);
    //Create the graphic for the sun
    const sunTexture = loader.resources["sunShrunk1.jpg"].texture;
    sunTexture.frame = new PIXI.Rectangle(2, -50, 200, 100);
    const sunGLineStyle = {
      width: 12,
      color: 0xcc9f4c,
      alpha: 0.15,
      alignment: 0.5,
    };
    const sunRadius = 135;
    const sunScale = 2.1;
    const sunURL = "https://andrewdehuff.me/aboutsite.html";
    const sunGraphic = new PlanetGraphic(
      sunGLineStyle,
      sunTexture,
      sunRadius,
      sunScale,
      sunInfo,
      sunURL
    );

    //add a background sun to create a double layered corona for the sun
    let backgroundSun = new PIXI.Graphics();
    backgroundSun
      .lineStyle(30, 0xcc9f4c, 0.5, 0.5)
      .drawCircle(0, 0, 127)
      .setTransform(_, _, _, 2.1, _, _).filters = [
      new PIXI.filters.BlurFilter(4),
    ];
    planetContainer.addChild(backgroundSun);

    //******** BLACKROCK *******//
    //Create the info box for BlacRock
    const blackrockInfo = new PlanetInfo(0xc3b6aa);
    const blackrockText = new PlanetText(
      "Name: BlackRock \nTitle: Analyst \nYears: 2015-2017",
      planetTextOptions,
      _,
      blackrockInfo
    );
    blackrockInfo.addChild(blackrockText);
    //Create the graphic for BlackRock
    const blackrockTexture = loader.resources["blackrock.jpg"].texture;
    blackrockTexture.frame = new PIXI.Rectangle(0, -300, 800, 200);
    const brlineStyleOptions = {
      width: 8,
      color: 0xc3b6aa,
      alpha: 0.25,
      alignment: 0.5,
    };
    const brRadius = 60;
    const brURL = "https://andrewdehuff.me/blackrock.html";
    const blackrockGraphic = new PlanetGraphic(
      brlineStyleOptions,
      blackrockTexture,
      brRadius,
      standardYScale,
      blackrockInfo,
      brURL
    );

    //******** BRIDGEWATER *******//
    //Create the info box for BridgeWater
    const bridgewaterInfo = new PlanetInfo(0xc07158);
    planetContainer.addChild(bridgewaterInfo);
    const bridgewaterText = new PlanetText(
      "Name: Bridgewater \nTitle: Associate \nYears: 2017-2018",
      planetTextOptions,
      _,
      bridgewaterInfo
    );
    bridgewaterInfo.addChild(bridgewaterText);
    //Create the graphic for Bridgewater
    const bridgewaterTexture = loader.resources["bridgewater.jpg"].texture;
    bridgewaterTexture.frame = new PIXI.Rectangle(0, -300, 800, 200);
    const bwLineStyle = {
      width: 8.5,
      color: 0xc07158,
      alpha: 0.25,
      alignment: 0.8,
    };
    const bwRadius = 75;
    const bwURL = "https://andrewdehuff.me/bridgewater.html";
    const bridgewaterGraphic = new PlanetGraphic(
      bwLineStyle,
      bridgewaterTexture,
      bwRadius,
      standardYScale,
      bridgewaterInfo,
      bwURL
    );

    //******** CYBERBURN *******//
    //Create the info box for Cyberburn
    const cyberburnInfo = new PlanetInfo(0xcabaad);
    planetContainer.addChild(cyberburnInfo);
    const cyberburnText = new PlanetText(
      "Name: Cyberburn \nTitle: Owner and CEO \nYears: 2009-2014",
      planetTextOptions,
      _,
      cyberburnInfo
    );
    cyberburnInfo.addChild(cyberburnText);
    //Create the graphic for Cyberburn
    const cyberburnTexture = loader.resources["cyberburn.jpg"].texture;
    cyberburnTexture.frame = new PIXI.Rectangle(0, -100, 400, 200); //Texture.frame (x, y, width, height)
    const cbLineStyleOptions = {
      width: 8,
      color: 0xcabaad,
      alpha: 0.25,
      alignment: 0.5,
    };
    const cbRadius = 75;
    const cbURL = "https://andrewdehuff.me/cyberburn.html";
    const cyberburnGraphic = new PlanetGraphic(
      cbLineStyleOptions,
      cyberburnTexture,
      cbRadius,
      standardYScale,
      cyberburnInfo,
      cbURL
    );
    planetContainer.addChild(cyberburnGraphic);

    //******** PROGRAMMING EXPERIENCE *******//
    //Create the info box for Programming Experience
    const programmingExpInfo = new PlanetInfo(0xc9b799);
    const programmingExpText = new PlanetText(
      "Tech and Programming Experience\nYears: 2009-Today",
      planetTextOptions,
      _,
      programmingExpInfo
    );
    programmingExpInfo.addChild(programmingExpText);
    //Create the graphic for Programming Experience
    const programmingExpTexture = loader.resources["jupiter1k.jpg"].texture;
    programmingExpTexture.frame = new PIXI.Rectangle(0, -300, 900, 450);
    const peLineStyleOptions = {
      width: 12,
      color: 0xf2ddbb,
      alpha: 0.25,
      alignment: 0.5,
    };
    const peRadius = 120;
    const peURL = "https://andrewdehuff.me/programmingexp.html";
    const programmingExpGraphic = new PlanetGraphic(
      peLineStyleOptions,
      programmingExpTexture,
      peRadius,
      standardYScale,
      programmingExpInfo,
      peURL
    );

    planetContainer.addChild(
      sunInfo,
      sunGraphic,
      blackrockInfo,
      blackrockGraphic,
      bridgewaterInfo,
      bridgewaterGraphic,
      cyberburnInfo,
      cyberburnGraphic,
      programmingExpInfo,
      programmingExpGraphic
    );
    //add in the links for each planet
    const planetArr = [
      sunGraphic,
      blackrockGraphic,
      bridgewaterGraphic,
      cyberburnGraphic,
      programmingExpGraphic,
    ];
    for (let planet of planetArr) {
      planetLink(planet);
    }

    let sunOrbitControl = {
      graphic: sunGraphic,
      texture: sunTexture,
      orbitRadius: _,
      speedFactor: _,
      textureTickerFactor: 0.33,
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
      textureTickerFactor: 4,
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
    stage.addChild(staticStarContainer);
    let starTexture =
      loader.resources["bgassets/particlefromeditor.png"].texture;

    addStarSprites();
    //ADD STATIONARY STARS RANDOMLY THROUGHOUT THE CANVAS
    function addStarSprites() {
      for (let i = 0; i < 700; i++) {
        let starSprite = new PIXI.Sprite(starTexture);
        //Place star randomly on screen
        let randX = Math.random() * renderer.screen.width;
        let randY = Math.random() * renderer.screen.height;
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
    stage.addChild(suicideStarContainer);
    function createSuicideStar() {
      if (Math.random() > 0.6) {
        let suicideStar = new PIXI.Sprite(starTexture);
        let randX = Math.random() * renderer.screen.width;
        let randY = Math.random() * renderer.screen.height;
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

    ticker.add((delta) => {
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
}

//Event handlers for planets -- Now that I moved over old code need to double check if this is still being used.
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

//THIS WILL CHANGE TO RESIZING THE RENDERER
// Center emitter upon window resize
// window.onresize = function () {
//   //resize the canvas to the size of the window
//   let _w = window.innerWidth;
//   let _h = window.innerHeight;
//   renderer.resize(_w, _h);

//   //recenters all containers upon resize.
//   stage.children.map((container) => {
//     container.name === "planetContainer"
//       ? container.position.set(
//           renderer.screen.width / 2,
//           renderer.screen.height / 2
//         )
//       : container.name === "staticStarContainer"
//       ? ""
//       : "";
//   });
// };
// window.addEventListener("resize", window.onresize());
