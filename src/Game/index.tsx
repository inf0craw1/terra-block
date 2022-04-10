import './game.scss';
import RenderMap from "./Map";
import Player from "../components/player";
import {mapData} from "../datas/map";
import {usePlayerStore} from "../store/player";
import {useEffect, useState} from "react";
import Controller from "../components/controller";

function Game() {
  const { location, setLocationX } = usePlayerStore();
  const [map, setMap] = useState<number[][]>(mapData[0]);

  useEffect(() => {
    setMap(mapData[location.map]);
  }, [location.map]);

  useEffect(() => {
    console.log(`${location.x} / ${location.y}`);
  }, [location]);

  return (
    <div className="window">
      <div className="display">
        <RenderMap mapData={map} />
        <Player/>
        <Controller/>
      </div>
    </div>
  )
}

export default Game;