/* eslint-disable jsx-a11y/alt-text */
import imgPOL from "../assets/img/Polygon.png";
import imgEOS from "../assets/img/EOSio.png";
import img0 from "../assets/img/Ethereum.png";
import img1 from "../assets/img/Typescript.png";
import img2 from "../assets/img/Javascript.png";
import img3 from "../assets/img/Python.png";
import img4 from "../assets/img/Julia.png";
import img5 from "../assets/img/Rust.png";
import img6 from "../assets/img/C.png";
import img7 from "../assets/img/C++.png";
import img8 from "../assets/img/Solana.png";
import img9 from "../assets/img/Tensorflow.png";
import img10 from "../assets/img/Pytorch.png";
import img11 from "../assets/img/Keras.png";
import img12 from "../assets/img/Postgre.png";
import img13 from "../assets/img/MongoDB.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

import astro from "../assets/img/header-img.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import { ParticlesContainer } from "./Particles";
// import TrackVisibility from "react-on-screen";

import "./Skills.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="skill" id="skills">

      {/* <ParticlesContainer className="particles" /> */}


        <Container>
          <Row>
            <Col size={12}>
              <h2>My Tech Stack</h2>
              <p>Lorem book.</p>
              <Tab.Container id="skills-tabs" defaultActiveKey="languages">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="blockchain">Blockchain</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="languages"> Programming Languages</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="data">Data Science</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="backend">Backend</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="databases">Databases</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="frontend">Frontend</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Pane className="blockchain-panel" eventKey="blockchain">
                  <Row>
                    {
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <div className="skill-bx wow zoomIn">
                              <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skill-slider carousel"
                              >
                                <div className="item">
                                  <img src={img8} alt="Solana" className="solana" />
                                  <h5>Solana</h5>
                                </div>
                                <div className="item">
                                  <img src={imgEOS} alt="EOSio" className="eos" />
                                  <h5>EOSio</h5>
                                </div>
                                <div className="item">
                                  <img src={imgPOL} alt="Polygon" className="polygon" />
                                  <h5>Polygon</h5>
                                </div>
                                <div className="item">
                                  <img src={img0} alt="Ethereum" className="ethereum" />
                                  <h5>Ethereum</h5>
                                </div>
                              </Carousel>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane className="languages-panel" eventKey="languages">
                  <Row>
                    {
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <div className="skill-bx wow zoomIn">
                              <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skill-slider"
                              >
                                <div className="item">
                                  <img src={img1} alt="Typescript" className="typescript" />
                                  <h5>Typescript</h5>
                                </div>
                                <div className="item">
                                  <img src={img2} alt="Javascript" className="javascript" />
                                  <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                  <img src={img3} alt="Python" className="python" />
                                  <h5>Pyhton</h5>
                                </div>
                                <div className="item">
                                  <img src={img4} alt="Julia" className="julia" />
                                  <h5>Julia</h5>
                                </div>
                                <div className="item">
                                  <img src={img5} alt="Rust" className="rust" />
                                  <h5>Rust</h5>
                                </div>
                                <div className="item">
                                  <img src={img6} alt="C" className="c" />
                                  <h5>C</h5>
                                </div>
                                <div className="item">
                                  <img src={img7} alt="C++" className="cpp" />
                                  <h5>C++</h5>
                                </div>
                              </Carousel>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane className="data-panel" eventKey="data">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                          <Carousel
                            responsive={responsive}
                            infinite={true}
                            className="owl-carousel owl-theme skill-slider"
                          >
                            <div className="item">
                              <img src={img9} alt="Tensorflow" />
                              <h5>Tensorflow</h5>
                            </div>
                            <div className="item">
                              <img src={img10} alt="Pytorch" />
                              <h5>Pytorch</h5>
                            </div>
                            <div className="item">
                              <img src={img11} alt="Keras" />
                              <h5>Keras</h5>
                            </div>
                            <div className="item">
                              <img src={img12} alt="PostgreSQL" />
                              <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                              <img src={img13} alt="MongoDB" />
                              <h5>MongoDB</h5>
                            </div>
                          </Carousel>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="backend-panel" eventKey="backend">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                          <Carousel
                            responsive={responsive}
                            infinite={true}
                            className="owl-carousel owl-theme skill-slider"
                          >
                            <div className="item">
                              <img src={img9} alt="Tensorflow" />
                              <h5>Tensorflow</h5>
                            </div>
                            <div className="item">
                              <img src={img10} alt="Pytorch" />
                              <h5>Pytorch</h5>
                            </div>
                            <div className="item">
                              <img src={img11} alt="Keras" />
                              <h5>Keras</h5>
                            </div>
                            <div className="item">
                              <img src={img12} alt="PostgreSQL" />
                              <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                              <img src={img13} alt="MongoDB" />
                              <h5>MongoDB</h5>
                            </div>
                          </Carousel>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="databases-panel" eventKey="databases">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                          <Carousel
                            responsive={responsive}
                            infinite={true}
                            className="owl-carousel owl-theme skill-slider"
                          >
                            <div className="item">
                              <img src={img9} alt="Tensorflow" />
                              <h5>Tensorflow</h5>
                            </div>
                            <div className="item">
                              <img src={img10} alt="Pytorch" />
                              <h5>Pytorch</h5>
                            </div>
                            <div className="item">
                              <img src={img11} alt="Keras" />
                              <h5>Keras</h5>
                            </div>
                            <div className="item">
                              <img src={img12} alt="PostgreSQL" />
                              <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                              <img src={img13} alt="MongoDB" />
                              <h5>MongoDB</h5>
                            </div>
                          </Carousel>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="frontend-panel" eventKey="frontend">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                          <Carousel
                            responsive={responsive}
                            infinite={true}
                            className="owl-carousel owl-theme skill-slider"
                          >
                            <div className="item">
                              <img src={img9} alt="Tensorflow" />
                              <h5>Tensorflow</h5>
                            </div>
                            <div className="item">
                              <img src={img10} alt="Pytorch" />
                              <h5>Pytorch</h5>
                            </div>
                            <div className="item">
                              <img src={img11} alt="Keras" />
                              <h5>Keras</h5>
                            </div>
                            <div className="item">
                              <img src={img12} alt="PostgreSQL" />
                              <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                              <img src={img13} alt="MongoDB" />
                              <h5>MongoDB</h5>
                            </div>
                          </Carousel>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                {/* </Tab.Content> */}
              </Tab.Container>
              {/* </div>
                )}
              </TrackVisibility> */}
            </Col>
            <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={astro} alt="Astronaut"/>
                </div>}
            </TrackVisibility>
          </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    </>
  );
};
