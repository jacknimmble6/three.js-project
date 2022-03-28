import React, { useRef }from 'react'
import uranus from '../textures/2k_uranus.jpg'
import { OrbitControls, Html} from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Uranus = ({ uranusShow }) => {
  const uranusRef = useRef()
  const uranusMap = useLoader(TextureLoader, uranus)
  const earth_year = 2 * Math.PI * (1/60) * (1/60) 
  
  useFrame(() => {
    uranusRef.current.rotation.y += (earth_year * 0.718)
  })

  return (
    <>  
      <mesh position={[ 50, 0, 50 ]} ref={uranusRef}>
        <sphereGeometry args={[3, 30, 30]} />
        <meshStandardMaterial map={uranusMap}   />       
        <OrbitControls rotateSpeed={1} panSpeed={1} zoomSpeed={1} enablePan={true} 
        enableZoom={true} enableRotate={true} />
           <Html>
          {uranusShow === true ? (
            <div className="bg-blue-300 -mt-40 w-[400px] ml-80">
              <p className="text-center text-white text-lg">Facts About Uranus</p>
              <ul className="text-white">
                <li className=''>
                  Uranus is the seventh planet from the Sun, and the third-largest planet 
                  in the Solar System It is the biggest of the ice giants.
                </li>
                <li>              
                  Uranus has the coldest planetary atmosphere in the Solar System. Temperatures 
                  are on average at around -224 degrees Celsius / -371 degrees Fahrenheit.
                </li>
                <li>                            
                  The reason why Uranus is blue is due to the presence of methane.
                </li>
                <li>                                
                  Uranus has a similar atmosphere to Jupiter and Saturn in its primary composition 
                  of hydrogen and helium. However, it contains more “ices” such as water, ammonia, 
                  methane, and traces of other hydrocarbons.
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

export default Uranus