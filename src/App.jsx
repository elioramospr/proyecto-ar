import { Canvas } from '@react-three/fiber'
import { XR } from '@react-three/xr'

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
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
