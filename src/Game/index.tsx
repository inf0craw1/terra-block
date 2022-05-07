import "./game.scss";
import RenderMap from "./Map";
import RenderObjectMap from "./ObjectMap";
import Player from "../components/player";
import { mapData } from "../datas/map";
import { objectMapData } from "../datas/objectMap";
import { usePlayerStore } from "../store/player";
import { useEffect, useState } from "react";
import Controller from "../components/controller";
import TargetBlock from "../components/targetBlock";
import Hand from "../components/hand";
import Inventory from "../components/inventory";

function Game() {
  const { location } = usePlayerStore();
  const [map, setMap] = useState<number[][]>(mapData[0]);
  const [objectMap, setObjectMap] = useState<number[][]>(objectMapData[0]);
  const inventory = usePlayerStore.getState().inventory;

  useEffect(() => {
    setMap(mapData[location.map]);
  }, [location.map]);

  return (
    <div className="window">
      <div className="display">
        <RenderMap mapData={map} />
        <Player />
        <RenderObjectMap mapData={objectMap} />
        <TargetBlock />
        {inventory.isOpen ? <Inventory /> : null}
        <Hand />
        <Controller />
      </div>
    </div>
  );
}

export default Game;
