import React, { useEffect } from 'react';
import HomeContact from '../Contact/HomeContact';
import styled from 'styled-components';
import { colors } from '../../theme/colors';

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

const RoofRepairs: React.FC = () => {
  useEffect(() => {
    // Ensure page starts at the very top when this route loads
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <HeroSection>
        <HeroInner>
          <HeroEyebrow>REPAIR, RENEW, PROTECT</HeroEyebrow>
          <HeroTitle>Roof Repairs and Renewals.</HeroTitle>
          <HeroSubtitle>
            Fast, professional roof repairs and renewals across Leeds and Yorkshire, from minor leaks to major
            storm damage.
          </HeroSubtitle>
        </HeroInner>
      </HeroSection>

      <PageWrapper>
      <Title>Roof Repairs and Renewals</Title>

      <Paragraph>
        Yorkshire weather can be tough on roofs. Our Leeds-based team provides fast, professional roof
        repairs for homes and businesses – from minor leaks to major storm damage.
      </Paragraph>

      <Paragraph>
        Whether you&apos;re dealing with a small leak, missing tiles or significant storm damage, our qualified
        roofers can assess the issue quickly and recommend the most effective, long-lasting repair.
      </Paragraph>

      <SubTitle>Common Causes of Roof Damage</SubTitle>
      <Paragraph>
        There are many reasons a roof can start to fail. Some of the most common include:
      </Paragraph>
      <List>
        <ListItem>
          <strong>Storm damage:</strong> High winds can dislodge tiles or slates, and heavy rain can expose
          weaknesses in the roof structure or drainage.
        </ListItem>
        <ListItem>
          <strong>General wear and tear:</strong> Over time, small cracks or loose slates can develop and, if
          ignored, turn into bigger problems.
        </ListItem>
        <ListItem>
          <strong>Blocked gutters:</strong> Leaves, debris and moss can clog gutters, causing water to overflow
          into the roofline or walls.
        </ListItem>
        <ListItem>
          <strong>Ageing materials:</strong> As roofing materials reach the end of their lifespan they become more
          prone to cracking, splitting or losing their protective coatings.
        </ListItem>
        <ListItem>
          <strong>Structural movement:</strong> Movement in the building or roof structure can create gaps or
          misaligned tiles that allow water in.
        </ListItem>
      </List>

      <SubTitle>Signs Your Roof May Need Repairs</SubTitle>
      <Paragraph>Early action can save you money and prevent further damage. Look out for:</Paragraph>
      <List>
        <ListItem>Missing, cracked or broken tiles or slates.</ListItem>
        <ListItem>Water stains on ceilings or walls.</ListItem>
        <ListItem>Moss or algae growth on the roof.</ListItem>
        <ListItem>Sagging areas that may indicate structural issues.</ListItem>
        <ListItem>Overflowing or leaking gutters, especially in heavy rain.</ListItem>
        <ListItem>Draughts in loft or top floor rooms.</ListItem>
      </List>

      <SubTitle>Our Roof Repair Services</SubTitle>
      <Paragraph>
        We handle all types of roof repairs for both residential and commercial properties, including:
      </Paragraph>
      <List>
        <ListItem>
          <strong>Tile and slate repairs:</strong> Replacing loose or missing tiles and slates to protect the roof
          and keep it looking consistent.
        </ListItem>
        <ListItem>
          <strong>Flat roof repairs:</strong> Fixing common flat roof issues such as cracking, blistering and
          standing water.
        </ListItem>
        <ListItem>
          <strong>Chimney repairs:</strong> Repointing, flashing replacement and brickwork repairs to stop leaks
          and maintain stability around chimneys.
        </ListItem>
        <ListItem>
          <strong>Gutter repairs and maintenance:</strong> Clearing, repairing and realigning gutters to ensure
          water is taken away from your property correctly.
        </ListItem>
        <ListItem>
          <strong>Emergency roof repairs:</strong> 24/7 response for urgent issues so your property is protected as
          quickly as possible.
        </ListItem>
        <ListItem>
          <strong>Comprehensive roof inspections:</strong> Detailed checks to identify hidden issues and provide a
          clear picture of your roof&apos;s condition.
        </ListItem>
      </List>

      <SubTitle>Why Choose Yorkshire Roofing?</SubTitle>
      <Paragraph>
        We specialise in roof repairs across Leeds and the wider Yorkshire area, working on all types of
        pitched and flat roofs. Our focus is on clear communication, quality workmanship and solutions that
        last, not quick temporary fixes.
      </Paragraph>

      <Paragraph>
        Every project is carried out by experienced roofers using proven materials and methods. We provide
        honest advice, detailed quotes and tidy, respectful work on site.
      </Paragraph>

      <SubTitle>Our Process</SubTitle>
      <List>
        <ListItem>
          <strong>1. Initial contact:</strong> Get in touch by phone, email or our contact form to tell us about
          the problem and arrange a convenient appointment.
        </ListItem>
        <ListItem>
          <strong>2. Roof inspection:</strong> We visit your property, inspect the roof and identify the root
          cause of any issues.
        </ListItem>
        <ListItem>
          <strong>3. Quotation:</strong> You receive a clear, itemised quote covering recommended repairs,
          materials and timescales.
        </ListItem>
        <ListItem>
          <strong>4. Repairs:</strong> Our team carries out the agreed work efficiently and to high standards,
          keeping disruption to a minimum.
        </ListItem>
        <ListItem>
          <strong>5. Final check and peace of mind:</strong> We complete a final inspection so you can be confident
          your roof is in good condition.
        </ListItem>
      </List>

      <SubTitle>Preventative Maintenance</SubTitle>
      <Paragraph>
        Regular maintenance can extend the life of your roof and reduce the risk of unexpected problems. We can
        provide tailored maintenance plans that include routine gutter cleaning, tile and flashing checks, and
        moss removal.
      </Paragraph>

      <HomeContact />
{/* Removed inline form; using shared HomeContact component for consistency */}
      <Paragraph>
        If you&apos;ve spotted any of the signs above or are worried about the condition of your roof, contact
        Yorkshire Roofing today for a free, no-obligation roof repair quote. We&apos;ll arrange a visit, assess
        the roof and talk you through the best options to protect your property.
      </Paragraph>

      {/*
        <FullWidth>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" type="text" required />
        </FullWidth>
        <FullWidth>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </FullWidth>
        <FullWidth>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" />
        </FullWidth>
        <FullWidth>
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" name="message" />
        </FullWidth>
        <FullWidth>
          <SubmitButton type="submit">Send Enquiry</SubmitButton>
        </FullWidth>
      */}
    </PageWrapper>
    </>
  );
};

export default RoofRepairs;
