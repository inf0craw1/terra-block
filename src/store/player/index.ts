import create from "zustand";
import {PlayerStoreInterface} from "./it";

export const usePlayerStore = create<PlayerStoreInterface>((set) => ({
  profile: {
    name: "covy",
    id: "inf0craw1",
  },
  status: {
    HP: 100,
    maxHP: 100,
    speed: 1,
  },
  location: {
    map: 0,
    x: 470,
    y: 260
  },
  hand: [0, 0, 0, 0, 0],
  inventory: [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
  setStatusHP: (HP) => set(state => ({ ...state, status: { ...state.status, HP: HP } })),
  setStatusMaxHP: (maxHP) => set(state => ({ ...state, status: { ...state.status, maxHP: maxHP } })),
  setStatusSpeed: (speed) => set(state => ({ ...state, status: { ...state.status, speed: speed } })),
  setLocationMap: (map) => set(state => ({ ...state, location: { ...state.location, map: map } })),
  setLocationX: (X) => set(state => ({ ...state, location: { ...state.location, X: X } })),
  setLocationY: (Y) => set(state => ({ ...state, location: { ...state.location, Y: Y } })),
}));