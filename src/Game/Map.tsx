import { RenderMapPropsInterface} from "./it";

function RenderMap(props:RenderMapPropsInterface):JSX.Element {
  const { mapData } = props;
  return (
    <>
      { mapData.map((row, rowIdx) => row.map((col, colIdx) => <img key={`map_${rowIdx}_${colIdx}`} src="/asset/img/map/grass.png" alt="" style={{position:'absolute', top: rowIdx*20, left:colIdx*20, width: 20, height:20  }}/>
    ))}
    </>
  )
}

export default RenderMap;