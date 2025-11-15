import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

// ボックス(立方体)のコンポーネントを定義
function Box(props) {
  // メッシュへアクセスする
  const meshRef = useRef()

  // 状態の設定
  const [hovered, setHover] = useState(false) // マウスが被っているか否か
  const [active, setActive] = useState(false) // マウスクリックで変化

  // メッシュをフレームごとに回転させます
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))

  // コンポーネントを描画する
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

// アプリケーションのエントリーポイントとなるコンポーネントを定義
function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* Boxコンポーネントを配置 */}
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}

// Appコンポーネントを他のファイルで利用できるようにエクスポート
export default App;
