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
import './Services.css'
import HeroImg from '../assets/img/hero.png'
// import * as THREE from 'three';

export const Services = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = [
    'we build 360º Web3 projects...',
    'we build dApps, DAOs, DeFi...',
    'we build NFT Marketplaces...',
    'we build Crypto Exchanges...',
    'we build great UI/UX for blockchain massive adoption.'
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
      <section className="banner-services" id="services">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={14} md={9} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                    <img src={HeroImg} alt="NFT App" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={8} md={6} xl={4}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                    <h1>Our Services</h1>
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
          </Row>
        </Container>
      </section>
    </>
  )
}
