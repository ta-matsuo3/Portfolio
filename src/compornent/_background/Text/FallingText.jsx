import { useBox } from "@react-three/cannon";
import { Text3D } from "@react-three/drei";
import robotoFont from "../../../fonts/Roboto_Regular.json";

function randomPosition() {
  const x = (Math.random() - 0.5) * 10;
  const z = (Math.random() - 0.5) * 6;
  return [x, 8, z];
}

export default function FallingText({ text, color }) {
  const [ref] = useBox(() => ({
    mass: 2,
    position: randomPosition(),
    restitution: 0.2,
  }));

  return (
    <Text3D
      ref={ref}
      font={robotoFont}
      size={1}
      height={0.3}
      bevelEnabled
      bevelSize={0.03}
      bevelThickness={0.03}
      castShadow
    >
      {text}
      <meshStandardMaterial color={color} metalness={0.2} roughness={0.4} />
    </Text3D>
  );
}