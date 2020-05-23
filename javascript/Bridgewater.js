"use strict";

import { timeDilationToolbar } from "../timeDilationToolbar.js";
import { increaseExternalTime } from "../increaseExternalTime.js";
import { planetCreator } from "./planetCreator.js";

let timePeriod = 390;
increaseExternalTime(timePeriod);
timeDilationToolbar();

//Unique stuff needed to render this planet
let planetInfo = {
  textureImage: "bridgewater.jpg",
  frame: new PIXI.Rectangle(0, -75, 250, 150),
  lineStyleOptions: {
    width: 8,
    color: 0xc07158,
    alpha: 0.25,
    alignment: 0.8,
  },
  textureTickerFactor: 0.9,
};
planetCreator(planetInfo);
