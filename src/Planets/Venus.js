import React, { useRef } from 'react'
import { OrbitControls, Html } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import venusatmosphere from '../textures/4k_venus_atmosphere.jpg'

const Venus = ({ venusShow }) => {
  const venusAtmosphereMap = useLoader(TextureLoader, venusatmosphere)
  const venusRef = useRef()
  const earth_year = 2 * Math.PI * (1/60) * (1/60) 

  useFrame(() => {
    venusRef.current.rotation.y += (earth_year * 116.8) 
  })

  return (
    <>
      <mesh position={[ 10, 0, 10 ]} ref={venusRef}>
        <sphereGeometry args={[1.5, 15, 15]} />
        <meshStandardMaterial map={venusAtmosphereMap}/>       
        <OrbitControls rotateSpeed={1} panSpeed={1} zoomSpeed={1} enablePan={true} 
        enableZoom={true} enableRotate={true} />
        <Html>
          {venusShow === true ? (
            <div className="bg-amber-400 -mt-40 w-[400px] ml-80">
              <p className="text-center text-white text-lg">Facts About Venus</p>
              <ul className="text-white">
                <li className=''>
                  Venus is the second planet from the Sun, and the sixth-largest planet 
                  in the Solar System.
                </li>
                <li>                  
                  Venus and Mercury are the only planets in the Solar System that do not have a moon.
                </li>
                <li>             
                  One day on Venus lasts for about 243 Earth days. This is the slowest rotation of any 
                  planet making it the most spherical object in the Solar System, after the Sun.
                </li>
                <li>
                  Venus has a radius of 6.051 kilometers / 3.760 miles, and a diameter of 
                  12.104 km / 7.521 mi. It is only slightly smaller than Earth. Venus is at a distance of 
                  108 million km / 68 million mi away from the Sun.
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

export default Venus