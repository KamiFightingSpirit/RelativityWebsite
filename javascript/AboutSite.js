"use strict";

import { timeDilationToolbar } from "../timeDilationToolbar.js";
import { increaseExternalTime } from "../increaseExternalTime.js";
import { planetCreator } from "./planetCreator.js";

let timePeriod = 90;
increaseExternalTime(timePeriod);
timeDilationToolbar();

//Unique stuff needed to render this planet
let planetInfo = {
  textureImage: "sunShrunk1.jpg",
  frame: new PIXI.Rectangle(100, -50, 200, 100),
  lineStyleOptions: {
    width: 10,
    color: 0xccc9f4c,
    alpha: 0.15,
    alignment: 0.5,
  },
  textureTickerFactor: 0.33,
};
planetCreator(planetInfo);
