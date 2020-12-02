import React, { ComponentProps, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useShowMenu } from 'store/menu';

interface SectionProps extends ComponentProps<'section'> {
  light?: boolean
}

const Section: React.FC<SectionProps> = ({ light = false, ...props }) => {
  const { setMenuMode } = useShowMenu()
  const { ref, inView, entry } = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (inView) setMenuMode(entry?.target.getAttribute('data-bg-color'))
  }, [entry, inView]);

  return <section ref={ref} data-bg-color={light ? 'light' : 'dark'} {...props} />
};

export default Section;