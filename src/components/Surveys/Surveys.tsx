import React, { useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/colors';
import HomeContact from '../Contact/HomeContact';

const HeroSection = styled.section`
  min-height: 60vh;
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
    font-size: 3.5rem;
  }
`;

const HeroSubtitle = styled.p`
  max-width: 640px;
  margin: 0 auto 2.5rem;
  font-size: 1.05rem;
  color: ${colors.text};
`;

const PageWrapper = styled.section`
  max-width: 1100px;
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

const SectionTitle = styled.h2`
  font-size: 1.9rem;
  margin-bottom: 1.25rem;
  color: ${colors.lightText};
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  color: ${colors.darkGray};
  line-height: 1.7;
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 2.5rem;
  margin-top: 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const List = styled.ul`
  margin-left: 1.25rem;
  margin-bottom: 1.5rem;
  color: ${colors.darkGray};
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const HighlightBox = styled.div`
  background-color: #020617;
  border-radius: 12px;
  border: 1px solid #1f2937;
  padding: 1.5rem 1.75rem;
  color: ${colors.lightText};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
`;

const Strong = styled.span`
  font-weight: 600;
  color: ${colors.lightText};
`;

const Surveys: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <HeroSection>
        <HeroInner>
          <HeroEyebrow>SURVEYS & CONSULTANCY</HeroEyebrow>
          <HeroTitle>Roof Surveys & Consultancy.</HeroTitle>
          <HeroSubtitle>
            Detailed roof condition surveys, photographic reports and practical consultancy for homeowners,
            landlords and commercial property managers across Leeds and Yorkshire.
          </HeroSubtitle>
        </HeroInner>
      </HeroSection>

      <PageWrapper>
        <SectionTitle>Why Commission a Roof Survey?</SectionTitle>
        <Paragraph>
          A professional roof survey gives you a clear picture of the current condition of your roof, any urgent
          issues and likely remaining lifespan. Our surveys are ideal for homeowners planning work, landlords
          managing portfolios and commercial clients budgeting for future maintenance.
        </Paragraph>

        <TwoColumn>
          <div>
            <SectionTitle>What Our Surveys Include</SectionTitle>
            <List>
              <ListItem>Visual inspection of all accessible roof areas, coverings and flashings.</ListItem>
              <ListItem>Checks to gutters, downpipes and associated drainage details.</ListItem>
              <ListItem>Identification of defects, wear, previous patch repairs and poor detailing.</ListItem>
              <ListItem>High-level photographs to document key findings and areas of concern.</ListItem>
              <ListItem>Clear recommendations for repair, renewal or ongoing maintenance.</ListItem>
            </List>

            <SectionTitle>Who Our Consultancy Is For</SectionTitle>
            <List>
              <ListItem>Homeowners buying or selling property who want peace of mind about the roof.</ListItem>
              <ListItem>Landlords and letting agents responsible for maintaining multiple properties.</ListItem>
              <ListItem>Facilities and estate managers overseeing commercial or industrial sites.</ListItem>
              <ListItem>Architects and surveyors needing specialist roofing input on projects.</ListItem>
            </List>
          </div>

          <HighlightBox>
            <SectionTitle>Clear, Practical Reports</SectionTitle>
            <Paragraph>
              Every survey comes with a written report that explains in plain language what we found, how urgent
              any issues are and the options available. Where helpful, we can also provide budget estimates for
              different repair or replacement strategies.
            </Paragraph>
            <Paragraph>
              Our goal is to give you the information you need to make confident decisions &mdash; whether that&apos;s
              negotiating a property purchase, planning refurbishment works or setting realistic maintenance
              budgets for the years ahead.
            </Paragraph>
          </HighlightBox>
        </TwoColumn>

        <SectionTitle>Insurance, Mortgage and Compliance Surveys</SectionTitle>
        <Paragraph>
          We can tailor surveys to meet the requirements of insurers, lenders or regulatory bodies. This may
          include highlighting storm-related damage, commenting on historic issues or confirming that a roof is
          performing as expected following previous works.
        </Paragraph>

        <SectionTitle>Ready to Discuss a Survey?</SectionTitle>
        <Paragraph>
          Use the contact section below to tell us a little about your property and what you need. We&apos;ll advise
          on the most appropriate level of survey and provide a clear, no-obligation quote before any visit is
          arranged.
        </Paragraph>

        <HomeContact />
      </PageWrapper>
    </>
  );
};

export default Surveys;
