import "./game.scss";
import RenderMap from "./Map";
import RenderObjectMap from "./ObjectMap";
import Player from "../components/player";
import { usePlayerStore } from "../store/player";
import Controller from "../components/controller";
import TargetBlock from "../components/targetBlock";
import Hand from "../components/hand";
import Inventory from "../components/inventory";
import { useGameStore } from "../store/game";

function Game() {
  const { location } = usePlayerStore();
  const inventory = usePlayerStore.getState().inventory;
  const map = useGameStore.getState().map;
  const objectMap = useGameStore.getState().objectMap;
  return (
    <div className="window">
      <div className="display">
        <RenderMap mapData={map[location.map]} />
        <Player />
        <RenderObjectMap mapData={objectMap[location.map]} />
        <TargetBlock />
        {inventory.isOpen ? <Inventory /> : null}
        <Hand />
        <Controller />
      </div>
    </div>
  );
}

export default Game;
