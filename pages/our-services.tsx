import React from 'react';
import Head from 'next/head';
import Section from 'components/Section';
import Footer from 'components/Footer';
import clsx from 'clsx';

export const ourServices = [
  {
    title: 'Product Development',
    detail: `Nisl condimentum id venenatis a. Nec tincidunt
      raesent semper feugiat nibh sed pulvinar proin
      gravida. Sollicitudin tempor id eu nisl nunc.`,
    category: 'UI/UX Design. Website',
    image: '/images/service-1.png',
  },
  {
    title: 'User Experience',
    detail: `Nisl condimentum id venenatis a. Nec tincidunt
      raesent semper feugiat nibh sed pulvinar proin
      gravida. Sollicitudin tempor id eu nisl nunc.`,
    category: 'UI/UX Design. Website',
    image: '/images/service-2.png',
  },
  {
    title: 'SEO Optimization',
    detail: `Nisl condimentum id venenatis a. Nec tincidunt
      raesent semper feugiat nibh sed pulvinar proin
      gravida. Sollicitudin tempor id eu nisl nunc.`,
    category: 'UI/UX Design. Website',
    image: '/images/service-3.png',
  },
  {
    title: 'Co Creation',
    detail: `Nisl condimentum id venenatis a. Nec tincidunt
      raesent semper feugiat nibh sed pulvinar proin
      gravida. Sollicitudin tempor id eu nisl nunc.`,
    category: 'UI/UX Design. Website',
    image: '/images/service-4.png',
  },
]

interface OurServicesProps {}

const OurServices: React.FC<OurServicesProps> = () => {
  return (<>
    <Head>
      <title>Our Services - xDev</title>
    </Head>
    <Section
      className="min-h-screen"
      style={{
        backgroundColor: '#111111'
      }}
    >
      <div className="container h-full py-16 text-white">
        <h1 className="text-6xl font-bold whitespace-pre-line my-32">
          {`Elevating Brands
          through innovation in
          Digital Transformation.`}
        </h1>
        <img
          className="my-20"
          style={{ transform: 'translateX(-20%)' }}
          src="/images/our-service-hero.png"
          alt="Our Service Hero"
        />
        <div className="flex w-full justify-end">
          <p className="whitespace-pre-line mr-10">
            {`Nisl condimentum id venenatis a. Nec tincidunt
            praesent semper feugiat nibh sed pulvinar proin
            gravida. Sollicitudin tempor id eu nisl nunc.`}
          </p>
        </div>
      </div>
    </Section>
    <Section
      className="min-h-screen"
      style={{
        backgroundColor: '#111111'
      }}
    >
      <div className="container h-full py-16 text-white">
        <h2 className="text-5xl font-bold mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-2 auto-rows-auto gap-56">
          {ourServices.map((service, index) => {
            const isEven = (index + 1) % 2 === 0
            return (
              <div
                key={index}
                className={clsx([
                  'row-span-2 flex flex-col min-h-full',
                  `row-start-${index + 1}`,
                  isEven ? 'col-start-2 items-end text-right' : 'col-start-1'
                ])}
              >
                <img
                  className="mb-8"
                  style={{ height: 640, width: 420, objectFit: 'cover' }}
                  src={service.image}
                  alt={service.title}
                />
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="whitespace-pre-line mb-4">
                  {service.detail}
                </p>
                <p className="mb-4" style={{ color: '#AFAAAA' }}>{service.category}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
    <Footer />
  </>);
};

export default OurServices;