import { useEffect, useRef } from 'react';
import GLOBE from 'vanta/dist/vanta.globe.min'; // ✅ Correct import
import * as THREE from 'three'; // ✅ Required for Vanta to work
import './App.css';

function App() {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (!effectRef.current) {
      effectRef.current = GLOBE({
        el: vantaRef.current,
        THREE, // ✅ Required
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x23153c,
        color:0xff3f81,
        color2:0xffffff, // optional: globe color
      });
    }

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <div
        ref={vantaRef}
        style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
      ></div>
      <h1
        style={{
          color: 'white',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          paddingTop: '40vh',
        }}
      >
        Hello World!
      </h1>
    </div>
  );
}

export default App;
