import { Color3, Mesh, MeshBuilder, StandardMaterial, Scene } from "babylonjs";

const TILE_SIZE = 10;
const TILES_COUNT = 10;
const SPEED = 0.1;

const colors: Color3[] = new Array(
  new Color3(1, 1, 1),
  new Color3(0, 1, 0),
  new Color3(1, 1, 0),
  new Color3(0, 1, 1)
);


function randomPick<T>(arr: Array<T>): T {
  return arr[Math.floor(Math.random() * colors.length)];
}


function createTileAt(scene: Scene, position: number): Mesh {
  const tile = MeshBuilder.CreateGround("ground", {width:TILE_SIZE, height:TILE_SIZE});
  tile.position.y = -0.5;
  tile.position.z = position;
  const groundMat = new StandardMaterial("groundMat", scene);
  groundMat.diffuseColor = randomPick(colors);
  tile.material = groundMat;
  return tile;
}

export class InfiniteGround {
  private tiles: Mesh[];
  private scene: Scene;

  constructor(scene: Scene) {
    this.tiles = new Array();
    this.scene = scene;

    for (let i = 0; i < TILES_COUNT; ++i) {
      const tile = createTileAt(this.scene, -TILE_SIZE * i);
      this.tiles.push(tile);
    }
  }

  update() {
    for (let i = 0; i < this.tiles.length; ++i) {
      let tile = this.tiles[i];
      if (tile.position.z > TILE_SIZE) {
        const newTile = createTileAt(this.scene, -TILE_SIZE * (TILES_COUNT - 1));
        this.tiles[i] = newTile;
        tile.dispose();
      }
      tile.position.z += SPEED;
    }
  }
}
