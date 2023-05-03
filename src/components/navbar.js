import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import ResumeLink from './ResumeLink';

export default function MyNavbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [navbarVariant, setNavbarVariant] = useState('light');

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos < currentScrollPos;
      setIsNavbarVisible(!isScrolledDown);
      setNavbarVariant(isScrolledDown ? 'dark' : 'light');
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarStyle = {
    backgroundColor: navbarVariant === 'light' ? 'white' : '#1a1a1a',
    transition: 'all 0.3s ease',
    transform: isNavbarVisible ? 'translateY(0)' : 'translateY(-100%)',
  };

  return (
    <Navbar expand="lg" variant={navbarVariant} style={navbarStyle}>
      <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <ResumeLink />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

