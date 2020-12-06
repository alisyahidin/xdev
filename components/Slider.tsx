import { ComponentProps, useEffect, useRef, useState } from 'react';
import { TOptionsEvents } from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react'
import clsx from 'clsx';

interface Options extends TOptionsEvents {
  delay?: number
}

interface SliderProps extends ComponentProps<'div'> {
  options?: Options,
  controller?: any
}

const Slider: React.FC<SliderProps> = ({
  className,
  children,
  options,
  controller = null
}) => {
  const [pause, setPause] = useState(false)
  const timer = useRef(null)
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slidesPerView: 2,
    duration: 1000,
    ...options,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  useEffect(() => {
    (controller && slider !== null) && controller(slider)
  }, [slider])

  useEffect(() => {
    sliderRef.current?.addEventListener("mouseover", () => setPause(true))
    sliderRef.current?.addEventListener("mouseout", () => setPause(false))

    return () => {
      sliderRef.current?.removeEventListener('mouseover', () => setPause(true))
      sliderRef.current?.removeEventListener('mouseout', () => setPause(false))
    }
  }, [])

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) slider.next()
    }, options.delay ?? 2000)

    return () => clearInterval(timer.current)
  }, [pause, slider])

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