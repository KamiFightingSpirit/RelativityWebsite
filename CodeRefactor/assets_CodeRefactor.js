export class Assets {
  constructor(app) {
    this.app = app;
  }
  init() {
    const loader = this.app.loader;
    loader.baseUrl = "../assets/";
    loader
      .add("jupiter1k.jpg") //programmingexp
      .add("blackrock.jpg") //Blackrock
      .add("sunTest.jpg") //tester for sun - smaller image
      .add("sunShrunk1.jpg") //AboutThisSite-Sun
      .add("cyberburn.jpg") //Cyberburn
      .add("bridgewater.jpg") //Bridgewater
      .add("bgassets/particlefromeditor.png"); //used for stars
    loader.load(() => {
      this.app.runners.load.run();
    });
  }
}
