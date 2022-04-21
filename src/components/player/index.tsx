import "./player.scss";
import { usePlayerStore } from "../../store/player";
import { useEffect } from "react";

const Player = () => {
  const { profile, location } = usePlayerStore();
  const targetBlock = usePlayerStore.getState().targetBlock;
  useEffect(() => {
    console.log(targetBlock.item);
    console.log(targetBlock.process / targetBlock.processingTime);
  }, [targetBlock.process]);
  return (
    <div
      className="player"
      style={{
        left: `${location.x}px`,
        top: `${location.y}px`,
      }}
    >
      <div className="processBarWrapper">
        <div
          className="processBar"
          style={{
            width:
              targetBlock.item && targetBlock.processingTime
                ? (targetBlock.process / targetBlock.processingTime) * 40
                : 0,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Player;
