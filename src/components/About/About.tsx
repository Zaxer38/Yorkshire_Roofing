import React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/colors';
import Footer from '../Footer/Footer';

const Banner = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem 5rem;
  background: radial-gradient(circle at top, #1f2933 0%, #050505 55%, #020617 100%);
`;

const BannerContent = styled.div`
  max-width: 900px;
  text-align: center;
  color: #ffffff;
`;

const BannerEyebrow = styled.p`
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${colors.lightText};
  margin-bottom: 1rem;
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: ${colors.lightText};

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const BannerSubtitle = styled.p`
  max-width: 640px;
  margin: 0 auto;
  font-size: 1.05rem;
  color: ${colors.text};
`;

const PageWrapper = styled.main`
  padding: 3rem 2rem 5rem;
  max-width: 1100px;
  margin: 0 auto;
  color: ${colors.text};
  border-bottom: 1px solid #1f2933;
`;

const PageTitle = styled.h1`
  font-size: 2.6rem;
  margin-bottom: 2rem;
  color: ${colors.lightText};
  text-align: left;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 0.75rem;
  color: ${colors.lightText};
`;

const Paragraph = styled.p`
  margin-bottom: 0.85rem;
  line-height: 1.7;
`;

const BulletList = styled.ul`
  margin-left: 1.25rem;
  margin-top: 0.75rem;
  list-style: disc;
`;

const BulletItem = styled.li`
  margin-bottom: 0.4rem;
`;

const StorySection = styled.section`
  margin-top: 2.5rem;
  margin-bottom: 3.25rem;
  padding: 2.5rem 2.25rem;
  background-color: #020617;
  border-radius: 24px;
  border: 1px solid #1f2937;
  box-shadow: 0 22px 55px rgba(0, 0, 0, 0.65);
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StoryOverline = styled.p`
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${colors.lightText};
  margin-bottom: 0.75rem;
`;

const StoryHeading = styled.h2`
  font-size: 2.3rem;
  color: ${colors.lightText};
  margin-bottom: 1.25rem;
`;

const StoryParagraph = styled.p`
  margin-bottom: 0.9rem;
  line-height: 1.8;
`;

const StatsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  margin-top: 1.75rem;
`;

const StatItem = styled.div`
  min-width: 120px;
`;

const StatNumber = styled.div`
  font-size: 1.7rem;
  font-weight: 800;
  color: ${colors.lightText};
  margin-bottom: 0.15rem;
`;

const StatLabel = styled.p`
  font-size: 0.9rem;
`;

const CertCard = styled.div`
  background-color: #0b1220;
  border-radius: 18px;
  padding: 2.2rem 2rem;
  border: 1px solid #1f2937;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.55);
`;

const CertTitle = styled.h3`
  font-size: 1.5rem;
  color: ${colors.lightText};
  margin-bottom: 0.8rem;
`;

const CertText = styled.p`
  font-size: 0.95rem;
  margin-bottom: 1.25rem;
`;

const CertList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const CertItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.95rem;
`;

const CertCheck = styled.span`
  color: #22c55e;
  font-size: 1.1rem;
  line-height: 1.2;
  margin-top: -1px;
`;

const About: React.FC = () => {
  return (
    <>
      <Banner>
        <BannerContent>
          <BannerEyebrow>ABOUT YORKSHIRE ROOFING</BannerEyebrow>
          <BannerTitle>About Yorkshire Roofing.</BannerTitle>
          <BannerSubtitle>
            Local roofing specialists providing repairs, maintenance and new installations for homes and
            businesses across Leeds and the wider Yorkshire area.
          </BannerSubtitle>
        </BannerContent>
      </Banner>

      <PageWrapper>
        <PageTitle>About Us – Your Trusted Local Roofing Specialists</PageTitle>

        <StorySection>
          <StoryGrid>
            <div>
              <StoryOverline>SINCE 2010</StoryOverline>
              <StoryHeading>Our Story of Local Excellence</StoryHeading>
              <StoryParagraph>
                Apex Roofing was founded by two lifelong friends who set out to create a company defined by
                meticulous craftsmanship and unwavering customer care.
              </StoryParagraph>
              <StoryParagraph>
                Over the last decade, we&apos;ve grown from a small two-person team into a trusted local roofing
                partner, completing thousands of projects and earning long-term relationships with homeowners
                across the region.
              </StoryParagraph>

              <StatsRow>
                <StatItem>
                  <StatNumber>15+</StatNumber>
                  <StatLabel>Years in Business</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber>3,000+</StatNumber>
                  <StatLabel>Roofs Completed</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber>A+</StatNumber>
                  <StatLabel>Customer Rating</StatLabel>
                </StatItem>
              </StatsRow>
            </div>

            <CertCard>
              <CertTitle>Certified &amp; Compliant</CertTitle>
              <CertText>
                We maintain industry-leading certifications so you always receive the best materials, safest
                installation practices, and long-lasting warranties.
              </CertText>
              <CertList>
                <CertItem>
                  <CertCheck>✓</CertCheck>
                  <span>Certified master shingle installers</span>
                </CertItem>
                <CertItem>
                  <CertCheck>✓</CertCheck>
                  <span>Fully licensed, bonded, and insured</span>
                </CertItem>
                <CertItem>
                  <CertCheck>✓</CertCheck>
                  <span>OSHA-compliant safety practices</span>
                </CertItem>
                <CertItem>
                  <CertCheck>✓</CertCheck>
                  <span>Extended manufacturer warranty eligibility</span>
                </CertItem>
              </CertList>
            </CertCard>
          </StoryGrid>
        </StorySection>

        <Section>
          <SectionTitle>About Us – Your Trusted Local Roofing Specialists</SectionTitle>
          <Paragraph>
            We are a professional roofing company dedicated to delivering high-quality, reliable, and long-lasting roofing
            solutions for homes and businesses. With years of hands-on experience and a strong commitment to customer
            satisfaction, we take pride in providing workmanship you can trust.
          </Paragraph>
          <Paragraph>
            Whether you need a small repair, a full roof replacement, or ongoing maintenance, our team ensures every
            project is completed to the highest standard.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>What We Do</SectionTitle>
          <Paragraph>We offer a comprehensive range of roofing services, including:</Paragraph>
          <BulletList>
            <BulletItem>Roof repairs (tiles, leaks, storm damage, wear &amp; tear).</BulletItem>
            <BulletItem>New roof installations.</BulletItem>
            <BulletItem>Flat roofing systems.</BulletItem>
            <BulletItem>Slate and tile roofing.</BulletItem>
            <BulletItem>Guttering, fascia, and soffit work.</BulletItem>
            <BulletItem>Roof inspections and maintenance.</BulletItem>
            <BulletItem>Commercial and residential roofing.</BulletItem>
          </BulletList>
          <Paragraph>
            Every job is completed using durable materials and proven techniques, ensuring long-lasting results and full
            peace of mind.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Why Choose Us?</SectionTitle>
          <Paragraph>Here&apos;s what sets us apart:</Paragraph>
          <BulletList>
            <BulletItem>
              <strong>Experienced &amp; Reliable</strong> – Our team brings strong industry experience and consistently
              delivers dependable, professional roofing work.
            </BulletItem>
            <BulletItem>
              <strong>High-Quality Workmanship</strong> – We take pride in getting the job done right the first time. Every
              project is completed with attention to detail and a focus on quality.
            </BulletItem>
            <BulletItem>
              <strong>Transparent Pricing</strong> – No hidden costs or unwanted surprises. We provide honest, upfront
              quotes and discuss all work with you before starting.
            </BulletItem>
            <BulletItem>
              <strong>Fast Response Times</strong> – Whether it’s an urgent repair or a planned installation, we respond
              quickly and work efficiently.
            </BulletItem>
            <BulletItem>
              <strong>Customer Satisfaction First</strong> – Your home or business deserves the best. We communicate
              clearly, keep you updated, and ensure you&apos;re happy with the result.
            </BulletItem>
            <BulletItem>
              <strong>Fully Equipped &amp; Prepared</strong> – We arrive with all the tools, materials, and safety
              equipment needed to complete the job professionally and safely.
            </BulletItem>
          </BulletList>
        </Section>

        <Section>
          <SectionTitle>Our Mission</SectionTitle>
          <Paragraph>
            Our mission is simple: To provide reliable, high-quality roofing services that protect your property and
            deliver long-term value.
          </Paragraph>
          <Paragraph>
            We believe in building trust, offering honest advice, and delivering roofing solutions that stand the test of
            time.
          </Paragraph>
        </Section>
      </PageWrapper>

      <Footer />
    </>
  );
};

export default About;
