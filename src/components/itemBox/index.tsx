import "./index.scss";

interface ItemBoxPropsInterface {
  isActive?: boolean;
  code: number;
  quantity: number;
}
const ItemBox = ({
  isActive = false,
  code,
  quantity,
}: ItemBoxPropsInterface) => {
  return (
    <div className={`item-box ${isActive && "active"}`}>
      {quantity ? (
        <>
          {" "}
          <img
            src={`/asset/img/map/${code}.png`}
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
