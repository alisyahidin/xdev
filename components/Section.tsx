import React, { ComponentProps, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useInView } from 'react-intersection-observer';

interface SectionProps extends ComponentProps<'section'> {
  light?: boolean
}

const Section: React.FC<SectionProps> = ({ light = false, ...props }) => {
  const dispatch = useDispatch();
  const { ref, inView, entry } = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (inView) dispatch({ type: 'UPDATE_FLOAT_MENU_MODE', mode: entry?.target.getAttribute('data-bg-color') })
  }, [entry, inView]);

  return <section ref={ref} data-bg-color={light ? 'light' : 'dark'} {...props} />
};

export default Section;