import React, { useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/colors';
import HomeContact from '../Contact/HomeContact';

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
  color: #ffffff;
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

const PageWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem 4rem;
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 3.5rem 1.5rem 3rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1.25rem 2.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${colors.primary};
`;

const SubTitle = styled.h2`
  font-size: 1.75rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: ${colors.lightText};
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  color: ${colors.darkGray};
`;

const List = styled.ul`
  margin-left: 1.25rem;
  margin-bottom: 1.5rem;
  color: ${colors.darkGray};
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const RoofMaintenance: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection>
        <HeroInner>
          <HeroEyebrow>KEEP YOUR ROOF HEALTHY</HeroEyebrow>
          <HeroTitle>Roof Maintenance Leeds.</HeroTitle>
          <HeroSubtitle>
            Regular inspections and preventative maintenance to extend the life of your roof and avoid costly
            emergency repairs.
          </HeroSubtitle>
        </HeroInner>
      </HeroSection>

      <PageWrapper>
      <Title>Roof Maintenance Leeds</Title>

      <Paragraph>
        Proactive maintenance is the most cost-effective way to extend the lifespan of any roof. Our Leeds-based
        team offers scheduled inspections, cleaning and minor repairs that prevent small issues turning into
        expensive problems.
      </Paragraph>

      <SubTitle>Why Regular Maintenance Matters</SubTitle>
      <List>
        <ListItem>Early detection of cracked tiles, degraded felt or loose flashings.</ListItem>
        <ListItem>Clearing moss & debris so water drains away freely.</ListItem>
        <ListItem>Protecting manufacturer and workmanship warranties.</ListItem>
        <ListItem>Reducing the risk of emergency call-outs during storms.</ListItem>
        <ListItem>Maintaining property value and kerb appeal.</ListItem>
      </List>

      <SubTitle>What Our Maintenance Visits Include</SubTitle>
      <List>
        <ListItem>Full visual inspection of tiles, slates, ridge, hips and valleys.</ListItem>
        <ListItem>Check and reseal flashings around chimneys, vents and skylights.</ListItem>
        <ListItem>Clear gutters, downpipes and check for secure fixings.</ListItem>
        <ListItem>Remove moss, algae and organic growth from roof surface.</ListItem>
        <ListItem>Photographic report highlighting any areas that may need future attention.</ListItem>
      </List>

      <SubTitle>Flexible Maintenance Plans</SubTitle>
      <Paragraph>
        We offer one-off inspections or annual / bi-annual plans tailored to residential and commercial roofs.
        Choose a schedule that suits your building and budget – we&apos;ll handle the reminders and keep your roof in
        top condition all year round.
      </Paragraph>

      <SubTitle>Why Choose Yorkshire Roofing</SubTitle>
      <List>
        <ListItem>Qualified, insured roofers with decades of experience.</ListItem>
        <ListItem>Detailed reports and transparent recommendations – no hard sell.</ListItem>
        <ListItem>Use of safe access equipment and full site tidy-up after each visit.</ListItem>
        <ListItem>Priority call-out for plan customers if unexpected damage occurs.</ListItem>
      </List>
      <HomeContact />
    </PageWrapper>
    </>
  );
};

export default RoofMaintenance;
