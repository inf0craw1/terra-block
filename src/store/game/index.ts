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
      100: {
        item: 100,
        processingTime: 2000,
      },
      200: {
        item: 200,
        processingTime: 5000,
      },
      210: {
        item: 210,
        processingTime: 3000,
      },
      290: {
        item: 290,
        processingTime: 1000,
      },
    },
    ITEM: {
      maxQuantity: 10,
    },
  }))
);
