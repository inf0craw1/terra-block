import "./player.scss";
import { usePlayerStore } from "../../store/player";

const Player = () => {
  const { profile, location } = usePlayerStore();

  return (
    <div className="player" style={{
      left: `${location.x}px`,
      top: `${location.y}px`
    }}>
      <p className="name">{profile.name}</p>
    </div>
  )
}

export default Player;