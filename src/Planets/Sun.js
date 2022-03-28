import React, { useRef, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import sun from '../textures/8k_sun.jpg'
import Mercury from './Mercury'
import Venus from './Venus'
import Earth from './Earth'
import Mars from './Mars'
import Jupiter from './Jupiter'
import Saturn from './Saturn'
import Uranus from './Uranus'
import Neptune from './Neptune'

const Sun = () => {
  const [mercuryShow, setMercuryShow] = useState(false)
  const [venusShow, setVenusShow] = useState(false)
  const [earthShow, setEarthShow] = useState(false)
  const [marsShow, setMarsShow] = useState(false)
  const [jupiterShow, setJupiterShow] = useState(false)
  const [saturnShow, setSaturnShow] = useState(false)
  const [uranusShow, setUranusShow] = useState(false)
  const [neptuneShow, setNeptuneShow] = useState(false)
  const sunMap = useLoader(TextureLoader, sun)
  const sunRef = useRef()
  const mercuryRef = useRef()
  const venusRef = useRef()
  const earthRef = useRef()
  const marsRef = useRef()
  const jupiterRef = useRef()
  const saturnRef = useRef()
  const uranusRef = useRef()
  const neptuneRef = useRef()
  const earth_year = 2 * Math.PI * (1/60) * (1/60) 
  
  useFrame(() => {
    sunRef.current.rotation.y += 0.0001
    mercuryRef.current.rotation.y += earth_year * 4.14772727273
    venusRef.current.rotation.y += earth_year * 1.62438807299
    earthRef.current.rotation.y += earth_year
    marsRef.current.rotation.y += earth_year * 0.53134962805
    jupiterRef.current.rotation.y += earth_year * 0.08428393294
    saturnRef.current.rotation.y += earth_year * 0.03393549466
    uranusRef.current.rotation.y += earth_year * 0.01189428748
    neptuneRef.current.rotation.y += earth_year * 0.00606060606
  })

  const mercuryOnClickShow = () => {
    setMercuryShow(!mercuryShow)
  }

  const venusOnClickShow = () => {
    setVenusShow(!venusShow)
  }

  const earthOnClickShow = () => {
    setEarthShow(!earthShow)
  }

  const marsOnClickShow = () => {
    setMarsShow(!marsShow)
  }

  const jupiterOnClickShow = () => {
    setJupiterShow(!jupiterShow)
  }

  const saturnOnClickShow = () => {
    setSaturnShow(!saturnShow)
  }

  const uranusOnClickShow = () => {
    setUranusShow(!uranusShow)
  }

  const neptuneOnClickShow = () => {
    setNeptuneShow(!neptuneShow)
  }

  return (
    <>
      <ambientLight intensity={0.9} color='white' />
      <mesh ref={sunRef} position={[-5, 0, -5]}>
        <sphereGeometry args={[8, 80, 80]} />
        <meshStandardMaterial map={sunMap} />

        <object3D ref={mercuryRef} onClick={mercuryOnClickShow}>
          <mesh position={[5, 0, 5]}>
            <Mercury mercuryShow={mercuryShow} />
          </mesh>
        </object3D>

        <object3D ref={venusRef} onClick={venusOnClickShow}>
          <mesh position={[10, 0, 10]}>
            <Venus venusShow={venusShow} />
          </mesh>
        </object3D>

        <object3D ref={earthRef} onClick={earthOnClickShow}>
          <mesh position={[15, 0, 15]}>
            <Earth earthShow={earthShow} />
          </mesh>
        </object3D>

        <object3D ref={marsRef} onClick={marsOnClickShow}>
          <mesh position={[20, 0, 20]}>
            <Mars marsShow={marsShow} />
          </mesh>
        </object3D>

        <object3D ref={jupiterRef} onClick={jupiterOnClickShow}>
          <mesh position={[30, 0, 30]}>
            <Jupiter jupiterShow={jupiterShow} />
          </mesh>
        </object3D>

        <object3D ref={saturnRef} onClick={saturnOnClickShow}>
          <mesh position={[40, 0, 40]}>
            <Saturn saturnShow={saturnShow} />
          </mesh>
        </object3D>

        <object3D ref={uranusRef} onClick={uranusOnClickShow}>
          <mesh position={[50, 0, 50]}>
            <Uranus uranusShow={uranusShow} />
          </mesh>
        </object3D>

        <object3D ref={neptuneRef} onClick={neptuneOnClickShow}>
          <mesh position={[60, 0, 60]}>
            <Neptune neptuneShow={neptuneShow} />
          </mesh>
        </object3D>

        <OrbitControls rotateSpeed={1} panSpeed={1} zoomSpeed={1} enablePan={true} 
        enableZoom={true} enableRotate={true} />
        
      </mesh>
     
    </>
  )
}

export default Sun