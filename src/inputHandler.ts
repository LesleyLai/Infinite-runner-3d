import { KeyboardEventTypes } from "babylonjs";

export class InputHandler {
  register() {
    return (kbInfo) => {
      switch (kbInfo.type) {
        case KeyboardEventTypes.KEYDOWN:
          console.log("KEY DOWN: ", kbInfo.event.key);
          break;
        case KeyboardEventTypes.KEYUP:
          console.log("KEY UP: ", kbInfo.event.keyCode);
          break;
      }
    };
  }
}
