import { Mesh, MeshBuilder, Scene } from "babylonjs";
import { TILE_SIZE } from "./infiniteGround";

interface GameObject {
  mesh: Mesh;
}

export class Player implements GameObject {
  mesh: Mesh;
  n: number;

  constructor(scene: Scene) {
    this.mesh = MeshBuilder.CreateBox("player", {}, scene);
    this.n = 0;
  }

  update() {
    this.n += 0.04;
    this.mesh.position.x = Math.sin(this.n) * (TILE_SIZE / 2 - 0.5);
  }
}
