export interface ProcessingTimeInterface {
  code: number;
  processingTime: number;
}
export interface ItemInterface {
  code: number;
  quantity: number;
}
export interface GameDataInterface {
  DISPLAY: {
    width: number;
    height: number;
  };
  BLOCK_SIZE: number;
  PROCESSING_TIME: {
    [item: number]: ProcessingTimeInterface;
  };
  ITEM: {
    maxQuantity: number;
  };
  CRAFT_LIST: {
    using: ItemInterface[];
    gets: ItemInterface[];
  }[];
}
