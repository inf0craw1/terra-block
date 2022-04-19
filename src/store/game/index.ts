import create from "zustand";
import { GameStoreInterface } from "./it";
import { devtools } from "zustand/middleware";

export const useGameStore = create(
  devtools<GameStoreInterface>(() => ({
    DISPLAY: {
      width: 960,
      height: 540,
    },
    BLOCK_SIZE: 20,
    PROCESSING_TIME: {
      1: {
        item: 1,
        processingTime: 3,
      },
      2: {
        item: 2,
        processingTime: 2,
      },
      3: {
        item: 3,
        processingTime: 5,
      },
    },
  }))
);
