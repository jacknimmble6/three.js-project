import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import SolarSystem from './SolarSystem'
import './index.css'
import './App.css';
import { Html } from '@react-three/drei';

const App = () => {

  return (
    <div className="App">
      <Canvas camera={{ fov: 25, position: [350, 100, 60] }}>
        <Suspense fallback={
          <Html>
            <p className="text-white -mt-[50px] ml-[-150px] text-[60px]">
              Loading....
            </p>
          </Html>
        }>
          <SolarSystem />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
