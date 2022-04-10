import {useEffect, useRef, useState} from "react";
import {usePlayerStore} from "../../store/player";

interface controlInterface {
  (e:KeyboardEvent):void;
}

const Controller = () => {
  const { status, location, setLocationX } = usePlayerStore();
  const locationRef = useRef(usePlayerStore.getState().location);
  const keyMap:any = {};

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
    // @ts-ignore
    usePlayerStore.subscribe(location => (locationRef.current = location),
      state => state.location);

    document.addEventListener("keydown", (e) => {
      setLocationX(location.x - status.speed);

    })
    document.addEventListener("keyup", (e) => {
      keyMap[e.key] = false;
    })

    const controlInterval = setInterval( () => {
      keyControl();
    }, 100);
  }, [])


  return (
    <></>
  )
}

export default Controller;