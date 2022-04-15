import { RenderMapPropsInterface } from "./it";
import { usePlayerStore } from "../store/player";

function RenderMap(props: RenderMapPropsInterface): JSX.Element {
  const { mapData } = props;
  const { targetBlock } = usePlayerStore();

  return (
    <>
      {mapData.map((row, rowIdx) =>
        row.map((col, colIdx) => (
          <img
            key={`map_${rowIdx}_${colIdx}`}
            src="/asset/img/map/grass.png"
            alt=""
            className={`block ${
              rowIdx === targetBlock.y &&
              colIdx === targetBlock.x &&
              "targeted-block"
            }`}
            style={{
              position: "absolute",
              top: rowIdx * 20,
              left: colIdx * 20,
              width: 20,
              height: 20,
            }}
          />
        ))
      )}
    </>
  );
}

export default RenderMap;
