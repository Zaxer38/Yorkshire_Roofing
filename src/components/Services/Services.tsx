import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../theme/colors';
import { FaHome, FaBuilding, FaTools, FaShieldAlt, FaClock, FaPoundSign } from 'react-icons/fa';

interface ServiceItem {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
}

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #000000;
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3.5rem 1.25rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #ffffff;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ServiceCard = styled.div`
  background: #1f2933;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: ${colors.primary};
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${colors.lightText};
`;

const ServiceDescription = styled.p`
  color: ${colors.darkGray};
  margin-bottom: 1.5rem;
`;

const ServiceLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    color: ${colors.secondary};
    text-decoration: underline;
  }
`;

const services: ServiceItem[] = [
  {
    icon: <FaHome size={24} />,
    title: 'Residential Roofing',
    description: 'Expert roofing solutions for your home, from repairs to complete replacements.',
    link: '/residential'
  },
  {
    icon: <FaBuilding size={24} />,
    title: 'Commercial Roofing',
    description: 'Professional roofing services for businesses of all sizes.',
    link: '/commercial'
  },
  {
    icon: <FaTools size={24} />,
    title: 'Roof Repairs',
    description: 'Fast and reliable repair services for all types of roofing issues.',
    link: '/roof-repairs'
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: 'Roof Maintenance',
    description: 'Regular maintenance to extend the life of your roof.',
    link: '/services/maintenance'
  },
  {
    icon: <FaClock size={24} />,
    title: '24/7 Emergency',
    description: 'Round-the-clock emergency roofing services when you need them most.',
    link: '/emergency'
  },
  {
    icon: <FaPoundSign size={24} />,
    title: 'Free Quotes',
    description: 'No-obligation free quotes for all our roofing services.',
    link: '/contact'
  }
];

const Services: React.FC = () => {
  return (
    <ServicesSection>
      <SectionTitle>Our Roofing Services</SectionTitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServiceLink to={service.link}>
              Learn more →
            </ServiceLink>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services;
