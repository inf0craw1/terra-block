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
      processingTime: 100,
    },
    200: {
      code: 200,
      processingTime: 100,
    },
    210: {
      code: 210,
      processingTime: 100,
    },
    250: {
      code: 250,
      processingTime: 0,
    },
    251: {
      code: 251,
      processingTime: 0,
    },
    290: {
      code: 290,
      processingTime: 100,
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
      gets: [{ code: 250, quantity: 4 }],
    },
    {
      using: [
        { code: 250, quantity: 2 },
        { code: 210, quantity: 3 },
      ],
      gets: [{ code: 251, quantity: 1 }],
    },
  ],
};
