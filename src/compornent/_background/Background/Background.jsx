// Backgroud.js
import React, { useState, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Floor from "../Floor/Floor";
import FallingText from "../Text/FallingText";

export default function Backgroud({ letterAPIs, isDoubleClick }) {
    const [homeText, setHomeText] = useState("Physics");
    const [worksText, setWorksText] = useState("Engine");
    const [aboutText, setAboutText] = useState("Test");

    const [showHome, setShowHome] = useState(false);
    const [showWorks, setShowWorks] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowHome(true), 0);
        setTimeout(() => setShowWorks(true), 1000);
        setTimeout(() => setShowAbout(true), 2000);
    }, []);

    useEffect(() => {
        setHomeText("");
        setWorksText("");
        setAboutText("");

        // 少し待って再度文字をセット（再レンダリングで落下）
        setTimeout(() => {
            setHomeText("Physics");
            setWorksText("Physics");
            setAboutText("Physics");
            // 文字が復活したらAPI配列もクリア
            letterAPIs.current = [];
        }, 300);
    }, [isDoubleClick])



    return (
        <div
            style={{ width: "100vw", height: "100vh" }}
        >
            <Canvas
                style={{ background: "black", width: "100vw", height: "100vh", position: "fixed" }}
                camera={{ position: [0, 3, 10], fov: 40 }}
                fog={{ color: "#000000", near: 5, far: 20 }}
            >
                <ambientLight intensity={1.0} />
                <directionalLight position={[5, 10, 5]} intensity={2.5} castShadow />
                <pointLight position={[-5, 5, -5]} intensity={1.5} />
                <spotLight position={[-5, 10, -5]} angle={0.3} intensity={1} castShadow />
                <Physics gravity={[0, -9.8, 0]}>
                    <Floor />
                    {showHome && <FallingText text={homeText} color="#3fa9f5" letterAPIs={letterAPIs} />}
                    {showWorks && <FallingText text={worksText} color="#a33ff5" letterAPIs={letterAPIs} />}
                    {showAbout && <FallingText text={aboutText} color="#f5a63f" letterAPIs={letterAPIs} />}
                </Physics>
            </Canvas>
        </div>
    );
}
