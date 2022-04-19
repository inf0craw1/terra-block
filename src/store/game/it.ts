export interface ProcessingTimeInterface {
  item: number;
  processingTime: number;
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
}
