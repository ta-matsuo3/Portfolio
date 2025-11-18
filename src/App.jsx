import { useEffect, useState } from "react";
import Backgroud from "./compornent/_background/Background/Background";
import Home from "./compornent/_main/Home/Home";
import Works from "./compornent/_main/Works/Works";

export default function App() {
  const [isClickWork, setIsClickWork] = useState(false)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(isActive => !isActive);
  }, [isClickWork]);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isActive]);

  return (
    <>
      <Home isClickWork={isClickWork} setIsClickWork={setIsClickWork} />
      <Works isActive={isActive} />
      <Backgroud />
    </>
  );
}
