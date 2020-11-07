import React, { ComponentProps } from 'react';

interface SectionProps extends ComponentProps<'section'> {
  light?: boolean
}

const Section: React.FC<SectionProps> = ({ light = false, ...props }) => (
  <section data-bg-color={light ? 'light' : 'dark'} {...props} />
);

export default Section;