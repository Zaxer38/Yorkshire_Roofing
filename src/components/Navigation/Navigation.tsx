import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #2c3e50;
  padding: 1rem 0;
  position: sticky;
  top: 80px;
  z-index: 999;
`;

const NavList = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  gap: 2rem;
  list-style: none;
`;

const NavItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3498db;
  }
  
  &.active {
    color: #3498db;
    border-bottom: 2px solid #3498db;
    padding-bottom: 0.5rem;
  }
`;

const Navigation: React.FC = () => {
  return (
    <Nav>
      <NavList>
        <NavItem><StyledNavLink to="/">Home</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/residential">Residential Roofing</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/commercial">Commercial Roofing</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/about">About Us</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/contact">Contact</StyledNavLink></NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
