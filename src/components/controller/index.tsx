import {useEffect, useRef, useState} from "react";
import {usePlayerStore} from "../../store/player";

interface controlInterface {
  (e:KeyboardEvent):void;
}

const Controller = () => {
  const { status, setLocationX } = usePlayerStore();
  const location = usePlayerStore(state => state.location);
  const locationRef = useRef(usePlayerStore.getState().location);
  const keyMap:any = {};
  const sub = usePlayerStore.subscribe(console.log);

  sub();

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

  const handleKeyDown = (e:KeyboardEvent) => {
    setLocationX(location.x - status.speed);
  };
  const handleKeyUp = (e:KeyboardEvent) => {
    keyMap[e.key] = false;
  };
  useEffect(() => {
    // @ts-ignore
    usePlayerStore.subscribe(location => (locationRef.current = location),
      state => state.location);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    const controlInterval = setInterval( () => {
      keyControl();
    }, 100);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      clearInterval(controlInterval);
    }
  }, [])


  return (
    <></>
  )
}

export default Controller;