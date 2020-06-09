//creates all the individual popup text and centers them inside their parents
export class PlanetGraphic extends PIXI.Graphics {
  constructor(lineStyle, texture, radius, yScale, info, URL) {
    super();
    this.lineStyle(lineStyle);
    this.beginTextureFill(texture);
    this.drawCircle(0, 0, radius);
    this.endFill();
    this.setTransform(
      undefined,
      undefined,
      undefined,
      yScale,
      undefined,
      undefined
    );
    this.interactive = true;
    this.hovering = false;
    this.info = info;
    this.url = URL;
  }
}
