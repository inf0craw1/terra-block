import "./index.scss";
import { usePlayerStore } from "../../store/player";
import { craftList } from "../../datas/craftList";
import ItemBox from "../itemBox";

const Inventory = () => {
  const inventory = usePlayerStore.getState().inventory;
  return (
    <div className="inventory-wrapper">
      <div className="inventory">
        <div className="craft-area">
          <div className="crafting-list">
            {craftList.map((l, lIdx) => (
              <div key={`craftingList${lIdx}`} className={"crafting-list-item"}>
                <div className="using-list">
                  {l.using.map((using, uIdx) => (
                    <ItemBox
                      key={`usingList${lIdx}_${uIdx}`}
                      item={using.item}
                      quantity={using.quantity}
                    />
                  ))}
                </div>
                <span>=&gt;</span>
                <div className="crafted-list">
                  {l.gets.map((using, uIdx) => (
                    <ItemBox
                      key={`craftedList${lIdx}_${uIdx}`}
                      item={using.item}
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
                  item={item.code}
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
