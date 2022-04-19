export interface PlayerStoreInterface {
  profile: {
    name: string;
    id: string;
  };
  status: {
    HP: number;
    maxHP: number;
    speed: number;
    direction: 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9;
  };
  location: {
    map: number;
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
  targetBlock: {
    x: number;
    y: number;
    item: number;
    process: number;
    processingTime: number;
  };
  hand: number[];
  inventory: number[][];
  setStatusHP: (HP: number) => void;
  setStatusMaxHP: (maxHP: number) => void;
  setStatusSpeed: (speed: number) => void;
  setStatusDirection: (direction: 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9) => void;
  setLocationMap: (map: number) => void;
  setLocationX: (x: number) => void;
  setLocationY: (y: number) => void;
  setTargetBlock: (x: number, y: number) => void;
  setTargetBlockItem: (item: number) => void;
  setProcess: (process: number) => void;
  setProcessingTime: (processingTime: number) => void;
}
