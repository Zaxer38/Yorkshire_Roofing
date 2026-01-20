import React, { useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/colors';

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

const IntroText = styled.p`
  max-width: 780px;
  margin: 0 auto 3rem;
  font-size: 1rem;
  color: ${colors.text};
  text-align: center;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`;

const FAQItem = styled.div`
  background-color: #111827;
  border-radius: 12px;
  padding: 1.5rem 1.75rem;
  border: 1px solid #1f2937;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
`;

const Question = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: ${colors.lightText};
`;

const Answer = styled.p`
  font-size: 0.98rem;
  line-height: 1.7;
  color: ${colors.text};
`;

const FAQ: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <HeroSection>
        <HeroInner>
          <HeroEyebrow>HELP & INFORMATION</HeroEyebrow>
          <HeroTitle>Frequently Asked Questions.</HeroTitle>
          <HeroSubtitle>
            Answers to the most common questions we get about roof repairs, maintenance, emergency call-outs and
            new installations across Leeds and Yorkshire.
          </HeroSubtitle>
        </HeroInner>
      </HeroSection>

      <PageWrapper>
        <IntroText>
          If you can&apos;t see your question below, feel free to get in touch and we&apos;ll be happy to give clear,
          no-obligation advice tailored to your home or business.
        </IntroText>

        <FAQGrid>
          <FAQItem>
            <Question>Do you offer free quotes?</Question>
            <Answer>
              Yes. All of our initial inspections and written quotations are completely free and without
              obligation. We&apos;ll assess the roof, explain what we recommend and provide a clear itemised quote
              before any work goes ahead.
            </Answer>
          </FAQItem>

          <FAQItem>
            <Question>Which areas do you cover?</Question>
            <Answer>
              We&apos;re based in Leeds and cover the wider West Yorkshire area. If you&apos;re unsure whether we cover
              your postcode, just send us a quick message or give us a call and we&apos;ll confirm straight away.
            </Answer>
          </FAQItem>

          <FAQItem>
            <Question>Are you insured and qualified?</Question>
            <Answer>
              Yes. Our roofers are fully insured and experienced in working on all common roof types, including
              pitched, slate, tile and flat roofing systems. We follow current safety guidelines and use the
              correct access equipment on every job.
            </Answer>
          </FAQItem>

          <FAQItem>
            <Question>Can you help in an emergency?</Question>
            <Answer>
              We provide a 24/7 emergency roofing service for urgent leaks and storm damage. We&apos;ll prioritise
              making your property safe and watertight, then arrange a follow-up visit for any permanent repair
              work that&apos;s needed.
            </Answer>
          </FAQItem>

          <FAQItem>
            <Question>Do you work on both residential and commercial roofs?</Question>
            <Answer>
              Yes. We work with homeowners, landlords, letting agents and commercial clients, from terraced homes
              to warehouses and office buildings. The same team and standards apply regardless of the size of the
              project.
            </Answer>
          </FAQItem>

          <FAQItem>
            <Question>How often should my roof be inspected or maintained?</Question>
            <Answer>
              As a general guide, we recommend a professional roof inspection every 1&ndash;2 years, or after severe
              weather. Regular maintenance visits help spot small issues early and can significantly extend the
              life of your roof.
            </Answer>
          </FAQItem>

          <FAQItem>
            <Question>Can you work directly with my insurance company?</Question>
            <Answer>
              We&apos;re happy to provide photographs, reports and quotes that you can use with your insurer. In many
              cases, we can also speak directly with loss adjusters to clarify the scope of work where needed.
            </Answer>
          </FAQItem>

          <FAQItem>
            <Question>What types of roof do you repair or replace?</Question>
            <Answer>
              We work on most common systems, including tiled roofs, slate roofs, felt and single-ply flat roofs,
              and a range of modern waterproofing membranes. If you&apos;re unsure what system you have, we can
              identify it during the inspection.
            </Answer>
          </FAQItem>
        </FAQGrid>
      </PageWrapper>
    </>
  );
};

export default FAQ;
