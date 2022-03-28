import React, { useRef } from 'react'
import jupiter from '../textures/8k_jupiter.jpg'
import { OrbitControls, Html } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Jupiter = ({ jupiterShow }) => {
  const jupiterMap = useLoader(TextureLoader, jupiter)
  const jupiterRef = useRef()
  const earth_year = 2 * Math.PI * (1/60) * (1/60) 
  
  useFrame(() => {
    jupiterRef.current.rotation.y += (earth_year * 0.414)
  })

  return (
    <>
      <mesh position={[ 30, 0, 30 ]} ref={jupiterRef}>
        <sphereGeometry args={[4, 40, 40]} />
        <meshStandardMaterial map={jupiterMap}   />       
        <OrbitControls rotateSpeed={1} panSpeed={1} zoomSpeed={1} enablePan={true} 
        enableZoom={true} enableRotate={true} />
        <Html>
          {jupiterShow === true ? (
            <div className="bg-stone-400 -mt-40 w-[400px] ml-80">
              <p className="text-center text-white text-lg">Facts About Jupiter</p>
              <ul className="text-white">
                <li className=''>
                  Jupiter is the fifth planet from the Sun and the biggest 
                  planet of our Solar System. Some consider it a failed star 
                  since it is made out of swirling gases and liquid
                </li>
                <li>   
                  Jupiter has a total of 79 confirmed moons. It is second only 
                  to Saturn when it comes to the total amount of satellites.
                </li>
                <li>  
                  Jupiter’s mass is almost twice of all the Solar System’s planets 
                  combined. It is 318 times more massive than Earth.
                </li>
                <li>
                  The envelope of gases – atmosphere – surrounding Jupiter is the largest planetary 
                  atmosphere in the Solar System. It makes up almost the entire planet. Basically, 
                  it doesn’t have a true surface with its atmosphere reaching altitudes of 
                  5.000 km / 1.864 mi.
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

export default Jupiter