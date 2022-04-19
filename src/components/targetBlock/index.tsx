import { usePlayerStore } from "../../store/player";
import { useEffect } from "react";
import { useGameStore } from "../../store/game";
import { mapData } from "../../datas/map";

const TargetBlock = () => {
  const { BLOCK_SIZE, DISPLAY } = useGameStore();
  const { targetBlock, status, location, setTargetBlock, setTargetBlockItem } =
    usePlayerStore();

  useEffect(() => {
    let additionalX = BLOCK_SIZE / 2,
      additionalY = BLOCK_SIZE / 2;

    if (
      status.direction === 1 ||
      status.direction === 2 ||
      status.direction === 3
    ) {
      additionalY -= BLOCK_SIZE;
    } else if (
      status.direction === 7 ||
      status.direction === 8 ||
      status.direction === 9
    ) {
      additionalY += BLOCK_SIZE;
    }
    if (
      status.direction === 1 ||
      status.direction === 4 ||
      status.direction === 7
    ) {
      additionalX -= BLOCK_SIZE;
    } else if (
      status.direction === 3 ||
      status.direction === 6 ||
      status.direction === 9
    ) {
      additionalX += BLOCK_SIZE;
    }
    let [rowIdx, colIdx] = [
      Math.floor((location.y + additionalY) / BLOCK_SIZE),
      Math.floor((location.x + additionalX) / BLOCK_SIZE),
    ];
    if (rowIdx <= 0) {
      rowIdx = 0;
    }
    if (rowIdx >= DISPLAY.height / BLOCK_SIZE - 1) {
      rowIdx = DISPLAY.height / BLOCK_SIZE - 1;
    }
    if (colIdx <= 0) {
      colIdx = 0;
    }
    if (colIdx >= DISPLAY.width / BLOCK_SIZE - 1) {
      colIdx = DISPLAY.width / BLOCK_SIZE - 1;
    }

    setTargetBlock(colIdx * BLOCK_SIZE, rowIdx * BLOCK_SIZE);
    setTargetBlockItem(mapData[location.map][rowIdx][colIdx]);
  }, [location]);

  return (
    <div
      className={"targeted-block"}
      style={{
        width: BLOCK_SIZE,
        height: BLOCK_SIZE,
        position: "absolute",
        top: targetBlock.y,
        left: targetBlock.x,
      }}
    ></div>
  );
};

export default TargetBlock;
