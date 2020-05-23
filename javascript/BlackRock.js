"use strict";

import { timeDilationToolbar } from "../timeDilationToolbar.js";
import { increaseExternalTime } from "../increaseExternalTime.js";
import { planetCreator } from "./planetCreator.js";

let timePeriod = 420;
increaseExternalTime(timePeriod);
timeDilationToolbar();

//Unique stuff needed to render this planet
let planetInfo = {
  textureImage: "blackrock.jpg",
  frame: new PIXI.Rectangle(0, -170, 200, 250),
  lineStyleOptions: {
    width: 7,
    color: 0xc3b6aa,
    alpha: 0.25,
    alignment: 0.5,
  },
  textureTickerFactor: 0.9,
};
planetCreator(planetInfo);
