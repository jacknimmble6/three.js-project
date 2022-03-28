import React, { useRef }from 'react'
import neptune from '../textures/2k_neptune.jpg'
import { OrbitControls, Html } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Neptune = ({ neptuneShow }) => {
  const neptuneMap = useLoader(TextureLoader, neptune)
  const neptuneRef = useRef()
  const earth_year = 2 * Math.PI * (1/60) * (1/60) 
  
  useFrame(() => {
    neptuneRef.current.rotation.y += (earth_year *  0.671)
  })

  return (
    <>
      <mesh position={[ 60, 0, 60 ]} ref={neptuneRef}>
        <sphereGeometry args={[2.5, 25, 25]} />
        <meshStandardMaterial map={neptuneMap} />       
        <OrbitControls rotateSpeed={1} panSpeed={1} zoomSpeed={1} enablePan={true} 
        enableZoom={true} enableRotate={true} />
        <Html>
          {neptuneShow === true ? (
            <div className="bg-blue-600 -mt-40 w-[400px] ml-80">
              <p className="text-center text-white text-lg">Facts About Neptune</p>
              <ul className="text-white">
                <li className=''>
                  Neptune is the farthest planet from the Sun at an average distance of 
                  4.5 billion kilometers / 2.8 billion miles.
                </li>
                <li>                                
                  Wind speeds on Neptune are among the fastest recorded in the Solar System. 
                  Some may reach up to 2.160 km / 1.324 mi per hour. They are five times 
                  stronger than the strongest winds on Earth.
                </li>
                <li>                        
                  Neptune’s average surface temperatures are around -214 degrees Celsius 
                  / -353 degrees Fahrenheit.
                </li>
                <li>
                  Neptune has a powerful magnetic field. It is 27 times stronger than Earth’s.
                  Neptune formed around 4.5 billion years ago however, many believe that it was 
                  closer to the Sun then than now, but the planet started to drift away.
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

export default Neptune