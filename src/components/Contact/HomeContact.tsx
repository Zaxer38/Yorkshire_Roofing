import React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/colors';

const ContactSection = styled.section`
  padding: 5rem 2rem 5rem;
  background-color: #050505;
  scroll-margin-top: 140px;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactHeading = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const ContactSubheading = styled.p`
  margin-bottom: 2rem;
  color: ${colors.darkGray};
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
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  }
`;

const ContactDetails = styled.div`
  font-size: 0.95rem;
  color: ${colors.text};
  line-height: 1.6;
`;

const DetailHeading = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  color: #ffffff;
`;

const DetailItem = styled.p`
  margin: 0.25rem 0;
`;

const HomeContact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <div>
          <ContactHeading>Request a Free Quote</ContactHeading>
          <ContactSubheading>
            Tell us a little about your roofing project and well get back to you quickly with friendly, no-obligation advice.
          </ContactSubheading>

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
          <DetailHeading>Contact Details</DetailHeading>
          <DetailItem>Phone: 0113 805 5834</DetailItem>
          <DetailItem>Emergency: 0797 644 5801</DetailItem>
          <DetailItem>Email: info@yorkshireroofing.co.uk</DetailItem>
          <DetailItem>Areas: Leeds and surrounding West Yorkshire</DetailItem>
        </ContactDetails>
      </ContactContainer>
    </ContactSection>
  );
};

export default HomeContact;
