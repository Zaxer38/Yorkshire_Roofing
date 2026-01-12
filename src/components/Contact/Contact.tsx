import React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/colors';
import { FaPhoneAlt, FaEnvelope, FaExclamationTriangle, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 0 0 4rem;
  background-color: #050505;
`;

const Hero = styled.section`
  background-color: #020617;
  padding: 6rem 2rem 6rem;
`;

const HeroInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
`;

const HeroTitle = styled.h1`
  font-size: 2.8rem;
  line-height: 1.2;
  margin-bottom: 0.75rem;
`;

const HeroSubtitle = styled.div`
  margin-top: 0.5rem;
  color: ${colors.primary};
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const HeroRight = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.65rem;
`;

const HeroBullet = styled.li`
  display: flex;
  align-items: center;
  color: #f9fafb;
  font-size: 0.95rem;
`;

const HeroBulletIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  background-color: ${colors.primary};
  color: #0b1120;
  font-size: 0.7rem;
  margin-right: 0.6rem;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 0;
`;

const ContactHeading = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 0.75rem;
  color: ${colors.lightText};
`;

const ContactSubheading = styled.p`
  margin-bottom: 1.25rem;
  color: ${colors.text};
  font-size: 0.95rem;
`;

const HighlightList = styled.ul`
  margin: 0 0 1.75rem 0;
  color: ${colors.text};
  list-style: none;
  font-size: 0.95rem;
`;

const HighlightItem = styled.li`
  margin-bottom: 0.25rem;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
  margin-bottom: 2.5rem;
  aspect-ratio: 4.76 / 1;

  @media (max-width: 1024px) {
    aspect-ratio: auto;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  border: 1px dashed #374151;
  padding: 1.75rem 1.25rem;
  background-color: #111827;
  text-align: center;
`;

const CardIcon = styled.div`
  font-size: 2rem;
  color: ${colors.primary};
  margin-bottom: 0.75rem;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  color: ${colors.lightText};
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const CardText = styled.p`
  font-size: 0.9rem;
  color: ${colors.text};
  margin: 0.15rem 0;
`;

const FormMapGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FullWidthField = styled.div`
  grid-column: 1 / -1;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  color: ${colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 0.9rem;
  border-radius: 4px;
  border: 1px solid #374151;
  font-size: 0.95rem;
  outline: none;
  background-color: #111827;
  color: ${colors.lightText};

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px rgba(1, 171, 245, 0.25);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 140px;
  padding: 0.8rem 0.9rem;
  border-radius: 4px;
  border: 1px solid #374151;
  font-size: 0.95rem;
  resize: vertical;
  outline: none;
  background-color: #111827;
  color: ${colors.lightText};

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px rgba(1, 171, 245, 0.25);
  }
`;

const SubmitButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.9rem 2.5rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: ${colors.primary};
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  transition: all 0.25s ease;

  &:hover {
    background-color: #33c4ff;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.35);
  }
`;

const ContactDetails = styled.div`
  font-size: 0.95rem;
  color: ${colors.text};
  line-height: 1.6;
`;

const DetailHeading = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
  margin-top: 1rem;
  color: ${colors.lightText};
`;

const DetailItem = styled.p`
  margin: 0.15rem 0;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 320px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #1f2933;
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <Hero>
        <HeroInner>
          <HeroLeft>
            <HeroTitle>Contact Yorkshire Roofing</HeroTitle>
            <HeroSubtitle>Book Your Free Roofing Quote</HeroSubtitle>
          </HeroLeft>

          <HeroRight>
            <HeroBullet>
              <HeroBulletIcon><FaChevronRight /></HeroBulletIcon>
              Friendly, professional advice on all roofing services
            </HeroBullet>
            <HeroBullet>
              <HeroBulletIcon><FaChevronRight /></HeroBulletIcon>
              Free, no-obligation quotations available
            </HeroBullet>
            <HeroBullet>
              <HeroBulletIcon><FaChevronRight /></HeroBulletIcon>
              Flexible appointment times to suit your schedule
            </HeroBullet>
            <HeroBullet>
              <HeroBulletIcon><FaChevronRight /></HeroBulletIcon>
              Here to answer any questions you have
            </HeroBullet>
          </HeroRight>
        </HeroInner>
      </Hero>

      <ContactContainer>
        <div>
          <ContactHeading>Contact Yorkshire Roofing</ContactHeading>
          <ContactSubheading>Book your free roofing quote with friendly, professional advice.</ContactSubheading>

          <HighlightList>
            <HighlightItem>Friendly, professional advice on all roofing services.</HighlightItem>
            <HighlightItem>Free, no-obligation quotations available.</HighlightItem>
            <HighlightItem>Flexible appointment times to suit your schedule.</HighlightItem>
            <HighlightItem>Here to answer any questions you have.</HighlightItem>
          </HighlightList>

          <CardsGrid>
            <InfoCard>
              <CardIcon><FaPhoneAlt /></CardIcon>
              <CardTitle>Call Us</CardTitle>
              <CardText>0113 805 5834</CardText>
              <CardText>Mon–Fri: 8 AM–6 PM, Sat: 8 AM–1 PM</CardText>
              <CardText>Closed Sundays</CardText>
            </InfoCard>

            <InfoCard>
              <CardIcon><FaEnvelope /></CardIcon>
              <CardTitle>Email Us</CardTitle>
              <CardText>info@yorkshireroofing.co.uk</CardText>
              <CardText>For general enquiries, quotes, and service requests.</CardText>
            </InfoCard>

            <InfoCard>
              <CardIcon><FaExclamationTriangle /></CardIcon>
              <CardTitle>Emergency Contact Details</CardTitle>
              <CardText>07871 644 503</CardText>
              <CardText>For urgent leaks, storm damage, or unsafe roof conditions.</CardText>
            </InfoCard>

            <InfoCard>
              <CardIcon><FaMapMarkerAlt /></CardIcon>
              <CardTitle>Office</CardTitle>
              <CardText>301 Roundhay Road</CardText>
              <CardText>Leeds LS8 4HT</CardText>
            </InfoCard>
          </CardsGrid>

          <FormMapGrid>
            <div>
              <ContactForm>
                <FullWidthField>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" type="text" required />
                </FullWidthField>

                <FullWidthField>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                </FullWidthField>

                <FullWidthField>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" />
                </FullWidthField>

                <FullWidthField>
                  <Label htmlFor="service">Service Required</Label>
                  <Input id="service" name="service" type="text" />
                </FullWidthField>

                <FullWidthField>
                  <Label htmlFor="message">Message</Label>
                  <TextArea id="message" name="message" />
                </FullWidthField>

                <FullWidthField>
                  <SubmitButton type="submit">Submit Request</SubmitButton>
                </FullWidthField>
              </ContactForm>
            </div>

            <ContactDetails>
              <MapWrapper>
                <MapFrame
                  title="Yorkshire Roofing location map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.221077593827!2d-1.519384923640714!3d53.81864647252945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795c2635e8ff1b%3A0x9f0af1a093a9c5cc!2sYorkshire%20Roofing!5e0!3m2!1sen!2suk!4v1700000000000"
                />
              </MapWrapper>
            </ContactDetails>
          </FormMapGrid>
        </div>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
