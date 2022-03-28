import React, { useRef } from 'react'
import map from '../textures/8k_earth_daymap.jpg'
import { OrbitControls, Html } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Earth = ({ earthShow }) => {
  const earthMap = useLoader(TextureLoader, map)
  const earthRef = useRef()
  const earth_year = 2 * Math.PI * (1/60) * (1/60) 
  
  useFrame(() => {
    earthRef.current.rotation.y += earth_year
  })

  return (
    <>
      <mesh position={[ 15, 0, 15 ]} ref={earthRef}>
        <sphereGeometry args={[2, 20, 20]} />
        <meshStandardMaterial map={earthMap}   />       
        <OrbitControls rotateSpeed={1} panSpeed={1} zoomSpeed={1} enablePan={true} 
        enableZoom={true} enableRotate={true} />
        <Html>
          {earthShow === true ? (
            <div className="bg-blue-500 -mt-40 w-[400px] ml-80">
              <p className="text-center text-white text-lg">Facts About Earth</p>
              <ul className="text-white">
                <li className=''>
                  Earth is the third planet from the Sun and our home planet.
                </li>
                <li>                               
                  Earth is the fifth largest planet of the Solar System. It has a diameter of 
                  6.371 km / 3.958 mi. It is the largest terrestrial planet. The other 
                  terrestrial planets are Venus, Mars, and Mercury.
                </li>
                <li>             
                  Earth has the greatest density out of all the planets in our Solar System. 
                  This means it is very compact.
                </li>
                <li>
                  The atmosphere of Earth is divided into 6 layers – the troposphere, stratosphere, 
                  mesosphere, thermosphere, exosphere, and ionosphere.
                </li>
              </ul>
            </div>
           ) : ''
          }
        </Html>
      </mesh>
    </>
  )
}

export default Earth