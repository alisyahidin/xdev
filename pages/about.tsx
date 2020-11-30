import React from 'react';
import Head from 'next/head';
import Section from 'components/Section';
import Arrow from 'components/Arrow';
import Footer from 'components/Footer';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (<>
    <Head>
      <title>About - xDev</title>
    </Head>
    <Section
      className="min-h-screen overflow-hidden"
      style={{
        backgroundColor: '#111111'
      }}
    >
      <div className="container h-full py-16 text-white">
        <h1 className="text-4xl sm:text-6xl font-bold my-32">
          Hello !
        </h1>
        <div className="relative flex items-center mb-40">
          <h2 style={{ top: -30 }} className="absolute whitespace-pre-line text-4xl font-bold z-10">
            {`We solve digital problems
              with an outstanding
              creative flare`}
          </h2>

          <img style={{ transform: 'translate(-20%)' }} className="flex-1" src="/images/about-1.png" alt="About Image"/>
          <p className="text-lg flex-1 whitespace-pre-line text-right">
            {`Based on Jakarta,
              xDev has become one of the best
              quality Digital Agency in Indonesia.

              Our focus has always been to create
              enjoyable, intuitive, engaging and
              remarkable experience for people.`}
          </p>
        </div>
        <div className="flex items-center mb-40">
          <img style={{ transform: 'translate(20%)' }} className="flex-1 order-last" src="/images/about-2.png" alt="About Image"/>
          <div className="flex-1">
            <p className="text-lg whitespace-pre-line mb-8">
              {`We’ve worked incredibly hard to build a
              talented, industry leading team of
              professionals. With a team of creative,
              strategist, business and development
              specialists, we consistently strive to be at
              the forefront of new media technology.`}
            </p>
            <div className="flex">
              <p className="text-lg font-bold">What we do</p>
              <Arrow className="ml-4" size={35} secondaryColor="#B72842" primaryColor="#FFFFFF" />
            </div>
          </div>
        </div>
        <div className="flex mb-40">
          <h1 className="text-white text-4xl sm:text-6xl font-bold sm:whitespace-pre-line">
            {`Elevating Brands
            through innovation in
            Digital Transformation.`}
          </h1>
        </div>
      </div>
    </Section>
    <Footer bg="bg-footer-2.png" />
  </>);
};

export default About;