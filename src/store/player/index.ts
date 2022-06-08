import create from "zustand";
import { ItemInterface, PlayerStoreInterface } from "./it";
import { devtools } from "zustand/middleware";
import { gameData } from "../../datas/gameData";

const { ITEM } = gameData;

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
      code: 0,
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
    setLocation: (loc) =>
      set((state) => ({
        ...state,
        location: { ...state.location, x: loc.x, y: loc.y },
      })),
    setTargetBlock: (row, col) =>
      set((state) => ({
        ...state,
        targetBlock: { ...state.targetBlock, row: row, col: col },
      })),
    setTargetBlockItem: (item) =>
      set((state) => ({
        ...state,
        targetBlock: { ...state.targetBlock, code: item },
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
    addItem: (item) => {
      let additionalItem = JSON.parse(JSON.stringify(item));
      set((state) => {
        const newHandItems: ItemInterface[] = JSON.parse(
          JSON.stringify(state.hand.items)
        );
        const newInventoryItems: ItemInterface[][] = JSON.parse(
          JSON.stringify(state.inventory.items)
        );

        for (let i = 0; i < state.hand.items.length; i++) {
          if (
            state.hand.items[i].code === additionalItem.code &&
            ITEM.maxQuantity > state.hand.items[i].quantity
          ) {
            let additionalQuantity =
              state.hand.items[i].quantity + additionalItem.quantity <=
              ITEM.maxQuantity
                ? additionalItem.quantity
                : ITEM.maxQuantity - state.hand.items[i].quantity;
            newHandItems[i].quantity += additionalQuantity;
            additionalItem.quantity -= additionalQuantity;
            if (additionalItem.quantity === 0)
              return { ...state, hand: { ...state.hand, items: newHandItems } };
          }
        }
        for (let i = 0; i < state.inventory.items.length; i++) {
          for (let j = 0; j < state.inventory.items[i].length; j++) {
            if (
              state.inventory.items[i][j].code === additionalItem.code &&
              state.inventory.items[i][j].quantity < ITEM.maxQuantity
            ) {
              let additionalQuantity =
                state.inventory.items[i][j].quantity +
                  additionalItem.quantity <=
                ITEM.maxQuantity
                  ? ITEM.maxQuantity - additionalItem.quantity
                  : ITEM.maxQuantity;
              newInventoryItems[i][j].quantity += additionalQuantity;
              additionalItem.quantity -= additionalQuantity;
              if (additionalItem.quantity === 0)
                return {
                  ...state,
                  inventory: { ...state.inventory, items: newInventoryItems },
                };
            }
          }
        }
        for (let i = 0; i < state.hand.items.length; i++) {
          if (state.hand.items[i].code === 0) {
            let additionalQuantity =
              additionalItem.quantity <= ITEM.maxQuantity
                ? additionalItem.quantity
                : ITEM.maxQuantity;
            newHandItems[i].code = additionalItem.code;
            newHandItems[i].quantity += additionalQuantity;
            additionalItem.quantity -= additionalQuantity;
            if (additionalItem.quantity === 0)
              return { ...state, hand: { ...state.hand, items: newHandItems } };
          }
        }
        for (let i = 0; i < state.inventory.items.length; i++) {
          for (let j = 0; j < state.inventory.items[i].length; j++) {
            if (state.inventory.items[i][j].code === 0) {
              let additionalQuantity =
                additionalItem.quantity <= ITEM.maxQuantity
                  ? additionalItem.quantity
                  : ITEM.maxQuantity;
              newInventoryItems[i][j].code = additionalItem.code;
              newInventoryItems[i][j].quantity += additionalQuantity;
              additionalItem.quantity -= additionalQuantity;
              if (additionalItem.quantity === 0)
                return {
                  ...state,
                  inventory: { ...state.inventory, items: newInventoryItems },
                };
            }
          }
        }
      });
    },
    removeItem: (item) => {
      let removalItem = JSON.parse(JSON.stringify(item));
      set((state) => {
        const newHandItems: ItemInterface[] = JSON.parse(
          JSON.stringify(state.hand.items)
        );
        for (let i = 0; i < state.hand.items.length; i++) {
          if (state.hand.items[i].code === removalItem.code) {
            let removalQuantity =
              state.hand.items[i].quantity <= removalItem.quantity
                ? state.hand.items[i].quantity
                : removalItem.quantity;
            newHandItems[i].quantity -= removalQuantity;
            removalItem.quantity -= removalQuantity;
            if (!newHandItems[i].quantity) {
              newHandItems[i].code = 0;
            }
            if (removalItem.quantity === 0)
              return { ...state, hand: { ...state.hand, items: newHandItems } };
          }
        }
        return { ...state, hand: { ...state.hand, items: newHandItems } };
      });
    },
  }))
);
