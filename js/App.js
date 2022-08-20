
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
    console.log("initializing with...", activeOpts);
  }


}

