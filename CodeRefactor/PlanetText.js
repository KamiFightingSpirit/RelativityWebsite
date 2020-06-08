//creates all the individual popup text and centers them inside their parents
export class PlanetText extends PIXI.Text {
  constructor(text, textOptions, fontSizeOverride, parent) {
    super(text, textOptions);
    //sun uses a different font size and requires an override
    if (fontSizeOverride) {
      this.style.fontSize = fontSizeOverride;
    }
    this.position.set(
      (parent.width - this.width) / 2,
      //parent.height is divided by two as the container is scaled but the actual text is not
      (parent.height / 2 - this.height) / 2
    );
  }
}
