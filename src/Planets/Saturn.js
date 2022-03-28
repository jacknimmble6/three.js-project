import React, { useRef } from 'react'
import { OrbitControls, Html } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import saturn from '../textures/8k_saturn.jpg'

const Saturn = ({ saturnShow }) => {
  const saturnMap = useLoader(TextureLoader, saturn)
  const saturnRef = useRef()
  const earth_year = 2 * Math.PI * (1/60) * (1/60) 
  
  useFrame(() => {
    saturnRef.current.rotation.y += (earth_year * 0.444)
  })

  return (
    <>
      <mesh position={[ 40, 0, 40 ]} ref={saturnRef}>
        <sphereGeometry args={[3.5, 35, 35]} />
        <meshStandardMaterial map={saturnMap}   />       
        <OrbitControls rotateSpeed={1} panSpeed={1} zoomSpeed={1} enablePan={true} 
        enableZoom={true} enableRotate={true} />
        <Html>
          {saturnShow === true ? (
            <div className="bg-amber-400 -mt-40 w-[400px] ml-80">
              <p className="text-center text-white text-lg">Facts About Saturn</p>
              <ul className="text-white">
                <li className=''>
                  Saturn is the sixth planet from the Sun with the largest planetary rings 
                  in the Solar System.
                </li>
                <li>
                  It is the second-largest planet in the Solar System after Jupiter. Saturn has 
                  a radius of 58.232 kilometers / 36.183 miles and a diameter of 120.536 km / 74.897 mi.
                </li>
                <li>                
                  Saturn is the King of the Moons, having a total of 82 confirmed moons. 
                </li>
                <li>                
                  The temperature on Saturn’s upper atmosphere is on average at around -175 degrees Celsius / 
                  -285 degrees Fahrenheit. This is quite cold for a gas giant at least. However, below its 
                  clouds, it gets considerably hotter.
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

export default Saturn