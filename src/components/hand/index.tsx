import "./index.scss";
import { usePlayerStore } from "../../store/player";

const Hand = () => {
  const hand = usePlayerStore.getState().hand;

  return (
    <div className="hand">
      {hand.items.map((h, idx) => (
        <div
          key={`hand${idx}`}
          className={`item ${hand.active === idx + 1 && "active"}`}
        >
          {h.quantity ? (
            <>
              {" "}
              <img
                key={`handItem${idx}`}
                src={`/asset/img/map/${h.code}.png`}
                className={`hand-item`}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <span className={`hand-item-quantity`}>{h.quantity}</span>
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Hand;
