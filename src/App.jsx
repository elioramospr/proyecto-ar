import { Canvas } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'
import { useState } from 'react'

const store = createXRStore()

function isWebXRSupported() {
  return navigator.xr && navigator.xr.isSessionSupported
}

export function App() {
  const [red, setRed] = useState(false)
  const [xrSupported, setXrSupported] = useState(null)

  // Verifica soporte WebXR al montar
  React.useEffect(() => {
    if (isWebXRSupported()) {
      navigator.xr.isSessionSupported('immersive-ar').then(setXrSupported)
    } else {
      setXrSupported(false)
    }
  }, [])

  return (
    <>
      <button onClick={() => store.enterAR()} disabled={!xrSupported}>
        Enter AR
      </button>
      {!xrSupported && xrSupported !== null && (
        <p style={{ color: 'red' }}>
          Este dispositivo o navegador no soporta WebXR/AR.
        </p>
      )}
      <Canvas>
        <XR store={store}>
          <mesh pointerEventsType={{ deny: 'grab' }} onClick={() => setRed(!red)} position={[0, 1, -1]}>
            <boxGeometry />
            <meshBasicMaterial color={red ? 'red' : 'blue'} />
          </mesh>
        </XR>
      </Canvas>
    </>
  )
}

export default App
