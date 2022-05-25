import { GameDataInterface } from "./it";

export const gameData: GameDataInterface = {
  DISPLAY: {
    width: 960,
    height: 540,
  },
  BLOCK_SIZE: 20,
  PROCESSING_TIME: {
    100: {
      code: 100,
      processingTime: 1000,
    },
    200: {
      code: 200,
      processingTime: 1000,
    },
    210: {
      code: 210,
      processingTime: 2000,
    },
    220: {
      code: 220,
      processingTime: 0,
    },
    290: {
      code: 290,
      processingTime: 1000,
    },
  },
  ITEM: {
    maxQuantity: 10,
  },
  CRAFT_LIST: [
    {
      using: [{ code: 200, quantity: 1 }],
      gets: [{ code: 210, quantity: 4 }],
    },
    {
      using: [{ code: 210, quantity: 2 }],
      gets: [{ code: 220, quantity: 4 }],
    },
  ],
};
