import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';

const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  background: url('path-to-hero-image.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  text-align: center;
  padding: 0 20px;
`;

const Text = styled.div`
  max-width: 600px;
  h1 {
    font-size: 3rem;
    font-family: 'Poppins', sans-serif;
  }
  .dynamic-text {
    font-weight: bold;
  }
  .btn {
    background-color: #F9ED32;
    color: #202020;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1.2rem;
    margin: 10px;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #FFF225;
    }
  }
`;

const HeroSection = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <HeroContainer>
      <animated.div style={props}>
        <Text>
          <h1>Let's Elevate Your Ride Experience With Rhyno– Where Superiority Meets <span className="dynamic-text">Style</span></h1>
          <a href="/products" className="btn">Explore Products</a>
          <a href="/pre-book" className="btn">Pre-book Now</a>
        </Text>
      </animated.div>
    </HeroContainer>
  );
};

export default HeroSection;
