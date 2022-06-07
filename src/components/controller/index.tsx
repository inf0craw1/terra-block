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
    setTargetBlockItem,
    setTargetBlockProcess,
    setHandActive,
    setInventoryOpen,
    addItem,
    removeItem,
  } = usePlayerStore();
  const keyMap: KeyMapInterface = {};
  const { setObjectMap } = useGameStore();

  const resetTargetBlock = () => {
    const { location, targetBlock } = usePlayerStore.getState();
    const { objectMap } = useGameStore.getState();

    setTargetBlockItem(
      objectMap[location.map][targetBlock.row][targetBlock.col]
    );
  };

  useEffect(() => {
    const intervalFrequency = 10;
    const interval = setInterval(() => {
      const loc = usePlayerStore.getState().location;
      const targetBlock = usePlayerStore.getState().targetBlock;

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
            setObjectMap(targetBlock.row, targetBlock.col, 0);
            resetTargetBlock();
          }
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

    let tabTimeout: any, placeTimeout: any;
    const handleKeyDown = (e: KeyboardEvent) => {
      const inventory = usePlayerStore.getState().inventory;
      const targetBlock = usePlayerStore.getState().targetBlock;
      const hand = usePlayerStore.getState().hand;

      keyMap[e.key] = true;
      e.preventDefault();
      if (e.key === "Tab") {
        if (tabTimeout) {
          clearTimeout(tabTimeout);
        }
        tabTimeout = setTimeout(() => {
          setInventoryOpen(!inventory.isOpen);
          console.log("tabTimeout");
        }, 10);
      }
      if (e.key === " ") {
        if (placeTimeout) {
          clearTimeout(placeTimeout);
        }
        placeTimeout = setTimeout(() => {
          if (!targetBlock.code && hand.items[hand.active - 1].code) {
            removeItem({ code: hand.items[hand.active - 1].code, quantity: 1 });
            setObjectMap(
              targetBlock.row,
              targetBlock.col,
              hand.items[hand.active - 1].code
            );
            resetTargetBlock();
          }
        }, 200);
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
