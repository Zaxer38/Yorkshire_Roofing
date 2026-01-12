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
  padding: 3rem 1.5rem 4.5rem;
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

const PricingSection = styled.section`
  padding: 3.5rem 1.5rem 4.5rem;
  background-color: #050505;
`;

const PricingInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const PricingHeader = styled.div`
  text-align: center;
  margin-bottom: 2.75rem;
`;

const PricingTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const PricingSubtitle = styled.p`
  font-size: 1rem;
  color: ${colors.text};
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.75rem;
`;

const PricingCard = styled.div<{ featured?: boolean }>`
  background-color: #111827;
  border-radius: 18px;
  padding: 2.1rem 2rem 2.3rem;
  border: 1px solid
    ${({ featured }) => (featured ? '#facc15' : '#1f2937')};
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.55);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FeaturedBadge = styled.span`
  position: absolute;
  top: 0.9rem;
  right: 1.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #e5e7eb;
`;

const PricingPlanName = styled.h3`
  font-size: 1.4rem;
  font-weight: 800;
`;

const PricingPlanTagline = styled.p`
  font-size: 0.95rem;
  color: ${colors.text};
`;

const PricingAmount = styled.p`
  font-size: 2.6rem;
  font-weight: 800;
  margin-top: 0.75rem;
`;

const PricingPeriod = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.2rem 0 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

const FeatureItem = styled.li<{ disabled?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: ${({ disabled }) => (disabled ? '#6b7280' : '#e5e7eb')};
  text-decoration: ${({ disabled }) => (disabled ? 'line-through' : 'none')};
`;

const FeatureBullet = styled.span<{ disabled?: boolean }>`
  font-size: 1rem;
  color: ${({ disabled }) => (disabled ? '#6b7280' : '#22c55e')};
  margin-top: 0.1rem;
`;

const PlanButton = styled.button<{ variant?: 'default' | 'gold' }>`
  margin-top: auto;
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  border: 1px solid
    ${({ variant }) => (variant === 'gold' ? '#facc15' : '#4b5563')};
  background-color: transparent;
  color: ${({ variant }) => (variant === 'gold' ? '#facc15' : '#e5e7eb')};
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'gold' ? 'rgba(250, 204, 21, 0.08)' : 'rgba(75, 85, 99, 0.3)'};
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

const Residential: React.FC = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <HeroInner>
          <HeroEyebrow>YOUR HOME, OUR COMMITMENT</HeroEyebrow>
          <HeroTitle>Residential Roofing by awais.</HeroTitle>
          <HeroSubtitle>
            Protect your biggest investment with certified, durable, and aesthetically superior roofing
            services.
          </HeroSubtitle>

          <HeroButtons>
            <PrimaryButton href="#contact">Book Your Inspection Now</PrimaryButton>
            <SecondaryButton href="#services">See All Services</SecondaryButton>
          </HeroButtons>
        </HeroInner>
      </HeroSection>

      <IntroSection>
        <IntroInner>
          <IntroTitle>Residential Roofing Services</IntroTitle>
          <IntroSubtitle>
            From minor leaks to full roof system installations, we cover every aspect of residential roofing
            with certified quality and care.
          </IntroSubtitle>
        </IntroInner>
      </IntroSection>

      <ServicesSection id="services">
        <ServicesInner>
          <CardsGrid>
            <ServiceCard>
              <ServiceIcon>🏠</ServiceIcon>
              <ServiceTitle>Complete Roof Replacement</ServiceTitle>
              <ServiceText>
                When repairs are no longer cost-effective, we provide seamless, professional roof replacement
                using premium materials like asphalt shingles, metal, and tile. We handle tear-off, decking
                inspection, and installation of a full, warranted system.
              </ServiceText>
              <ServiceLink href="#contact">View Material Options 
                <span>→</span>
              </ServiceLink>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>🛠️</ServiceIcon>
              <ServiceTitle>Expert Roof Repair &amp; Leak Fixing</ServiceTitle>
              <ServiceText>
                Fast, reliable repair services for leaks, missing shingles, storm damage, and flashing issues.
                Our team uses diagnostic technology to pinpoint the exact source of the problem, ensuring a
                durable and lasting repair that matches your existing roof.
              </ServiceText>
              <ServiceLink href="#contact">Request Urgent Repair 
                <span>→</span>
              </ServiceLink>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>🔎</ServiceIcon>
              <ServiceTitle>Comprehensive Roof Inspection</ServiceTitle>
              <ServiceText>
                Annual inspections, real estate transactions, or insurance claims. Our certified inspectors
                provide detailed reports on roof health, expected lifespan, and necessary maintenance, giving
                you complete peace of mind.
              </ServiceText>
              <ServiceLink href="#contact">Schedule Inspection 
                <span>→</span>
              </ServiceLink>
            </ServiceCard>
          </CardsGrid>
        </ServicesInner>
      </ServicesSection>

      <PricingSection>
        <PricingInner>
          <PricingHeader>
            <PricingTitle>Service &amp; Maintenance Packages</PricingTitle>
            <PricingSubtitle>
              Choose the level of protection that fits your home and budget. All packages include labor
              warranty and priority scheduling.
            </PricingSubtitle>
          </PricingHeader>

          <PricingGrid>
            <PricingCard>
              <PricingPlanName>Essential Bronze</PricingPlanName>
              <PricingPlanTagline>
                Foundational protection for new homes or simple repairs.
              </PricingPlanTagline>
              <PricingAmount>
                £199<PricingPeriod>/inspection</PricingPeriod>
              </PricingAmount>

              <FeaturesList>
                <FeatureItem>
                  <FeatureBullet>✓</FeatureBullet>
                  <span>Gutter and Drain Clearing (Basic)</span>
                </FeatureItem>
                <FeatureItem>
                  <FeatureBullet>✓</FeatureBullet>
                  <span>15-Point Visual Roof Inspection</span>
                </FeatureItem>
                <FeatureItem>
                  <FeatureBullet>✓</FeatureBullet>
                  <span>Digital Condition Report</span>
                </FeatureItem>
                <FeatureItem disabled>
                  <FeatureBullet disabled>✕</FeatureBullet>
                  <span>Emergency Priority Service</span>
                </FeatureItem>
                <FeatureItem disabled>
                  <FeatureBullet disabled>✕</FeatureBullet>
                  <span>Lifetime Shingle Warranty</span>
                </FeatureItem>
              </FeaturesList>

              <PlanButton type="button">Select Plan</PlanButton>
            </PricingCard>

            <PricingCard featured>
              <FeaturedBadge>Most Popular</FeaturedBadge>
              <PricingPlanName>Premier Silver</PricingPlanName>
              <PricingPlanTagline>
                Comprehensive care and extended warranty coverage.
              </PricingPlanTagline>
              <PricingAmount>
                £499<PricingPeriod>/year</PricingPeriod>
              </PricingAmount>

              <FeaturesList>
                <FeatureItem>
                  <FeatureBullet>✓</FeatureBullet>
                  <span><strong>Everything in Bronze</strong></span>
                </FeatureItem>
                <FeatureItem>
                  <FeatureBullet>✓</FeatureBullet>
                  <span>Annual Detailed Inspection &amp; Tune-up</span>
                </FeatureItem>
                <FeatureItem>
                  <FeatureBullet>✓</FeatureBullet>
                  <span><strong>1-Year Repair Warranty</strong></span>
                </FeatureItem>
                <FeatureItem>
                  <FeatureBullet>✓</FeatureBullet>
                  <span>Discounted Repair Labor Rate (15% off)</span>
                </FeatureItem>
                <FeatureItem disabled>
                  <FeatureBullet disabled>✕</FeatureBullet>
                  <span>Lifetime Shingle Warranty</span>
                </FeatureItem>
              </FeaturesList>

              <PlanButton type="button">Choose Premier</PlanButton>
            </PricingCard>

            <PricingCard featured>
              <PricingPlanName>Elite Gold</PricingPlanName>
              <PricingPlanTagline>
                Total peace of mind with our longest warranty and priority support.
              </PricingPlanTagline>
              <PricingAmount>
                £799<PricingPeriod>/year</PricingPeriod>
              </PricingAmount>

              <FeaturesList>
                <FeatureItem>
                  <FeatureBullet>✓</FeatureBullet>
                  <span><strong>Everything in Silver</strong></span>
                </FeatureItem>
                <FeatureItem>
                  <FeatureBullet>✓</FeatureBullet>
                  <span>Twice-Yearly Preventative Checks</span>
                </FeatureItem>
                <FeatureItem>
                  <FeatureBullet>✓</FeatureBullet>
                  <span>
                    <strong>Emergency Priority Service</strong> (24hr response)
                  </span>
                </FeatureItem>
                <FeatureItem>
                  <FeatureBullet>✓</FeatureBullet>
                  <span>Discounted Repair Labor Rate (25% off)</span>
                </FeatureItem>
                <FeatureItem>
                  <FeatureBullet>✓</FeatureBullet>
                  <span><strong>Transferable Warranty Option</strong></span>
                </FeatureItem>
              </FeaturesList>

              <PlanButton type="button" variant="gold">
                Select Plan
              </PlanButton>
            </PricingCard>
          </PricingGrid>
        </PricingInner>
      </PricingSection>

      <ProcessSection>
        <ProcessInner>
          <div>
            <ProcessEyebrow>THE APEX ADVANTAGE</ProcessEyebrow>
            <ProcessTitle>Our 3-Step Stress-Free Roofing Process</ProcessTitle>

            <StepsList>
              <StepItem>
                <StepNumber>1</StepNumber>
                <StepContent>
                  <StepTitle>Detailed Site Assessment</StepTitle>
                  <StepText>
                    We start with a thorough drone-assisted inspection and leak diagnostics to provide you
                    with the most accurate, no-surprise estimate possible.
                  </StepText>
                </StepContent>
              </StepItem>

              <StepItem>
                <StepNumber>2</StepNumber>
                <StepContent>
                  <StepTitle>Efficient, Clean Installation</StepTitle>
                  <StepText>
                    Our certified crew performs the work with minimal disruption, adhering strictly to safety
                    standards and cleaning the site completely every day.
                  </StepText>
                </StepContent>
              </StepItem>

              <StepItem>
                <StepNumber>3</StepNumber>
                <StepContent>
                  <StepTitle>Final Inspection &amp; Warranty</StepTitle>
                  <StepText>
                    A final quality check ensures every detail is perfect, followed by providing you with your
                    manufacturer and labor warranty documentation.
                  </StepText>
                </StepContent>
              </StepItem>
            </StepsList>
          </div>

          <ProcessImageBox>
            Image of Roofers Working or Finished Roof
          </ProcessImageBox>
        </ProcessInner>
      </ProcessSection>
      <HomeContact />
    </PageWrapper>
  );
};

export default Residential;