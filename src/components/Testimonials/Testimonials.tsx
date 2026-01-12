import React from 'react';
import styled from 'styled-components';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { colors } from '../../theme/colors';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  rating: number;
}

const TestimonialsSection = styled.section`
  background-color: #121212;
  padding: 5rem 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3.5rem 1.25rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${colors.lightText};
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: #1f2933;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
  position: relative;
`;

const QuoteIcon = styled.div`
  font-size: 2rem;
  color: ${colors.primary};
  opacity: 0.2;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin: 1.5rem 0;
  color: ${colors.text};
`;

const TestimonialAuthor = styled.div`
  font-weight: bold;
  color: ${colors.lightText};
`;

const Stars = styled.div`
  color: ${colors.primary};
  margin: 0.5rem 0;
`;

const testimonials = [
  {
    id: 1,
    text: "Yorkshire Roofing did an excellent job on our roof replacement. The team was professional, efficient, and left the site spotless.",
    author: "Sarah Johnson",
    rating: 5
  },
  {
    id: 2,
    text: "Quick response to our emergency roof repair. The service was top-notch and the pricing was very fair. Highly recommended!",
    author: "Michael Brown",
    rating: 5
  },
  {
    id: 3,
    text: "We've used Yorkshire Roofing for both our home and business properties. Consistent quality and excellent customer service every time.",
    author: "Emma Wilson",
    rating: 5
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <>
      {Array(5).fill(0).map((_, i) => (
        <FaStar key={i} style={{ color: i < rating ? colors.primary : '#ddd' }} />
      ))}
    </>
  );
};

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Yorkshire Roofing did an excellent job on our roof replacement. The team was professional, efficient, and left the site spotless.",
      author: "Sarah Johnson",
      rating: 5
    },
    {
      id: 2,
      text: "Quick response to our emergency roof repair. The service was top-notch and the pricing was very fair. Highly recommended!",
      author: "Michael Brown",
      rating: 5
    },
    {
      id: 3,
      text: "We've used Yorkshire Roofing for both our home and business properties. Consistent quality and excellent customer service every time.",
      author: "Emma Wilson",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar key={i} style={{ color: i < rating ? colors.primary : '#ddd' }} />
    ));
  };

  return (
    <TestimonialsSection>
      <SectionTitle>What Our Customers Say</SectionTitle>
      <TestimonialsContainer>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <QuoteIcon>
              <FaQuoteLeft size={24} />
            </QuoteIcon>
            <TestimonialText>"{testimonial.text}"</TestimonialText>
            <Stars><StarRating rating={testimonial.rating} /></Stars>
            <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
          </TestimonialCard>
        ))}
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;
