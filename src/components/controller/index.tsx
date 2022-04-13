import { useEffect } from "react";
import { usePlayerStore } from "../../store/player";
import { KeyMapInterface } from "../../store/contorller/it";

const Controller = () => {
  const { status, setLocationX, setLocationY } = usePlayerStore();
  const keyMap: KeyMapInterface = {};
  const DISPLAY_WIDTH: any = process.env.REACT_APP_DISPLAY_WIDTH;
  const DISPLAY_HEIGHT: any = process.env.REACT_APP_DISPLAY_HEIGHT;

  console.log(DISPLAY_HEIGHT);

  useEffect(() => {
    const interval = setInterval(() => {
      const loc = usePlayerStore.getState().location;

      if (keyMap?.ArrowLeft) {
        setLocationX(loc.x - status.speed);
      }
      if (keyMap?.ArrowRight) {
        setLocationX(
          loc.x + status.speed >= +DISPLAY_WIDTH
            ? +DISPLAY_WIDTH
            : loc.x + status.speed
        );
      }
      if (keyMap?.ArrowUp) {
        setLocationY(loc.y - status.speed);
      }
      if (keyMap?.ArrowDown) {
        setLocationY(loc.y + status.speed);
      }
    }, 10);

    document.addEventListener("keydown", (e) => {
      keyMap[e.key] = true;
    });
    document.addEventListener("keyup", (e) => {
      keyMap[e.key] = false;
    });
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <></>;
};

export default Controller;
