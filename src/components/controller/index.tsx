import {useEffect} from "react";
import {usePlayerStore} from "../../store/player";

const Controller = () => {
  const { status, location, setLocationX } = usePlayerStore();
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if(e.key === "ArrowLeft") {
        console.log("arrowleft");
        if(location.x - status.speed <= 0) {
          setLocationX(0);
        } else {
          setLocationX(location.x - status.speed);
        }

      }

    });
  },[]);

  return (
    <></>
  )
}

export default Controller;