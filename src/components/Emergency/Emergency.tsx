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

const Highlight = styled.p`
  margin-bottom: 1.25rem;
  padding: 0.85rem 1rem;
  border-radius: 6px;
  border: 1px solid #374151;
  background-color: #020617;
  color: ${colors.lightText};
`;

const List = styled.ul`
  margin-left: 1.25rem;
  margin-bottom: 1.5rem;
  color: ${colors.darkGray};
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const InfoBand = styled.div`
  margin: 2.5rem 0 1rem;
  padding: 1.25rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #374151;
  background-color: #020617;
  color: ${colors.lightText};
`;

const Strong = styled.span`
  font-weight: 600;
  color: ${colors.lightText};
`;

const Emergency: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <HeroSection>
        <HeroInner>
          <HeroEyebrow>URGENT ROOFING SUPPORT</HeroEyebrow>
          <HeroTitle>24/7 Emergency Roof Repairs.</HeroTitle>
          <HeroSubtitle>
            Day or night, our emergency team secures leaks and storm damage fast so you can protect your home
            and belongings.
          </HeroSubtitle>
        </HeroInner>
      </HeroSection>

      <PageWrapper>
      <Highlight>
        <Strong>Roof leaking right now?</Strong> Call our 24/7 emergency team for urgent call-outs across Leeds
        and the wider Yorkshire area. We secure your roof, prevent further damage and arrange permanent repairs
        as quickly as possible.
      </Highlight>

      <Paragraph>
        Unexpected roof problems rarely happen at a convenient time. Heavy rain, high winds or falling branches can
        all cause sudden damage that needs dealing with immediately. Our emergency response team is on standby
        day and night to protect your property and make your home safe again.
      </Paragraph>

      <SubTitle>When to Call Our 24/7 Emergency Team</SubTitle>
      <Paragraph>
        Get in touch straight away if any of the following applies. Acting quickly can significantly reduce the
        cost and extent of repairs:
      </Paragraph>
      <List>
        <ListItem>Active leaks dripping through ceilings or down internal walls.</ListItem>
        <ListItem>Storm damage leaving sections of the roof exposed or tiles missing.</ListItem>
        <ListItem>Collapsed or sagging areas of the roof that may be unsafe.</ListItem>
        <ListItem>Fallen trees or large branches resting on the roof structure.</ListItem>
        <ListItem>Chimney or ridge tiles that have come loose and pose a danger.</ListItem>
        <ListItem>Water entering electrical areas, fuse boxes or lighting circuits.</ListItem>
      </List>

      <SubTitle>What Happens During an Emergency Call-Out</SubTitle>
      <Paragraph>
        Our goal is to secure your property quickly and safely, then provide a clear plan for permanent repairs.
        A typical emergency visit looks like this:
      </Paragraph>
      <List>
        <ListItem>
          <Strong>1. Quick assessment over the phone:</Strong> we&apos;ll ask a few questions to understand what&apos;s
          happening, any immediate safety risks and how soon we need to attend.
        </ListItem>
        <ListItem>
          <Strong>2. On-site safety check:</Strong> when we arrive, we assess access, electrics and any unstable
          areas before starting work.
        </ListItem>
        <ListItem>
          <Strong>3. Temporary weatherproofing:</Strong> we use tarpaulins, emergency coverings and repairs to
          stop water ingress and protect the structure.
        </ListItem>
        <ListItem>
          <Strong>4. Damage report &amp; photos:</Strong> where helpful, we can provide photos and notes you can
          use for insurance claims.
        </ListItem>
        <ListItem>
          <Strong>5. Follow-up repair plan:</Strong> once your home is made safe, we provide a clear quote and
          timescale for permanent repair work.
        </ListItem>
      </List>

      <SubTitle>Areas We Cover</SubTitle>
      <Paragraph>
        Our 24/7 emergency roof repair service covers Leeds and surrounding areas across West Yorkshire. If
        you&apos;re unsure whether we cover your postcode, get in touch and we&apos;ll confirm straight away.
      </Paragraph>

      <SubTitle>Why Use a Specialist Emergency Team?</SubTitle>
      <Paragraph>
        Working at height in bad weather can be dangerous. Our roofers are trained, fully insured and equipped
        with the correct safety gear to carry out emergency work safely and efficiently. We never cut corners or
        carry out work that would put you, your family or our team at risk.
      </Paragraph>

      <InfoBand>
        <Paragraph>
          <Strong>Important:</Strong> if there is an immediate risk to life, fire or structural collapse, please
          contact the emergency services first. Once everyone is safe and clear, we can help with securing and
          repairing the roof.
        </Paragraph>
      </InfoBand>

      <SubTitle>Ready to Speak to Someone Now?</SubTitle>
      <Paragraph>
        Use the contact section below to request a call-back for urgent roof issues, or phone us directly for
        the fastest response. The more information you can provide about what you&apos;re seeing, the better prepared
        our team will be when they arrive.
      </Paragraph>

      <HomeContact />
    </PageWrapper>
    </>
  );
};

export default Emergency;
