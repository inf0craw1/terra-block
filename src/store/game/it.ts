export interface ProcessingTimeInterface {
  item: number;
  processingTime: number;
}
export interface ItemInterface {
  item: number;
  quantity: number;
}
export interface GameStoreInterface {
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
