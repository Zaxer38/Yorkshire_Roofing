import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { colors } from '../../theme/colors';

const TopContactBar = styled.div`
  background-color: ${colors.primary};
  padding: 0.5rem 0;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0.35rem 0;
  }
`;

const ContactInfo = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  font-size: 0.9rem;
  color: #2c3e50;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
    padding: 0 1rem;
    font-size: 0.8rem;
  }

  a {
    color: #ffffff; /* Pure white text */
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: opacity 0.2s ease;
    font-weight: 500;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const HeaderContainer = styled.header`
  background-color: #2c3e50; /* Dark gray background */
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const MainHeader = styled.div`
  height: 80px; /* allows room for logo and nav */

  @media (max-width: 768px) {
    height: 72px;
  }

  @media (max-width: 480px) {
    height: auto; /* let content define height on very small screens */
  }
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    /* keep row layout to avoid tall header */
    padding: 0 0.75rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0; /* no gap since we're only showing the image */
  text-decoration: none;
  color: ${colors.primary};
  transition: color 0.3s ease;

  img {
    height: 100px;
    width: auto;
    display: block;
  }

  @media (max-width: 768px) {
    img {
      height: 80px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 56px;
    }
  }

  &:hover {
    color: #fff; /* White on hover */
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.6rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Nav = styled.nav<{ $open: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1.25rem;
  }

  @media (max-width: 768px) {
    display: ${props => (props.$open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #2c3e50;
    padding: 0.75rem 0 1rem;
    gap: 0.75rem;
    z-index: 999;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 0.5rem;
  }
`;

const NavLink = styled(Link)`
  color: #fff; /* White text */
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background-color: ${colors.primary};
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: ${colors.primary};
    font-weight: 600;
  }
  
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.35rem 0;
  }

  @media (max-width: 480px) {
    font-size: 0.78rem;
  }
`;

const ContactButton = styled(Link)`
  background-color: ${colors.primary};
  color: #ffffff; /* White text */
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border: 2px solid ${colors.primary};
  
  &:hover {
    background-color: #33c4ff;
    border-color: #33c4ff;
    color: #f5f5f5; /* Slightly lighter white on hover */
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(1, 171, 245, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.25rem;
    font-size: 0.78rem;
  }

  @media (max-width: 480px) {
    padding: 0.55rem 1.1rem;
    font-size: 0.75rem;
  }
`;

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  return (
    <HeaderContainer>
      <TopContactBar>
        <ContactInfo>
          <a href="tel:01138055834">
            <span>📞</span> 0113 805 5834
          </a>
          <a href="mailto:info@yorkshireroofing.co.uk">
            <span>✉️</span> info@yorkshireroofing.co.uk
          </a>
        </ContactInfo>
      </TopContactBar>
      <MainHeader>
        <HeaderContent>
          <Logo to="/">
            <img src="/header-logo.png" alt="Yorkshire Roofing logo" />
          </Logo>
          <MobileToggle onClick={toggleMobileMenu} aria-label="Toggle navigation">
            <FaBars />
          </MobileToggle>
          <Nav $open={mobileOpen}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/residential">Residential</NavLink>
            <NavLink to="/commercial">Commercial</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <ContactButton to="/get-a-quote">Get a Quote</ContactButton>
          </Nav>
        </HeaderContent>
      </MainHeader>
    </HeaderContainer>
  );
};

export default Header;
