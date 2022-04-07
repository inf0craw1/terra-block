import {useEffect, useState} from "react";
import {usePlayerStore} from "../../store/player";

interface controlInterface {
  (e:KeyboardEvent):void;
}

const Controller = () => {
  const { status, location, setLocationX } = usePlayerStore();
  const [keyMap, setKeyMap] = useState<any>({});


  document.addEventListener("keydown", (e) => {
    keyMap[e.key] = true;
  });
  document.addEventListener("keyup", (e) => {
    keyMap[e.key] = false;
  });

  const intervalFunc = (location:any) => {
    if(keyMap["ArrowLeft"]) {
      setLocationX(location.x - status.speed);
    }
  }

  const int = setInterval(() => {
    let {location} = usePlayerStore();
    intervalFunc(location);
  }, 1000);

  return (
    <></>
  )
}

export default Controller;