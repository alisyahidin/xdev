import React, { ComponentProps } from 'react';

interface ArrowProps extends ComponentProps<'svg'> {
  size?: number,
  circleSize?: number,
  primaryColor?: string,
  secondaryColor?: string,
}

const Arrow: React.FC<ArrowProps> = ({
  size = 49,
  circleSize = 24.5,
  primaryColor = '#EB5757',
  secondaryColor = '#FFFFFF',
  ...props
}) => {
  return (
    <svg {...props} height={size} viewBox="0 0 72 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse fill={primaryColor} cx="47.3286" cy="24.5" rx={circleSize} ry={circleSize} />
      <path fill={primaryColor} d="M52.5672 25.7071C52.9578 25.3166 52.9578 24.6834 52.5672 24.2929L46.2033 17.9289C45.8128 17.5384 45.1796 17.5384 44.7891 17.9289C44.3985 18.3195 44.3985 18.9526 44.7891 19.3431L50.4459 25L44.7891 30.6569C44.3985 31.0474 44.3985 31.6805 44.7891 32.0711C45.1796 32.4616 45.8128 32.4616 46.2033 32.0711L52.5672 25.7071ZM0 26H51.8601V24H0V26Z" />
      <path fill={secondaryColor} d="M52.5671 25.7071C52.9577 25.3166 52.9577 24.6834 52.5671 24.2929L46.2032 17.9289C45.8126 17.5384 45.1795 17.5384 44.789 17.9289C44.3984 18.3195 44.3984 18.9526 44.789 19.3431L50.4458 25L44.789 30.6569C44.3984 31.0474 44.3984 31.6805 44.789 32.0711C45.1795 32.4616 45.8126 32.4616 46.2032 32.0711L52.5671 25.7071ZM22.6572 26L51.86 26V24L22.6572 24V26Z" />
    </svg>
  );
};

export default Arrow;