import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

import profileImage from '../images/img_20211219_135900_094_300x300.jpeg';

export default function Home() {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="home-container"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1581093580948-86c1f7310ec5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="home-left">
      <img src={profileImage} alt="Profile" className="home-image" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%', margin: '0 auto', display: 'block' }} />


        <div className="home-social">
          <a href="https://github.com/sanwalkhan" className="home-social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/feed/thissawal" className="home-social-link">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/maliksanwalawan" className="home-social-link">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/thissanwal" className="home-social-link">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/this___sanwal/" className="home-social-link">
            <FaInstagram />
          </a>
        </div>

        <div className="home-line"></div>
      </div>

      <div className="home-right">
        <h1 className="home-heading">Welcome to my portfolio!</h1>
        <p className="home-intro home-scroll">
  <span className="home-name">Sanwal Khan</span>, a <span className="home-profession">Web & Mobile App Developer</span>. <span className="home-line">I am passionate about creating beautiful, functional, and user-friendly digital experiences.</span>
</p>


       

        <div className="home-links">
          <a href="https://github.com/sanwalkhan"  className="home-link">
            <FaGithub className="home-icon" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/feed/thissawal" className="home-link">
            <FaLinkedin className="home-icon" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
