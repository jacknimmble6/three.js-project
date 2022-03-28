import React, { useRef } from 'react'
import { Html, OrbitControls } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import mercury from '../textures/8k_mercury.jpg'
import { animated } from '@react-spring/three'

const Mercury = ({ mercuryShow }) => {
  const mercuryMap = useLoader(TextureLoader, mercury)
  const mercuryRef = useRef()
  const earth_year = 2 * Math.PI * (1/60) * (1/60) 

  useFrame(() => {
    mercuryRef.current.rotation.y += earth_year * 175.9  
  })

  return (
    <>
      <animated.mesh position={[5, 0, 5]} ref={mercuryRef}>
        <sphereGeometry args={[1, 10, 10]} />
        <meshStandardMaterial map={mercuryMap} />       
        <OrbitControls rotateSpeed={1} panSpeed={1} zoomSpeed={1} enablePan={true} 
        enableZoom={true} enableRotate={true} />
        <Html>
          {mercuryShow === true ? (
            <div className="bg-red-600 -mt-40 w-[400px] ml-64">
              <p className="text-center text-white text-lg">Facts About Mercury</p>
              <ul className="text-white">
                <li className=''>
                  Mercury is the closest planet to the Sun at a distance of 
                  57 million kilometers / 35 million miles.
                </li>
                <li> 
                  Despite being so small, Mercury is the second-densest planet in the Solar 
                  System after Earth. This means it is very compact.
                </li>
                <li>
                  Mercury has a radius of 2.439 km / 1.516 mi and a diameter of 4.879 km / 3.032 mi.
                </li>
                <li>  
                  During the day, Mercury’s average surface temperatures can reach up to 800 degrees 
                  Fahrenheit / 430 degrees Celsius. At night, Mercury’s surface temperatures can drop 
                  to as low as -290 degrees Fahrenheit / -180 degrees Celsius.
                </li>
              </ul>
            </div>
           ) : ''
          }
        </Html>
      </animated.mesh>
    </>
  )
}

export default Mercury