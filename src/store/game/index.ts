import create from "zustand";
import { mapData } from "../../datas/map";
import { devtools } from "zustand/middleware";
import { GameStoreInterface } from "./it";

export const useGameStore = create<GameStoreInterface>(
  devtools((set) => ({
    map: mapData,
  }))
);
