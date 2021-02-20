import { Engine, ArcRotateCamera, HemisphericLight, MeshBuilder, Mesh, Scene, Vector3 } from "babylonjs";

import { Player } from "./player";
import { InputHandler } from "./inputHandler";

export class Game {
  scene: Scene;
  camera: ArcRotateCamera;
  light: HemisphericLight;
  player: Player;

  constructor(view: HTMLCanvasElement, engine: Engine) {
    this.scene = new Scene(engine);

    this.camera = new ArcRotateCamera("camera", Math.PI / 2, Math.PI / 3.2, 2, Vector3.Zero(), this.scene);

    this.camera.attachControl(view);

    this.light = new HemisphericLight("light", new Vector3(0, 1, 0), this.scene);

    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});
    ground.position.y = -0.5;

    this.player = new Player(this.scene);

    const inputHandler = new InputHandler();

    this.scene.onKeyboardObservable.add(inputHandler.register());
  }

  update() {
  }

  render() {
    this.scene.render();
  }
}
