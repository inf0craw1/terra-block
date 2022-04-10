import {useEffect, useState} from "react";
import {usePlayerStore} from "../../store/player";

interface controlInterface {
  (e:KeyboardEvent):void;
}

const Controller = () => {
  const { status, location, setLocationX } = usePlayerStore();
  const [keyMap, setKeyMap] = useState<any>({});


  const intervalFunc = (location:any) => {
    if(keyMap["ArrowLeft"]) {
      setLocationX(location.x - status.speed);
    }
  }

  const keyControl = () => {
    if(keyMap["ArrowLeft"]) {
      setLocationX(location.x - status.speed);
    }
  }

  useEffect(() => {

    document.addEventListener("keydown", (e) => {
      setKeyMap({...keyMap, [e.key]: true});
    })
    document.addEventListener("keyup", (e) => {
      setKeyMap({...keyMap, [e.key]: false});
    })

    const controlInterval = setInterval( () => {
      keyControl();
    }, 1000);
  }, [])


  return (
    <></>
  )
}

export default Controller;