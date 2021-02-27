import "babylonjs-loaders";

import { Engine } from "babylonjs";

import { Game } from "./game";

const view = document.getElementById("view") as HTMLCanvasElement;
const engine = new Engine(view, true);

const game = new Game(view, engine);

const EXPECTED_FRAME_DURATION = 1000 / 60;
let previous = window.performance.now();
let lag = 0;
engine.runRenderLoop(() => {
  const now = window.performance.now();
  const delta = now - previous;

  // correct any unexpected huge gaps in the delta time
  if (delta > 1000) {
    delta = EXPECTED_FRAME_DURATION;
  }

  lag += delta;
  while (lag > 10) {
    game.update();
    lag -= 10;
  }

  game.render();

  previous = now;
});
