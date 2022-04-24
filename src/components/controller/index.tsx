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
    setTargetBlockProcess,
    setHandActive,
    setHandItems,
  } = usePlayerStore();
  const keyMap: KeyMapInterface = {};
  const { DISPLAY, PROCESSING_TIME, ITEM } = useGameStore();
  const hand = usePlayerStore.getState().hand;

  const getItem = (item: number) => {
    for (let i = 0; i < hand.items.length; i++) {
      if (
        hand.items[i].code === item &&
        hand.items[i].quantity < ITEM.maxQuantity
      ) {
        const newItems = JSON.parse(JSON.stringify(hand.items));
        newItems[i].quantity++;
        setHandItems(newItems);
        return;
      }
    }
    for (let i = 0; i < hand.items.length; i++) {
      if (hand.items[i].code === 0) {
        const newItems = JSON.parse(JSON.stringify(hand.items));
        newItems[i].code = item;
        newItems[i].quantity++;
        setHandItems(newItems);
        return;
      }
    }
  };

  useEffect(() => {
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
        if (targetBlock.item) {
          setTargetBlockProcess(
            targetBlock.process + 10 >= targetBlock.processingTime
              ? targetBlock.processingTime
              : targetBlock.process + 10
          );
          if (targetBlock.process >= targetBlock.processingTime) {
            setTargetBlockProcess(0);
            getItem(targetBlock.item);
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
