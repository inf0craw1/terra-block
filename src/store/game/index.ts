import create from "zustand";
import { mapData } from "../../datas/map";
import { devtools } from "zustand/middleware";
import { GameStoreInterface } from "./it";
import { objectMapData } from "../../datas/objectMap";
import { usePlayerStore } from "../player";

const location = usePlayerStore.getState().location;

export const useGameStore = create<GameStoreInterface>(
  devtools((set) => ({
    map: mapData,
    objectMap: objectMapData,
    setMap: (rowIdx, colIdx, code) => {
      set((state) => {
        if (!code) {
          if (!state.objectMap[location.map][rowIdx][colIdx]) {
            const newMap = JSON.parse(JSON.stringify(state.objectMap));
            newMap[location.map][rowIdx][colIdx] = 0;
            return { ...state, objectMap: newMap };
          }
          if (!state.map[location.map][rowIdx][colIdx]) {
            const newMap = JSON.parse(JSON.stringify(state.map));
            newMap[location.map][rowIdx][colIdx] = 0;
            return { ...state, map: newMap };
          }
        }
        if (!state.map[location.map][rowIdx][colIdx]) {
          const newMap = JSON.parse(JSON.stringify(state.map));
          newMap[location.map][rowIdx][colIdx] = code;
          return { ...state, map: newMap };
        }
        if (!state.objectMap[location.map][rowIdx][colIdx]) {
          const newMap = JSON.parse(JSON.stringify(state.objectMap));
          newMap[location.map][rowIdx][colIdx] = code;
          return { ...state, objectMap: newMap };
        }

        return state;
      });
    },
  }))
);
