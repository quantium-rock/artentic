import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
// import logo from '../assets/img/logoNEGATIVO.png'
import navIcon1 from '../assets/img/linkedin.gif'
import navIcon2 from '../assets/img/twitter.gif'
import navIcon3 from '../assets/img/discord.gif'
import navIcon4 from '../assets/img/skype.gif'
import navIcon5 from '../assets/img/github.gif'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href="/">
            {/* <img src={logo} alt="Logo" className="logo" /> */}
            <div className="logo">Alex Colls</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}>
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}>
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}>
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
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
              <HashLink to="#connect">
                <button className="connect-button">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
