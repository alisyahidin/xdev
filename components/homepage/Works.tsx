import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer';
import { chunk } from 'lodash'
import Arrow from 'components/Arrow'
import { useShowMenu } from 'store/menu';
import useIsMobile from 'hooks/useIsMobile';

const Slider = dynamic(() => import('components/Slider'), { ssr: false });

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
  const isMobile = useIsMobile()

  const [clients, setClients] = useState<Array<string[]> | []>([]);
  const [slidesPerView, setSlidesPerView] = useState<number>(2);

  useEffect(() => {
    setMenuMode(inView ? 'light' : 'dark')
    setClients(chunk(images, isMobile ? 1 : 2))
    setSlidesPerView(isMobile ? 3 : 2)
  }, [inView])

  return (
    <div className="container h-full flex flex-col items-start justify-center my-16 text-white">
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
            <h3 className="text-2xl sm:text-3xl mb-8">Our Clients</h3>
            <Slider options={{ spacing: 20, slidesPerView }} className="flex-1 sm:w-4/6">
              {(clients as Array<string[]>).map((data: string[], index: number) => (
                <div className="keen-slider__slide flex flex-col justify-around items-center sm:items-start" key={index}>
                  {data.map((src: string, index: number) => <img className="" key={index} src={src} alt={`${index}`} />)}
                </div>
              ))}
            </Slider>
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