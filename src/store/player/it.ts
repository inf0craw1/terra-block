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
    row: number;
    col: number;
    item: number;
    process: number;
    processingTime: number;
  };
  hand: {
    active: number;
    items: { code: number; quantity: number }[];
  };
  inventory: number[][];
  setStatusHP: (HP: number) => void;
  setStatusMaxHP: (maxHP: number) => void;
  setStatusSpeed: (speed: number) => void;
  setStatusDirection: (direction: 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9) => void;
  setLocationMap: (map: number) => void;
  setLocationX: (x: number) => void;
  setLocationY: (y: number) => void;
  setTargetBlock: (row: number, col: number) => void;
  setTargetBlockItem: (item: number) => void;
  setTargetBlockProcess: (process: number) => void;
  setTargetBlockProcessingTime: (processingTime: number) => void;
  setHandActive: (active: number) => void;
  setHandItems: (items: { code: number; quantity: number }[]) => void;
}
