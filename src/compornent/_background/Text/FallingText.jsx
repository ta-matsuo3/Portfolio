import React, { useRef } from "react";
import { useBox } from "@react-three/cannon";
import { Text3D } from "@react-three/drei";
import robotoFont from "../../../fonts/Roboto_Regular.json";

// ランダム方向に飛ばす関数
function randomImpulse() {
  const x = (Math.random() - 0.5) * 5;
  const y = Math.random() * 1 + 2;
  const z = (Math.random() - 0.5) * 5;
  return [x, y, z];
}

// 1文字ずつのコンポーネント
function FallingLetter({ letter, color, initialPosition, refList }) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: initialPosition,
    restitution: 0.5,
  }));

  // refを親に渡してまとめて操作できるようにする
  if (refList) refList.current.push(api);

  return (
    <Text3D
      ref={ref}
      font={robotoFont}
      size={0.8}
      height={0.2}
      bevelEnabled
      bevelSize={0.03}
      bevelThickness={0.03}
      castShadow
    >
      {letter}
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.3} />
    </Text3D>
  );
}

// 文字列全体のコンポーネント
export default function FallingText({ text, color, letterAPIs }) {

  return (
    <>
      {text.split("").map((char, i) => (
        <FallingLetter
          key={`${text}-${i}`}
          letter={char}
          color={color}
          initialPosition={[i - text.length / 2, 8, 0]}
          refList={letterAPIs}
        />
      ))}
    </>
  );
}