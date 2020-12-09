import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import { useInView } from 'react-intersection-observer';
import { chunk } from 'lodash'
import Arrow from 'components/Arrow'
import { useShowMenu } from 'store/menu';
import useIsMobile from 'hooks/useIsMobile';
import Slider, { SliderAction } from 'components/Slider';

const images = [
  '/images/work-logo-1.png',
  '/images/work-logo-2.png',
  '/images/work-logo-3.png',
  '/images/work-logo-1.png',
  '/images/work-logo-2.png',
  '/images/work-logo-3.png',
]

interface WorksProps {}

const Works: React.FC<WorksProps> = () => {
  const { setMenuMode } = useShowMenu()
  const { ref, inView } = useInView({ threshold: 0.72 })
  const { ref: ourWorkRef, inView: ourWorkInview } = useInView({ threshold: 0.1 })
  const isMobile = useIsMobile()

  const slider = useRef<SliderAction>(null)
  const timer = useRef(null)
  const [paused, setPaused] = useState<boolean>(false);
  const [clients, setClients] = useState<Array<string[]> | []>([]);

  useEffect(() => {
    setClients(chunk(images, isMobile ? 1 : 2))
  }, [isMobile])

  useEffect(() => {
    setMenuMode(inView ? 'light' : 'dark')
    setPaused(!ourWorkInview)
  }, [inView, ourWorkInview])

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!paused) slider.current?.next()
    }, 2000)

    return () => clearInterval(timer.current)
  }, [paused, slider])

  return (
    <div ref={ourWorkRef}  className="container h-full flex flex-col items-start justify-center my-16 text-white">
      <h2 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-16">
        Works
      </h2>
      <div className="flex flex-col sm:flex-row w-full">
        <div className="flex-1 py-8">
          <h3 className="text-2xl sm:text-3xl mb-8">We build great business</h3>
          <p className="mb-8 sm:whitespace-pre-line">
            {`Nisl condimentum id venenatis a. Nec tincidunt
            praesent semper feugiat nibh sed pulvinar proin
            gravida. Sollicitudin tempor id eu nisl nunc.`}
          </p>
          <p className="mb-8 sm:whitespace-pre-line">
            {`Adipiscing diam donec adipiscing tristique risus
            nec feugiat in fermentum. Pretium vulputate sapien
            nec sagittis aliquam malesuada bibendum arcu vitae.`}
          </p>
          <p className="mb-8 sm:whitespace-pre-line">
            {`Massa massa ultricies mi quis hendrerit dolor magna.
            Egestas dui id ornare arcu odio..`}
          </p>
        </div>
        <div className="flex-1 text-black">
          <div ref={ref} className="flex flex-col sm:our-client bg-white h-full p-8 rounded-lg sm:rounded-tl-lg sm:rounded-bl-lg sm:rounded-rl-none sm:rounded-br-lg">
            <h3 className="text-2xl sm:text-3xl text-center sm:text-left mb-8">Our Clients</h3>
            {isMobile !== null && <Slider duration={1} sliderRef={slider} slidesToShow={isMobile ? 3 : 2} className="flex-1 h-full sm:w-4/6">
              {(clients as Array<string[]>).map((child: string[], index: number) => (
                <div
                  className="flex flex-col justify-around items-center sm:items-start h-full"
                  key={index}
                >
                  {child.map((src: string, index: number) => <img className="" key={index} src={src} alt={`${index}`} />)}
                </div>
              ))}
            </Slider>}
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Link href="/works" passHref>
          <a className="flex items-center">
            <p className="text-lg font-bold">See more</p>
            <Arrow className="ml-4" size={40} circleSize={18} secondaryColor="#B72842" primaryColor="#FFFFFF" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Works;