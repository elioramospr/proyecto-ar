import { Canvas } from '@react-three/fiber'
import { XR } from '@react-three/xr'

export default function App() {
  return (
    <div className="canvas-container">
      <Canvas>
        <XR>
          <mesh position={[0, 1, -1]}>
            <boxGeometry />
            <meshBasicMaterial color={'blue'} />
          </mesh>
        </XR>
      </Canvas>
    </div>
  )
}
