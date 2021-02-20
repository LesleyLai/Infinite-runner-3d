import "babylonjs-loaders";

import { Engine, ArcRotateCamera, HemisphericLight, MeshBuilder, Mesh, Scene, Vector3 } from "babylonjs";

import { SampleMaterial } from "./Materials/SampleMaterial";

export class Game {
  scene: Scene;
  camera: ArcRotateCamera;
  light: HemisphericLight;
  mesh: Mesh;
  material: SampleMaterial;

  constructor(view: HTMLCanvasElement, engine: Engine) {
    this.scene = new Scene(engine);

    this.camera = new ArcRotateCamera("camera", Math.PI / 2, Math.PI / 3.2, 2, Vector3.Zero(), this.scene);

    this.camera.attachControl(view);

    this.light = new HemisphericLight("light", new Vector3(0, 1, 0), this.scene);

    this.mesh = MeshBuilder.CreateGround("mesh", {}, this.scene);

    this.material = new SampleMaterial("material", this.scene);
    this.mesh.material = this.material;
  }

  update() {
  }

  render() {
    this.scene.render();
  }
}
