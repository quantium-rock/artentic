import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import avatar from './alex.glb';
import './Hero.css';
import backvid from '../assets/vids/universe2.mp4';

export const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "a Web3 Builder...", "a Software Engineer...", "a Data Scientist..." ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const gltf = useLoader(GLTFLoader, avatar)

  return (
    <>
      {/* <ParticlesContainer className="particles" /> */}
      <section className="banner" id="home">
      <video autoPlay muted loop >
        <source src={backvid} type="video/mp4" />
      </video>
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`👋 Hi! I'm Alex, `} 
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web3 Builder...", "Software Engineer...", "Data Scientist." ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                    <p>🌏 I’m a quantitative trader, an entrepreneur, and a workaholic with an open mind education.</p>
                    <p>♟ A chess player, passionate about technology, machine learning, algorithmic trading, blockchain, web3 and quantum computing. With 10 years of professional experience trading global financial markets and more than 7 years in data science. </p>
                    <button onClick={() => console.log('connect')}>Install Phantom to Connect with me<ArrowRightCircle size={25} /></button>
                </div>}
              </TrackVisibility>
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
