import "./player.scss";
import { usePlayerStore } from "../../store/player";

const Player = () => {
  const { location } = usePlayerStore();
  const targetBlock = usePlayerStore.getState().targetBlock;
  return (
    <div
      className="player"
      style={{
        left: `${location.x}px`,
        top: `${location.y}px`,
      }}
    >
      <div
        className="processBarWrapper"
        style={{
          display: !!targetBlock.process ? "block" : "none",
        }}
      >
        <div
          className="processBar"
          style={{
            width:
              targetBlock.code && targetBlock.processingTime
                ? (targetBlock.process / targetBlock.processingTime) * 40
                : 0,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Player;
