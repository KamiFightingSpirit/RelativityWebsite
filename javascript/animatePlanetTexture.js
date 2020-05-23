"use strict";

//Animates a single selected planet's texture giving the appearance of rotation
function animatePlanetTexture(planet, textureTicker) {
  planet.texture.frame.width = 550 + textureTicker * planet.textureTickerFactor;
  planet.texture.updateUvs();
  planet.geometry.invalidate();
}

export { animatePlanetTexture };
