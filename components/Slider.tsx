import React, { ReactElement, Children, useEffect, ComponentProps } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion'
import clsx from 'clsx';

type Direction = 0 | 1 | -1

export interface SliderAction {
  prev: () => void
  next: () => void
}

interface SliderProps extends ComponentProps<'div'> {
  children: ReactElement[] | ReactElement,
  slidesToShow?: number,
  sliderRef?: any
}

const Slider: React.FC<SliderProps> = ({
  children,
  slidesToShow = 1,
  sliderRef = null,
  className
}) => {
  const isAnimating = useMotionValue<boolean>(false)
  const x = useMotionValue<string>('-100%')
  const pagination = useMotionValue<[number, number]>([slidesToShow, 0])
  const paginate = (newDirection: Direction) => {
    if (!isAnimating.get()) pagination.set([pagination.get()[0] + newDirection, newDirection])
  }

  const childrens = Children.toArray(children)
  useEffect(() => {
    if (sliderRef !== null) {
      sliderRef.current.prev = () => paginate(-1)
      sliderRef.current.next = () => paginate(1)
    }

    return pagination.onChange(([page, direction]) => {
      isAnimating.set(true)
      const shouldStartAnimation = pagination.get()[0] < childrens.length + 2
      const pageOdd = page % (childrens.length + 2)
      const newX = `${-Math.abs(direction * pageOdd * (100 / slidesToShow))}%`
      const control = shouldStartAnimation && animate(x, newX, {
        duration: 0.5,
        onComplete: () => {
          if (pageOdd === childrens.length + 1) {
            x.set(`${-(100 / slidesToShow)}%`)
            pagination.set([1, direction])
          }
          if (pageOdd === 0) {
            x.set(`${-childrens.length * (100 / slidesToShow)}%`)
            pagination.set([childrens.length, direction])
          }
          isAnimating.set(false)
        }
      })

      return control.stop
    })
  }, [])

  return (
    <div className={clsx(["overflow-hidden", className])}>
      <motion.div ref={sliderRef} style={{ x }} className="flex h-full">
        {[...childrens.slice(childrens.length - slidesToShow), ...childrens, ...childrens.slice(0, slidesToShow)].map((child: ReactElement, index: number) => (
          <div key={index} style={{ width: `${100 / slidesToShow}%` }} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;