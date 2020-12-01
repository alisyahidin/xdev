import React, { useEffect } from 'react';
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import Arrow from 'components/Arrow'
import { useInView } from 'react-intersection-observer';

const clients = [
  '/images/work-logo-1.png',
  '/images/work-logo-2.png',
  '/images/work-logo-3.png',
]

interface WorksProps {}

const Works: React.FC<WorksProps> = () => {
  const dispatch = useDispatch();
  const { ref, inView } = useInView({ threshold: 0.72 })

  useEffect(() => {
    dispatch({ type: 'UPDATE_FLOAT_MENU_MODE', mode: inView ? 'light' : 'dark' })
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
            <div className="flex-1 flex flex-wrap items-center sm:w-4/6">
              {clients.map((src, index) => (
                <img className="sm:h-16 mr-12" src={src} alt={`${index}`} key={index} />
              ))}
            </div>
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