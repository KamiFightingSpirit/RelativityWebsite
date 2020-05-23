"use strict";

import { timeDilationToolbar } from "../timeDilationToolbar.js";
import { increaseExternalTime } from "../increaseExternalTime.js";
import { planetCreator } from "./planetCreator.js";

let timePeriod = 120;
increaseExternalTime(timePeriod);
timeDilationToolbar();

//Unique stuff needed to render this planet
let planetInfo = {
  textureImage: "jupiter1k.jpg",
  frame: new PIXI.Rectangle(0, -275, 400, 400),
  lineStyleOptions: {
    width: 12,
    color: 0xcabaad,
    alpha: 0.25,
    alignment: 0.5,
  },
  textureTickerFactor: 0.9,
};
planetCreator(planetInfo);
