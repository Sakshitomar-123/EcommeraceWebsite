// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #001B54 0%, #000C24 100%);
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 600px;
  position: relative;
  z-index: 2;
`;

const BackgroundEffect = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: url('/pattern.svg') no-repeat center right;
  opacity: 0.1;
`;

function Hero() {
  return (
    <HeroSection>
      <BackgroundEffect />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroContent>
            <h1 style={{ fontSize: '3.5rem', lineHeight: '1.2', marginBottom: '1.5rem' }}>
              Innovative Enterprise Software Development for the Next Generation
            </h1>
            <p style={{ fontSize: '1.25rem', opacity: '0.8', marginBottom: '2rem' }}>
              Imagining the Future Anew
            </p>
            <button className="button-primary">Let's Connect</button>
          </HeroContent>
        </motion.div>
      </div>
    </HeroSection>
  );
}

export default Hero;