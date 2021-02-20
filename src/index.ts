import "babylonjs-loaders";

import { Engine } from "babylonjs";

import { Game } from "./game";

const view = document.getElementById("view") as HTMLCanvasElement;
const engine = new Engine(view, true);

const game = new Game(view, engine);

engine.runRenderLoop(() => {
  game.update();
  game.render();
});
