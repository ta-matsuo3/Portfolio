import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, useBox, usePlane } from "@react-three/cannon";

import Floor from "./compornent/_background/Floor/Floor";
import FallingText from "./compornent/_background/Text/FallingText";


// ===== メインシーン =====
export default function App() {
  // ---------- 表示タイミング管理 ----------
  const [showHome, setShowHome] = useState(false);
  const [showWorks, setShowWorks] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    // レンダー直後
    setTimeout(() => setShowHome(true), 0);

    // 1秒後
    setTimeout(() => setShowWorks(true), 1000);

    // 2秒後
    setTimeout(() => setShowAbout(true), 2000);
  }, []);

  return (
    <Canvas
      // shadows
      style={{ background: "black", width: "100vw", height: "100vh" }}
      camera={{ position: [0, 3, 10], fov: 40 }}
    >
      {/* 光源 */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 10, 5]} intensity={3} castShadow />
      <pointLight position={[0, 6, 5]} intensity={5} />

      <Physics gravity={[0, -9.8, 0]}>
        <Floor />

        {/* 順番に落下 */}
        {showHome && <FallingText text="HOME" color="#3fa9f5" />}
        {showWorks && <FallingText text="WORKS" color="#a33ff5" />}
        {showAbout && <FallingText text="ABOUT ME" color="#f5a63f" />}
      </Physics>
    </Canvas>
  );
}
