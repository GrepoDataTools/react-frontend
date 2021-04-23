import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CardContainer, CardIconContainer, CardSubtitle, CardTitle } from './AdvantageCard.styled';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface AdvantageCardProps {
  /**
   * Uses icons from Font Awesome.
   */
  icon?: IconProp;
  /**
   * Can be only string.
   */
  title: string;
  /**
   * Can be either string or ReactNode.
   */
  subtitle?: string | React.ReactNode;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ icon, title, subtitle }) => (
  <CardContainer>
    {icon && (
      <CardIconContainer>
        <FontAwesomeIcon icon={icon} />
      </CardIconContainer>
    )}
    <CardTitle>{title}</CardTitle>
    {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
  </CardContainer>
);

export default AdvantageCard;
