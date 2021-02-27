import { Engine, ArcRotateCamera, HemisphericLight, Scene, Vector3 } from "babylonjs";

import { Player } from "./player";
import { InputHandler } from "./inputHandler";
import { InfiniteGround } from "./infiniteGround";

export class Game {
  scene: Scene;
  camera: ArcRotateCamera;
  light: HemisphericLight;
  player: Player;
  ground: InfiniteGround;

  constructor(view: HTMLCanvasElement, engine: Engine) {
    this.scene = new Scene(engine);

    this.camera = new ArcRotateCamera("camera", Math.PI / 2, Math.PI / 3.2, 20, Vector3.Zero(), this.scene);

    this.camera.attachControl(view);

    this.light = new HemisphericLight("light", new Vector3(0, 1, 0), this.scene);

    this.ground = new InfiniteGround(this.scene);

    this.player = new Player(this.scene);

    const inputHandler = new InputHandler();

    this.scene.onKeyboardObservable.add(inputHandler.register());
  }

  update() {
    this.ground.update();
    this.player.update();
  }

  render() {
    this.scene.render();
  }
}
