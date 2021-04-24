import React from 'react';
import { Container, CtaButton, ImageContainer, Title, Image, CtaButtonContainer } from './FeatureCard.styled';

interface FeatureCardProps {
  image?: string;
  title: string;
  ctaText?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, ctaText }) => (
  <Container>
    {image && (
      <ImageContainer>
        <Image style={{ maxHeight: 300, width: '100%' }} src={image} alt={title} />
      </ImageContainer>
    )}
    <Title>{title}</Title>
    {ctaText && (
      <CtaButtonContainer>
        <CtaButton color="primary" variant="outlined" disableElevation>
          {ctaText}
        </CtaButton>
      </CtaButtonContainer>
    )}
  </Container>
);

export default FeatureCard;
