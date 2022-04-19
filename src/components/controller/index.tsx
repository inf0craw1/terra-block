import { useEffect } from "react";
import { usePlayerStore } from "../../store/player";
import { KeyMapInterface } from "../../store/contorller/it";
import { useGameStore } from "../../store/game";

const Controller = () => {
  const {
    status,
    size,
    setLocationX,
    setLocationY,
    setStatusDirection,
    targetBlock,
  } = usePlayerStore();
  const keyMap: KeyMapInterface = {};
  const { DISPLAY, PROCESSING_TIME } = useGameStore();

  useEffect(() => {
    const interval = setInterval(() => {
      const loc = usePlayerStore.getState().location;

      if (keyMap["ArrowLeft"] && !keyMap["ArrowRight"]) {
        setStatusDirection(4);
        setLocationX(loc.x - status.speed <= 0 ? 0 : loc.x - status.speed);
      }
      if (keyMap["ArrowRight"] && !keyMap["ArrowLeft"]) {
        setStatusDirection(6);
        setLocationX(
          loc.x + status.speed >= DISPLAY.width - size.width
            ? DISPLAY.width - size.width
            : loc.x + status.speed
        );
      }
      if (keyMap["ArrowUp"] && !keyMap["ArrowDown"]) {
        setStatusDirection(2);
        setLocationY(loc.y - status.speed <= 0 ? 0 : loc.y - status.speed);
      }
      if (keyMap["ArrowDown"] && !keyMap["ArrowUp"]) {
        setStatusDirection(8);
        setLocationY(
          loc.y + status.speed >= DISPLAY.height - size.height
            ? DISPLAY.height - size.height
            : loc.y + status.speed
        );
      }
      if (keyMap[" "]) {
        if (targetBlock.item) {
        }
      }
    }, 10);

    const handleKeyDown = (e: KeyboardEvent) => {
      keyMap[e.key] = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keyMap[e.key] = false;
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return <></>;
};

export default Controller;
