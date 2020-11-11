import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import Arrow from 'components/Arrow'
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: <h2 style={{ marginTop: -22 }} className="absolute text-3xl font-bold leading-9 ml-4">Product <br/> Development</h2>,
    alt: 'Product Development',
    image: '/images/service1.png',
  },
  {
    title: <h2 style={{ marginTop: -22 }} className="absolute text-3xl font-bold leading-9 ml-4">User <br/> Experience</h2>,
    alt: 'User Experience',
    image: '/images/service2.png',
  },
  {
    title: <h2 style={{ marginTop: -22 }} className="absolute text-3xl font-bold leading-9 ml-4">SEO <br/> Optimization</h2>,
    alt: 'SEO Optimization',
    image: '/images/service3.png',
  },
  {
    title: <h2 style={{ marginTop: -22 }} className="absolute text-3xl font-bold leading-9 ml-4">Co <br/> Creation</h2>,
    alt: 'Co Creation',
    image: '/images/service4.png',
  },
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
      <h1 className="text-5xl font-bold mb-16">
        Works
      </h1>
      <div className="flex w-full">
        <div className="flex-1 py-8">
          <h2 className="text-3xl mb-8">We build great business</h2>
          <p className="mb-8">
            Nisl condimentum id venenatis a. Nec tincidunt <br/>
            praesent semper feugiat nibh sed pulvinar proin <br/>
            gravida. Sollicitudin tempor id eu nisl nunc.
          </p>
          <p className="mb-8">
            Adipiscing diam donec adipiscing tristique risus <br/>
            nec feugiat in fermentum. Pretium vulputate sapien <br/>
            nec sagittis aliquam malesuada bibendum arcu vitae.
          </p>
          <p className="mb-8">
            Massa massa ultricies mi quis hendrerit dolor magna. <br/>
            Egestas dui id ornare arcu odio..
          </p>
        </div>
        <div className="flex-1 text-black">
          <div ref={ref} style={{ width: '150%' }} className="bg-white h-full p-8 rounded-tl-lg rounded-bl-lg">
            <h2 className="text-3xl mb-8">Our Clients</h2>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="flex items-center">
          <p className="text-lg font-bold">See more</p>
          <Arrow className="ml-4" size={40} circleSize={18} secondaryColor="#B72842" primaryColor="#FFFFFF" />
        </div>
      </div>
    </div>
  );
};

export default Works;