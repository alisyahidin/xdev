import React from 'react';
import Arrow from 'components/Arrow'

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

interface OurServicesProps {}

const OurServices: React.FC<OurServicesProps> = () => {
  return (
    <div className="container h-full flex flex-col items-start justify-center my-16">
      <h1 className="text-5xl font-bold mb-16">
        Our Services
      </h1>
      <ul className="w-full grid sm:grid-cols-4 grid-cols-2 gap-16 mb-16">
        {services.map((service, index) => (
          <li key={index}>
            <div className="relative">
              <img
                className="rounded-lg w-full shadow-md"
                style={{
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0px 0px 60px rgba(0, 0, 0, 0.06)"
                }}
                src={service.image}
                alt={service.alt}
              />
              <div style={{ boxShadow: 'rgb(255, 255, 255) 0px -60px 60px -30px inset' }} className="absolute w-full h-full top-0 left-0 rounded-lg" />
            </div>
            {service.title}
          </li>
        ))}
      </ul>
      <div className="flex w-full mt-12">
        <div className="w-8/12">
          <h2 style={{ color: '#333' }} className="text-3xl mb-4">
            Elevating Brands <br/> through innovation in <span style={{ color: '#EB5757' }}> Digital Transformation.</span>
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt labore et dolore magna aliqua.</p>
        </div>
        <div className="w-4/12 flex justify-center items-center">
          <p className="text-lg font-bold">What we do</p>
          <Arrow className="ml-4" size={40} />
        </div>
      </div>
    </div>
  );
};

export default OurServices;