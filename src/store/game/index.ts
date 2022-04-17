import create from "zustand";
import { GameStoreInterface } from "./it";
import { devtools } from "zustand/middleware";

export const useGameStore = create<GameStoreInterface>(
  devtools(() => ({
    DISPLAY: {
      width: 960,
      height: 540,
    },
    BLOCK_SIZE: 20,
  }))
);
