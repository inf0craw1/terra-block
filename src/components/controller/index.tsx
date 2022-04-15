import { useEffect } from "react";
import { usePlayerStore } from "../../store/player";
import { KeyMapInterface } from "../../store/contorller/it";
import { useGameStore } from "../../store/game";

const Controller = () => {
  const { status, size, setLocationX, setLocationY, setTargetBlock } =
    usePlayerStore();
  const keyMap: KeyMapInterface = {};
  const { DISPLAY, BLOCK_SIZE } = useGameStore();

  useEffect(() => {
    const interval = setInterval(() => {
      const loc = usePlayerStore.getState().location;

      if (keyMap?.ArrowLeft) {
        setLocationX(loc.x - status.speed <= 0 ? 0 : loc.x - status.speed);
        setTargetBlock(
          Math.floor(loc.x / BLOCK_SIZE),
          Math.floor(loc.y / BLOCK_SIZE)
        );
      }
      if (keyMap?.ArrowRight) {
        setLocationX(
          loc.x + status.speed >= DISPLAY.width - size.width
            ? DISPLAY.width - size.width
            : loc.x + status.speed
        );
        setTargetBlock(
          Math.floor(loc.x / BLOCK_SIZE),
          Math.floor(loc.y / BLOCK_SIZE)
        );
      }
      if (keyMap?.ArrowUp) {
        setLocationY(loc.y - status.speed <= 0 ? 0 : loc.y - status.speed);
        setTargetBlock(
          Math.floor(loc.x / BLOCK_SIZE),
          Math.floor(loc.y / BLOCK_SIZE)
        );
      }
      if (keyMap?.ArrowDown) {
        setLocationY(
          loc.y + status.speed >= DISPLAY.height - size.height
            ? DISPLAY.height - size.height
            : loc.y + status.speed
        );
        setTargetBlock(
          Math.floor(loc.x / BLOCK_SIZE),
          Math.floor(loc.y / BLOCK_SIZE)
        );
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
