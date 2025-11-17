import { useEffect, useState } from "react";
import Backgroud from "./compornent/_background/Background/Background";
import Home from "./compornent/_main/Home/Home";
import Works from "./compornent/_main/Works/Works";

export default function App() {
  const [isClickWork, setIsClickWork] = useState(false)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (isClickWork) {
      setIsActive(isActive => !isActive);
      console.log(isActive);

    }
  }, [isClickWork]);

  return (
    <>
      <Home isClickWork={isClickWork} setIsClickWork={setIsClickWork} />
      <Works isActive={isActive} />
      <Backgroud />
    </>
  );
}
