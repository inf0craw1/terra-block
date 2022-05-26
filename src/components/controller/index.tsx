import { useEffect } from "react";
import { usePlayerStore } from "../../store/player";
import { KeyMapInterface } from "../../store/contorller/it";
import { gameData } from "../../datas/gameData";
import { useGameStore } from "../../store/game";

const Controller = () => {
  const { DISPLAY } = gameData;
  const {
    status,
    size,
    setLocationX,
    setLocationY,
    setStatusDirection,
    setTargetBlockProcess,
    setHandActive,
    setInventoryOpen,
    addItem,
    removeItem,
  } = usePlayerStore();
  const keyMap: KeyMapInterface = {};
  const { setMap } = useGameStore();

  useEffect(() => {
    const intervalFrequency = 10;
    const interval = setInterval(() => {
      const loc = usePlayerStore.getState().location;
      const targetBlock = usePlayerStore.getState().targetBlock;
      const hand = usePlayerStore.getState().hand;
      const map = useGameStore.getState().map;

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
        if (targetBlock.code) {
          setTargetBlockProcess(
            targetBlock.process + intervalFrequency >=
              targetBlock.processingTime
              ? targetBlock.processingTime
              : targetBlock.process + intervalFrequency
          );
          if (targetBlock.process >= targetBlock.processingTime) {
            setTargetBlockProcess(0);
            addItem({ code: targetBlock.code, quantity: 1 });
            setMap(targetBlock.row, targetBlock.col, 0);
          }
        } else if (hand.items[hand.active - 1]) {
          removeItem({ code: hand.items[hand.active - 1].code, quantity: 1 });
          setMap(
            targetBlock.row,
            targetBlock.col,
            hand.items[hand.active - 1].code
          );
        }
      } else {
        setTargetBlockProcess(0);
      }
      if (keyMap["1"]) {
        setHandActive(1);
      }
      if (keyMap["2"]) {
        setHandActive(2);
      }
      if (keyMap["3"]) {
        setHandActive(3);
      }
      if (keyMap["4"]) {
        setHandActive(4);
      }
      if (keyMap["5"]) {
        setHandActive(5);
      }
      if (keyMap["6"]) {
        setHandActive(6);
      }
      if (keyMap["7"]) {
        setHandActive(7);
      }
      if (keyMap["8"]) {
        setHandActive(8);
      }
    }, intervalFrequency);

    const handleKeyDown = (e: KeyboardEvent) => {
      let timeout;
      const inventory = usePlayerStore.getState().inventory;
      keyMap[e.key] = true;
      e.preventDefault();
      if (e.key === "Tab") {
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          setInventoryOpen(!inventory.isOpen);
        }, 10);
      }
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
