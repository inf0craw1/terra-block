export interface PlayerStoreInterface {
  profile: {
    name: string;
    id: string;
  },
  status: {
    HP: number;
    maxHP: number;
    speed: number;
  },
  location: {
    map: number;
    x: number;
    y: number;
  },
  hand: number[];
  inventory: number[][];
  setStatusHP: (HP:number) => void;
  setStatusMaxHP: (maxHP:number) => void;
  setStatusSpeed: (speed:number) => void;
  setLocationMap: (map:number) => void;
  setLocationX: (x:number) => void;
  setLocationY: (y:number) => void;
}