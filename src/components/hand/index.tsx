import { usePlayerStore } from "../../store/player";
import ItemBox from "../itemBox";
import "./index.scss";

const Hand = () => {
  const hand = usePlayerStore.getState().hand;

  return (
    <div className="hand">
      {hand.items.map((h, idx) => (
        <ItemBox
          key={`hand${idx}`}
          isActive={hand.active === idx + 1}
          code={h.code}
          quantity={h.quantity}
        ></ItemBox>
      ))}
    </div>
  );
};

export default Hand;
