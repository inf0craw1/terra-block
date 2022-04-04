import './game.scss';
import RenderMap from "./Map";

function Game() {

  const map:number[][] = Array.from({length: 28}, () => (Array.from({length: 48}, () => 0)));
  return (
    <div className="window">
      <div className="display">
        <RenderMap mapData={map} />
      </div>
    </div>
  )
}

export default Game;