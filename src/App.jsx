import { Canvas } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ARBox() {
  const [red, setRed] = useState(false)
  return (
    <XR>
      <mesh pointerEventsType={{ deny: 'grab' }} onClick={() => setRed(!red)} position={[0, 1, -1]}>
        <boxGeometry />
        <meshBasicMaterial color={red ? 'red' : 'blue'} />
      </mesh>
    </XR>
  )
}

export function App() {
  const store = createXRStore()
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={() => store.enterAR()}>Entra a AR</button>
      <div className="canvas-container">
        <Canvas>
          <ARBox />
        </Canvas>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
