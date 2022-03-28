import React from 'react'
import { Stars, FlyControls, Html } from '@react-three/drei'
import Sun from './Planets/Sun'

const SolarSystem = () => {

  return (
    <>
      <pointLight intensity={1} color='white' />
      <Stars radius={100} depth={60} count={20000} factor={7} saturation={0} fade />  
      <group>
        <Sun />       
        <FlyControls movementSpeed={50} lookSpeed={.1} rollSpeed={0.5} dragToLook={true} />
      </group>
      <Html>
        <p className="text-white font-semibold text-[40px] -ml-[750px] w-[500px] -mt-[340px]">
          Solar System Simulation
        </p>
        <p className="text-white w-[300px] -ml-[750px]">Built with React Three Fiber</p>
        <p className="text-white w-[300px] -ml-[750px]">Click on a planet to view facts about it.</p>
        <div className="text-white w-[400px] text-[20px] ml-[590px] mt-[350px]">
          <p className="font-semibold text-[35px]">Controls</p>
          <p>W - Move Foward</p>
          <p>S - Move Backward</p>
          <p>A - Move Left</p>
          <p>D - Move Right</p>
          <p>R - Move Up</p>
          <p>F - Move Down</p>
        </div>
      </Html>
    </>
  )
}

export default SolarSystem