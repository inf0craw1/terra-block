import { usePlayerStore } from "../../store/player";
import { useEffect } from "react";
import { useGameStore } from "../../store/game";

const TargetBlock = () => {
  const { BLOCK_SIZE } = useGameStore();
  const { targetBlock, status, location, setTargetBlock } = usePlayerStore();

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

    setTargetBlock(
      Math.floor((location.x + additionalX) / BLOCK_SIZE) * BLOCK_SIZE,
      Math.floor((location.y + additionalY) / BLOCK_SIZE) * BLOCK_SIZE
    );
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
