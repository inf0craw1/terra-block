import { MapDataInterface } from "../../datas/map";

export interface GameStoreInterface {
  map: MapDataInterface;
  objectMap: MapDataInterface;
  setObjectMap: (rowIdx: number, colIdx: number, code: number) => void;
}
