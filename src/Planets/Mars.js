import React, { useRef } from 'react'
import { OrbitControls, Html } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import mars from '../textures/8k_mars.jpg'

const Mars = ({ marsShow }) => {
  const marsMap = useLoader(TextureLoader, mars)
  const marsRef = useRef()
  const earth_year = 2 * Math.PI * (1/60) * (1/60) 
  
  useFrame(() => {
    marsRef.current.rotation.y += (earth_year * 1.03)
  })

  return (
    <>
      <mesh position={[ 20, 0, 20 ]} ref={marsRef}>
        <sphereGeometry args={[1.3, 13, 13]} />
        <meshStandardMaterial map={marsMap}   />       
        <OrbitControls rotateSpeed={1} panSpeed={1} zoomSpeed={1} enablePan={true} 
        enableZoom={true} enableRotate={true} />
        <Html>
          {marsShow === true ? (
            <div className="bg-orange-400 -mt-40 w-[400px] ml-80">
              <p className="text-center text-white text-lg">Facts About Mars</p>
              <ul className="text-white">
                <li className=''>
                  Mars is the fourth planet from the Sun and the second-smallest planet of the Solar System.
                </li>
                <li>                                 
                  The tallest volcano/mountain in the Solar System is located on Mars. It is named Olympus 
                  Mons and it seems to have a height of 21 km / 13 mi.
                </li>
                <li>                        
                  Mars also has the biggest canyon in the Solar System. It is named Valles Marines. 
                  It is 4.000 km / 2.500 mi long and reaches depths of 7 km / 4 mi deep. The Grand 
                  Canyon on Earth is only 446 km / 226 mi long, and only 1.6 km / 1 mi deep.
                </li>
                <li>
                  The average temperatures on Mars is -80 degrees Fahrenheit / -60 degrees Celsius.
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

export default Mars