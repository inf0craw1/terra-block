import create from "zustand";
import { ItemInterface, PlayerStoreInterface } from "./it";
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
      row: 0,
      col: 0,
      item: 0,
      process: 0,
      processingTime: 0,
    },
    hand: {
      active: 1,
      items: [
        { code: 0, quantity: 0 },
        { code: 0, quantity: 0 },
        { code: 0, quantity: 0 },
        { code: 0, quantity: 0 },
        { code: 0, quantity: 0 },
        { code: 0, quantity: 0 },
        { code: 0, quantity: 0 },
        { code: 0, quantity: 0 },
      ],
    },
    inventory: {
      isOpen: false,
      items: [
        [
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
        ],
        [
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
        ],
        [
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
        ],
        [
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
          { code: 0, quantity: 0 },
        ],
      ],
    },
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
    setTargetBlock: (row, col) =>
      set((state) => ({
        ...state,
        targetBlock: { ...state.targetBlock, row: row, col: col },
      })),
    setTargetBlockItem: (item) =>
      set((state) => ({
        ...state,
        targetBlock: { ...state.targetBlock, item: item },
      })),
    setTargetBlockProcess: (targetBlockProcess) =>
      set((state) => ({
        ...state,
        targetBlock: {
          ...state.targetBlock,
          process: targetBlockProcess,
        },
      })),
    setTargetBlockProcessingTime: (targetBlockProcessingTime) =>
      set((state) => ({
        ...state,
        targetBlock: {
          ...state.targetBlock,
          processingTime: targetBlockProcessingTime,
        },
      })),
    setHandActive: (hand) =>
      set((state) => ({
        ...state,
        hand: {
          ...state.hand,
          active: hand,
        },
      })),
    setHandItems: (items) => {
      set((state) => ({
        ...state,
        hand: {
          ...state.hand,
          items: items,
        },
      }));
    },
    setInventoryOpen: (open) => {
      set((state) => ({
        ...state,
        inventory: {
          ...state.inventory,
          isOpen: open,
        },
      }));
    },
    addItem: (item: ItemInterface) => {},
  }))
);
