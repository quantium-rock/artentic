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
// import avatar from '../assets/3d/space_boi.glb'
import './About.css'
import backvid from '../assets/vids/universe2.mp4'
import HeroImg from '../assets/img/misc/women-with-vr.png'
// import * as THREE from 'three';

export const About = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = [
    'We develop 360º Web3 projects...',
    'We build dApps, DAOs, DeFi...',
    'We build NFT Marketplaces...',
    'We build Crypto Exchanges...',
    'We build great UI/UX for blockchain massive adoption.'
  ]
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

  return (
    <>
      {/* <ParticlesContainer className="particles" /> */}
      <section className="banner" id="about">
        <video autoPlay muted loop>
          <source src={backvid} type="video/mp4" />
        </video>
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                    <span className="tagline">Welcome to Artentic Labs</span>
                    <h1>
                      {/* {`Hi! 👋 Welcome, `} */}
                      <span className="txt-rotate" dataPeriod="1000">
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <br />
                    <p>🌏 We are an international team ready to make your ideas reality!</p>
                    <p>
                      ♟ A chess player, passionate about technology, machine learning, algorithmic trading, blockchain,
                      web3 and quantum computing.{' '}
                    </p>
                    <button onClick={() => console.log('connect')}>
                      Install Phantom to Connect with me
                      <ArrowRightCircle size={25} />
                    </button>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                    <img src={HeroImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
