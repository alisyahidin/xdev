import { ComponentProps } from 'react';
import { TOptionsEvents } from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react'
import clsx from 'clsx';

interface SliderProps extends ComponentProps<'div'> {
  options?: TOptionsEvents
}

const Slider: React.FC<SliderProps> = ({
  className,
  children,
  options
}) => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slidesPerView: 2,
    ...options
  })

  return (
    <div
      ref={sliderRef as React.LegacyRef<HTMLDivElement>}
      className={clsx(['keen-slider', className])}
    >
      {children}
    </div>
  );
};

export default Slider;