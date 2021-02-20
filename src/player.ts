import { Mesh, MeshBuilder, Scene } from "babylonjs";

interface GameObject {
  mesh: Mesh;
}

export class Player implements GameObject {
  mesh: Mesh;

  constructor(scene: Scene) {
    this.mesh = MeshBuilder.CreateBox("player", {}, scene);
  }
}
