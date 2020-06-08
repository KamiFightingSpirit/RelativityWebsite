//creates all the individual popup text and centers them inside their parents
export class PlanetInfo extends PIXI.Graphics {
  constructor(color) {
    super();
    this.lineStyle(2, color);
    this.beginFill(0x0c0d0c);
    this.setTransform(null, null, null, 2, null, null);
    this.drawRoundedRect(0, 0, 400, 200, 50);
    this.zIndex = 10000;
    this.visible = false;
  }
}
