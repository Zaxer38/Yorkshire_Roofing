import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../theme/colors';

const heroImages = ['/roofing-hero.jpg', '/roofing-hero-2.jpg', '/roofing-hero-3.jpg'];

const HeroSection = styled.section<{ backgroundUrl: string }>`
  background-image: url(${props => props.backgroundUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  padding: 12rem 2rem 8rem;
  margin-top: 80px;

  @media (max-width: 1024px) {
    padding: 10rem 1.5rem 6rem;
  }

  @media (max-width: 768px) {
    padding: 8rem 1.5rem 5rem;
    margin-top: 72px;
  }

  @media (max-width: 480px) {
    padding: 7rem 1.25rem 4rem;
    margin-top: 68px;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  max-width: 800px;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.4rem;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    max-width: 100%;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
  line-height: 1.6;
  font-weight: 400;
  opacity: 0.9;

  @media (max-width: 1024px) {
    font-size: 1.15rem;
  }

  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

const CtaButton = styled(Link)`
  display: inline-block;
  background-color: ${colors.primary};
  color: #ffffff;
  padding: 1rem 2.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background-color: #33c4ff;
    color: #f5f5f5;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // cycle through the three local hero images with a simple, no-animation switch
  useEffect(() => {
    // preload images once
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000); // 7 seconds per image

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <HeroSection backgroundUrl={heroImages[currentIndex]}>
      <HeroContent>
        <HeroTitle>Trusted Leeds Roofers for Homes & Businesses</HeroTitle>
        <HeroSubtitle>
          Professional roofing services with combined 60 years of experience in Leeds and surrounding areas     
          <br />
          Emergency Roofing Services Available
        </HeroSubtitle>
        
        <CtaButton to="/get-a-quote">Get a Free Quote</CtaButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
