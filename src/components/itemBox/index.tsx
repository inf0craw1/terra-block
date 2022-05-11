import "./index.scss";

interface ItemBoxPropsInterface {
  key: string;
  isActive?: boolean;
  item: number;
  quantity: number;
}
const ItemBox = ({
  key,
  isActive = false,
  item,
  quantity,
}: ItemBoxPropsInterface) => {
  return (
    <div key={key} className={`item-box ${isActive && "active"}`}>
      {quantity ? (
        <>
          {" "}
          <img
            src={`/asset/img/map/${item}.png`}
            className={`item-box-item`}
            style={{
              width: 20,
              height: 20,
            }}
          />
          <span className={`item-box-quantity`}>{quantity}</span>
        </>
      ) : null}
    </div>
  );
};

export default ItemBox;
