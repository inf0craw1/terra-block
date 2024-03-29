import "./index.scss";
import { usePlayerStore } from "../../store/player";
import ItemBox from "../itemBox";
import { useEffect, useState } from "react";
import { gameData } from "../../datas/gameData";

const Inventory = () => {
  const inventory = usePlayerStore.getState().inventory;
  const hand = usePlayerStore.getState().hand;
  const { addItem, removeItem } = usePlayerStore();
  const { CRAFT_LIST, PROCESSING_TIME } = gameData;
  const [craftableList, setCraftableList] = useState<boolean[]>([]);
  const getAssembledItems = () => {
    let assembledItems: any = Object.assign(PROCESSING_TIME);
    for (let item in assembledItems) {
      assembledItems[item].quantity = 0;
    }
    for (let i = 0; i < inventory.items.length; i++) {
      for (let j = 0; j < inventory.items[i].length; j++) {
        if (inventory.items[i][j].code) {
          assembledItems[inventory.items[i][j].code].quantity +=
            inventory.items[i][j].quantity;
        }
      }
    }
    for (let i = 0; i < hand.items.length; i++) {
      if (hand.items[i].code) {
        assembledItems[hand.items[i].code].quantity += hand.items[i].quantity;
      }
    }
    return assembledItems;
  };

  const handleCraftingListClick = (listIdx: number) => {
    if (!craftableList[listIdx]) return;
    for (let i = 0; i < CRAFT_LIST[listIdx].using.length; i++) {
      removeItem(CRAFT_LIST[listIdx].using[i]);
    }
    for (let i = 0; i < CRAFT_LIST[listIdx].gets.length; i++) {
      addItem(CRAFT_LIST[listIdx].gets[i]);
    }
  };

  useEffect(() => {
    let assembledItems: any = getAssembledItems();
    setCraftableList(
      CRAFT_LIST.map((listItem) => {
        for (let i = 0; i < listItem.using.length; i++) {
          if (
            assembledItems[listItem.using[i].code].quantity <
            listItem.using[i].quantity
          ) {
            return false;
          }
        }
        return true;
      })
    );
  }, [inventory.items, hand.items]);

  return (
    <div className="inventory-wrapper">
      <div className="inventory">
        <div className="craft-area">
          <div className="crafting-list">
            {CRAFT_LIST.map((l, lIdx) => (
              <div
                key={`craftingList${lIdx}`}
                className={`crafting-list-item ${
                  craftableList[lIdx] && "craftable"
                }`}
                onClick={() => handleCraftingListClick(lIdx)}
              >
                <div className="using-list">
                  {l.using.map((using, uIdx) => (
                    <ItemBox
                      key={`usingList${lIdx}_${uIdx}`}
                      code={using.code}
                      quantity={using.quantity}
                    />
                  ))}
                </div>
                <span>=&gt;</span>
                <div className="crafted-list">
                  {l.gets.map((using, uIdx) => (
                    <ItemBox
                      key={`craftedList${lIdx}_${uIdx}`}
                      code={using.code}
                      quantity={using.quantity}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="items-area">
          <div className="items">
            {inventory.items.map((row, rowIdx) =>
              row.map((item, colIdx) => (
                <ItemBox
                  key={`inventory${rowIdx}${colIdx}`}
                  code={item.code}
                  quantity={item.quantity}
                ></ItemBox>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
