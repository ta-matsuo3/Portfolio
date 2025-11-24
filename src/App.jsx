import { useEffect, useState } from "react";
import Backgroud from "./compornent/_background/Background/Background";
import Home from "./compornent/_main/Home/Home";
import Works from "./compornent/_main/Works/Works";
import './App.css'
import WorkThumbnail from "./compornent/_main/WorkThumbnail/WorkThumbnail";
import AboutMe from "./compornent/_main/AboutMe/AboutMe";

export default function App() {
  const [isClickWork, setIsClickWork] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    setIsActive(isActive => !isActive);
    console.log(isActive);

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
      <div className="Wrap">
        <Home isClickWork={isClickWork} setIsClickWork={setIsClickWork} expanded={expanded} setExpanded={setExpanded} />
        <Works isActive={isActive} />
        <AboutMe isClickWork={isClickWork} expanded={expanded} setExpanded={setExpanded}>
          <WorkThumbnail isClickWork={isClickWork} expanded={expanded} />
        </AboutMe>
      </div>
      <Backgroud />
    </>
  );
}
