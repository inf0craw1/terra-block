import create from "zustand";
import { PlayerStoreInterface } from "./it";
import { devtools } from "zustand/middleware";

export const usePlayerStore = create<PlayerStoreInterface>(
  devtools((set) => ({
    profile: {
      name: "covy",
      id: "inf0craw1",
    },
    status: {
      HP: 100,
      maxHP: 100,
      speed: 3,
      direction: 8,
    },
    location: {
      map: 0,
      x: 470,
      y: 260,
    },
    size: {
      width: 20,
      height: 20,
    },
    targetBlock: {
      x: 0,
      y: 0,
      item: 0,
    },
    hand: [0, 0, 0, 0, 0],
    inventory: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    setStatusHP: (HP) =>
      set((state) => ({ ...state, status: { ...state.status, HP: HP } })),
    setStatusMaxHP: (maxHP) =>
      set((state) => ({ ...state, status: { ...state.status, maxHP: maxHP } })),
    setStatusSpeed: (speed) =>
      set((state) => ({ ...state, status: { ...state.status, speed: speed } })),
    setStatusDirection: (direction) =>
      set((state) => ({
        ...state,
        status: { ...state.status, direction: direction },
      })),
    setLocationMap: (map) =>
      set((state) => ({ ...state, location: { ...state.location, map: map } })),
    setLocationX: (x) =>
      set((state) => ({ ...state, location: { ...state.location, x: x } })),
    setLocationY: (y) =>
      set((state) => ({ ...state, location: { ...state.location, y: y } })),
    setTargetBlock: (x, y) =>
      set((state) => ({
        ...state,
        targetBlock: { ...state.targetBlock, x: x, y: y },
      })),
    setTargetBlockItem: (item) =>
      set((state) => ({
        ...state,
        targetBlock: { ...state.targetBlock, item: item },
      })),
  }))
);
