import React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/colors';
import HomeContact from '../Contact/HomeContact';

const PageWrapper = styled.div`
  background-color: #050505;
  color: #ffffff;
`;

const HeroSection = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem 5rem;
  background: radial-gradient(circle at top, #1f2933 0%, #050505 55%, #020617 100%);
`;

const HeroInner = styled.div`
  max-width: 900px;
  text-align: center;
`;

const HeroEyebrow = styled.p`
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${colors.lightText};
  margin-bottom: 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

const HeroSubtitle = styled.p`
  max-width: 640px;
  margin: 0 auto 2.5rem;
  font-size: 1.05rem;
  color: ${colors.text};
`;

const HeroButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.a`
  padding: 0.9rem 2.5rem;
  border-radius: 999px;
  background-color: ${colors.primary};
  color: #050505;
  font-weight: 700;
  text-decoration: none;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  box-shadow: 0 18px 45px rgba(1, 171, 245, 0.45);
  transition: all 0.25s ease;

  &:hover {
    background-color: #33c4ff;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.a`
  padding: 0.9rem 2.5rem;
  border-radius: 999px;
  border: 1px solid #4b5563;
  background-color: transparent;
  color: #f9fafb;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${colors.primary};
    color: ${colors.primary};
    background-color: rgba(15, 23, 42, 0.85);
  }
`;

const IntroSection = styled.section`
  padding: 3.5rem 1.5rem 4rem;
  background-color: #050505;
  scroll-margin-top: 150px;
`;

const IntroInner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const IntroTitle = styled.h2`
  font-size: 2.3rem;
  font-weight: 800;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    font-size: 2.6rem;
  }
`;

const IntroSubtitle = styled.p`
  max-width: 720px;
  margin: 0 auto;
  font-size: 1rem;
  color: ${colors.text};
`;

const ServicesSection = styled.section`
  padding: 4rem 1.5rem 4.5rem;
  background-color: #050505;
`;

const ServicesInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.75rem;
  margin-top: 2.5rem;
`;

const ServiceCard = styled.div`
  background-color: #111827;
  border-radius: 18px;
  padding: 2.1rem 2rem 2.2rem;
  border: 1px solid #374151;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const ServiceIcon = styled.div`
  font-size: 2rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 800;
`;

const ServiceText = styled.p`
  font-size: 0.97rem;
  color: ${colors.text};
  line-height: 1.6;
`;

const ServiceLink = styled.a`
  margin-top: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${colors.primary};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    text-decoration: underline;
  }
`;

const ProcessSection = styled.section`
  padding: 3.5rem 1.5rem 4.5rem;
  background-color: #050505;
`;

const ProcessInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  gap: 2.75rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessEyebrow = styled.p`
  font-size: 0.8rem;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  color: ${colors.lightText};
  margin-bottom: 0.75rem;
`;

const ProcessTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 1.75rem;

  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
`;

const StepsList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const StepItem = styled.li`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  column-gap: 1rem;
`;

const StepNumber = styled.div`
  font-weight: 700;
  font-size: 1rem;
  color: #e5e7eb;
  margin-top: 0.15rem;
`;

const StepContent = styled.div``;

const StepTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.15rem;
`;

const StepText = styled.p`
  font-size: 0.95rem;
  color: ${colors.text};
`;

const ProcessImageBox = styled.div`
  background-color: #dbeafe;
  border-radius: 24px;
  min-height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  font-size: 0.95rem;
  text-align: center;
  box-shadow: 0 20px 55px rgba(15, 23, 42, 0.6);

  @media (min-width: 1024px) {
    min-height: 320px;
  }
`;

const Commercial: React.FC = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <HeroInner>
          <HeroEyebrow>COMMERCIAL ROOFING SPECIALISTS</HeroEyebrow>
          <HeroTitle>Reliable Roofing for Businesses Across Yorkshire.</HeroTitle>
          <HeroSubtitle>
            From warehouses and offices to retail units and industrial sites, we design, install, and maintain
            commercial roofing systems that protect your assets and keep your operations running.
          </HeroSubtitle>

          <HeroButtons>
            <PrimaryButton href="#contact">Request a Site Survey</PrimaryButton>
            <SecondaryButton href="#services">View Commercial Services</SecondaryButton>
          </HeroButtons>
        </HeroInner>
      </HeroSection>

      <IntroSection id="services">
        <IntroInner>
          <IntroTitle>Commercial Roofing Services</IntroTitle>
          <IntroSubtitle>
            Tailored roofing solutions for property managers, business owners, and developers. We work around
            your schedule to minimise downtime and meet strict safety and compliance standards.
          </IntroSubtitle>
        </IntroInner>
      </IntroSection>

      <ServicesSection>
        <ServicesInner>
          <CardsGrid>
            <ServiceCard>
              <ServiceIcon>🏢</ServiceIcon>
              <ServiceTitle>Flat &amp; Industrial Roof Systems</ServiceTitle>
              <ServiceText>
                Installation and replacement of high-performance flat roofing systems including single-ply,
                built-up, and liquid-applied membranes for warehouses, factories, and large commercial spaces.
              </ServiceText>
              <ServiceLink href="#contact">
                Discuss Your Project <span>→</span>
              </ServiceLink>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>⚙️</ServiceIcon>
              <ServiceTitle>Planned Maintenance &amp; Repairs</ServiceTitle>
              <ServiceText>
                Proactive maintenance programs, leak tracing, and rapid repair callouts to prevent costly
                disruption and extend the life of your existing roof systems.
              </ServiceText>
              <ServiceLink href="#contact">
                Set Up a Maintenance Plan <span>→</span>
              </ServiceLink>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>📊</ServiceIcon>
              <ServiceTitle>Surveys, Reports &amp; Compliance</ServiceTitle>
              <ServiceText>
                Detailed roof condition surveys, photographic reports, and recommendations to support budget
                planning, insurance, and regulatory compliance for your properties.
              </ServiceText>
              <ServiceLink href="#contact">
                Book a Professional Survey <span>→</span>
              </ServiceLink>
            </ServiceCard>
          </CardsGrid>
        </ServicesInner>
      </ServicesSection>

      <ProcessSection>
        <ProcessInner>
          <div>
            <ProcessEyebrow>BUILT AROUND YOUR BUSINESS</ProcessEyebrow>
            <ProcessTitle>How We Deliver Commercial Roofing Projects</ProcessTitle>

            <StepsList>
              <StepItem>
                <StepNumber>1</StepNumber>
                <StepContent>
                  <StepTitle>On-Site Assessment &amp; Planning</StepTitle>
                  <StepText>
                    We carry out a thorough site visit to understand access, health &amp; safety requirements, and
                    operational constraints before providing a clear, itemised proposal.
                  </StepText>
                </StepContent>
              </StepItem>

              <StepItem>
                <StepNumber>2</StepNumber>
                <StepContent>
                  <StepTitle>Programmed Works with Minimal Downtime</StepTitle>
                  <StepText>
                    Our teams schedule works around your trading hours, coordinate with other contractors, and
                    keep you updated throughout the project.
                  </StepText>
                </StepContent>
              </StepItem>

              <StepItem>
                <StepNumber>3</StepNumber>
                <StepContent>
                  <StepTitle>Sign-Off, Handover &amp; Ongoing Support</StepTitle>
                  <StepText>
                    Final inspections, warranty documentation, and optional maintenance plans ensure you have
                    long-term protection and a single point of contact.
                  </StepText>
                </StepContent>
              </StepItem>
            </StepsList>
          </div>

          <ProcessImageBox>
            Image showcasing commercial roofing project or site team in action
          </ProcessImageBox>
        </ProcessInner>
      </ProcessSection>

      <HomeContact />
    </PageWrapper>
  );
};

export default Commercial;
