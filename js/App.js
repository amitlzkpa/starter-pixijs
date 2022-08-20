
let defaultOpts = {
  debugMode: false,
};

export default class App {

  constructor() {
    window.addEventListener("resize", this.onWindowResize, false);
  }

  //-----------------------------------------------------------------------------

  onWindowResize(evt) {
    console.log("onWindowResize", evt);
  }

  //-----------------------------------------------------------------------------

  /**
    Initialize the app
    Awaits till the instance is ready to be worked with.
    @param {object} opts - Options for inialization.
    @example
      await app.initialize({
        debugMode: false
      });
  */
  async initialize(opts) {
    let activeOpts = { ...defaultOpts, ...(opts || {}) };

    let pixiContainerDomNode = document.getElementById("pixiContainer");
    if (!pixiContainerDomNode) {
      let newNode = document.createElement("div", "");
      newNode.setAttribute("id", "pixiContainer");
      document.body.appendChild(newNode);
      pixiContainerDomNode = document.getElementById("pixiContainer");
    }

    let w = pixiContainerDomNode.clientWidth || 400;
    let h = pixiContainerDomNode.clientHeight || 300;
    
    let app = new PIXI.Application({
      width: w,
      height: h,
      antialias: true,
      resolution: window.devicePixelRatio || 1,
      backgroundColor: "0xFF0000",
    });
    pixiContainerDomNode.appendChild(app.view);

    let line = new PIXI.Graphics();
    app.stage.addChild(line);
    // line.position.set(40, 40);
    line.lineStyle(6, 0xffffff)
          // .moveTo(0, 0)
          .moveTo(90, 120)
          .lineTo(520, 230)
          .lineTo(620, 210)
          // .moveTo(w/20, h/10)
          // .lineTo(w/3, h/2);

    let cat = PIXI.Sprite.from('pixi/cat.png');
    cat.x = 60;
    cat.y = 60;
    cat.anchor.set(0.5);
    app.stage.addChild(cat);
    console.log(cat);

  }


}

