import { useEffect, useState } from "react";
import Backgroud from "@/compornent/_background/Background/Background";
import Home from "@/compornent/_main/Home/Home";
import Works from "@/compornent/_main/Works/Works";
import './App.css'
import WorkThumbnail from "@/compornent/_main/WorkThumbnail/WorkThumbnail";
import AboutMe from "@/compornent/_main/AboutMe/AboutMe";
import Modal from "@/compornent/_main/Works/WorksList/Modal/Modal";

export default function App() {
  const [isClickWork, setIsClickWork] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const [selectedWork, setSelectedWork] = useState(null);


  useEffect(() => {
    setIsActive(isClickWork);
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
        <Works isActive={isActive} isModal={isModal} setIsModal={setIsModal} setSelectedWork={setSelectedWork} />
        <AboutMe isClickWork={isClickWork} expanded={expanded} setExpanded={setExpanded}>
          <WorkThumbnail isClickWork={isClickWork} expanded={expanded} isModal={isModal} setIsModal={setIsModal} setSelectedWork={setSelectedWork} />
        </AboutMe>
        <Modal work={selectedWork} setIsModal={setIsModal} isModal={isModal} />
      </div>
      <Backgroud />
    </>
  );
}
