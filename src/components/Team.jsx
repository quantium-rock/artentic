import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../assets/img/header-img.svg'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import avatar from '../assets/3d/alex.glb'
import './Team.css'
import { Skills } from './Skills'
import backvid from '../assets/vids/universe2.mp4'
import navIcon1 from '../assets/img/linkedin.gif'
import navIcon2 from '../assets/img/twitter.gif'
import navIcon3 from '../assets/img/discord.gif'
import navIcon4 from '../assets/img/skype.gif'
import navIcon5 from '../assets/img/github.gif'
// import * as THREE from 'three';

export const Team = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = ['a Web3 Builder...', 'a Software Engineer...', 'a Data Scientist...']
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex((prevIndex) => prevIndex - 1)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(200)
    } else {
      setIndex((prevIndex) => prevIndex + 1)
    }
  }

  const gltf = useLoader(GLTFLoader, avatar)

  return (
    <>
      {/* <ParticlesContainer className="particles" /> */}
      <section className="banner-team" id="team">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                    <span className="tagline">Meet Alex, our CTO & founder</span>
                    <h1>
                      {`👋 Hi! I'm Alex, `}
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "Web3 Builder...", "Software Engineer...", "Data Scientist." ]'>
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>

                    <span className="navbar-text align-items-center">
                      <div className="social-icon">
                        <a href="https://www.linkedin.com/in/alex-colls-outumuro/" target="_blank" rel="noreferrer">
                          <img src={navIcon1} alt="Linkedin" />
                        </a>
                        <a href="https://twitter.com/fxmozart_sol" target="_blank" rel="noreferrer">
                          <img src={navIcon2} alt="Twitter" />
                        </a>
                        <a href="https://join.skype.com/invite/bHtUOBtUqKmX" target="_blank" rel="noreferrer">
                          <img src={navIcon4} alt="Skype" />
                        </a>
                        <a href="https://discord.gg/uWU6kee5" target="_blank" rel="noreferrer">
                          <img src={navIcon3} alt="Discord" />
                        </a>
                        <a href="https://github.com/quantium-rock" target="_blank" rel="noreferrer">
                          <img src={navIcon5} alt="GitHub" />
                        </a>
                      </div>
                    </span>
                  </div>
                )}
              </TrackVisibility>
              <Row className="aligh-items-center">
                <Skills />
              </Row>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {/* {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>} */}

                <Canvas className="canvas" camera={{ position: [0.05, 0.5, 1.2] }} shadows>
                  <directionalLight position={[3.3, 1.0, 4.4]} castShadow={true} />
                  <primitive object={gltf.scene} position={[0, -1.1, 0]} children-0-castShadow={true} />
                  {/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow={true}>
                        <meshStandardMaterial transparent={true} />
                      </Circle> */}
                  <OrbitControls target={[0, 0, 0]} />
                </Canvas>
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
