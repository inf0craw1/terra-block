import './game.scss';
import RenderMap from "./Map";
import User from "../components/user";
import {mapData} from "../datas/map";
import {usePlayerStore} from "../store/player";
import {useEffect, useState} from "react";

function Game() {
  const { location } = usePlayerStore();
  const [map, setMap] = useState<number[][]>(mapData[0]);

  useEffect(() => {
    setMap(mapData[location.map]);
  }, [location.map]);

  return (
    <div className="window">
      <div className="display">
        <RenderMap mapData={map} />
        <User/>
      </div>
    </div>
  )
}

export default Game;