import { useEffect } from "react";
import { usePlayerStore } from "../../store/player";
import { KeyMapInterface } from "../../store/controller/it";
import { gameData } from "../../datas/gameData";
import { useGameStore } from "../../store/game";
import { LocationInterface } from "../../store/player/it";

const Controller = () => {
  const { DISPLAY } = gameData;
  const {
    status,
    size,
    setLocation,
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
  const { objectMap } = useGameStore.getState();
  const resetTargetBlock = () => {
    const { location, targetBlock } = usePlayerStore.getState();

    setTargetBlockItem(
      objectMap[location.map][targetBlock.row][targetBlock.col]
    );
  };

  useEffect(() => {
    const getMovingLocation = (
      currentLocation: LocationInterface,
      diffLocation: LocationInterface
    ) => {
      const resLocation: LocationInterface = JSON.parse(
        JSON.stringify(currentLocation)
      );
      resLocation.x += diffLocation.x;
      resLocation.y += diffLocation.y;
      if (currentLocation.x + diffLocation.x < 0) {
        resLocation.x = 0;
      }
      if (currentLocation.y + diffLocation.y < 0) {
        resLocation.y = 0;
      }
      if (currentLocation.x + diffLocation.x + size.width > DISPLAY.width) {
        resLocation.x = DISPLAY.width;
      }
      if (currentLocation.y + diffLocation.y + size.height > DISPLAY.height) {
        resLocation.y = DISPLAY.height;
      }
      return resLocation;
    };
    const intervalFrequency = 10;
    const interval = setInterval(() => {
      const loc = usePlayerStore.getState().location;
      const targetBlock = usePlayerStore.getState().targetBlock;
      const hand = usePlayerStore.getState().hand;

      if (keyMap["ArrowLeft"] && !keyMap["ArrowRight"]) {
        setStatusDirection(4);
        setLocation(
          getMovingLocation({ x: loc.x, y: loc.y }, { x: -status.speed, y: 0 })
        );
      }
      if (keyMap["ArrowRight"] && !keyMap["ArrowLeft"]) {
        setStatusDirection(6);
        setLocation(
          getMovingLocation({ x: loc.x, y: loc.y }, { x: status.speed, y: 0 })
        );
      }
      if (keyMap["ArrowUp"] && !keyMap["ArrowDown"]) {
        setStatusDirection(2);
        setLocation(
          getMovingLocation({ x: loc.x, y: loc.y }, { x: 0, y: -status.speed })
        );
      }
      if (keyMap["ArrowDown"] && !keyMap["ArrowUp"]) {
        setStatusDirection(8);
        setLocation(
          getMovingLocation({ x: loc.x, y: loc.y }, { x: 0, y: status.speed })
        );
      }
      if (keyMap[" "]) {
        if (
          hand.items[hand.active - 1].code % 100 >= 50 ||
          hand.items[hand.active - 1].code === 0
        ) {
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

    let tabTimeout: any,
      placeTimeout: any = null;
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
        }, 10);
      }
      if (e.key === " ") {
        if (!placeTimeout) {
          if (!targetBlock.code && hand.items[hand.active - 1].code) {
            removeItem({ code: hand.items[hand.active - 1].code, quantity: 1 });
            setObjectMap(
              targetBlock.row,
              targetBlock.col,
              hand.items[hand.active - 1].code
            );
            resetTargetBlock();
          }
          placeTimeout = setTimeout(() => {
            placeTimeout = null;
          }, 200);
        }
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
  }, [
    DISPLAY.height,
    DISPLAY.width,
    addItem,
    keyMap,
    removeItem,
    resetTargetBlock,
    setHandActive,
    setInventoryOpen,
    setLocation,
    setObjectMap,
    setStatusDirection,
    setTargetBlockProcess,
    size.height,
    size.width,
    status.speed,
  ]);

  return <></>;
};

export default Controller;
