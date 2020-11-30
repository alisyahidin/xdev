import React from 'react';
import Head from 'next/head';
import Section from 'components/Section';
import OurServices from 'components/homepage/OurServices';
import Works from 'components/homepage/Works';
import About from 'components/homepage/About';
import Footer from 'components/Footer';

const Home: React.FC<{}> = () => {
  return (<>
    <Head>
      <title>xDev</title>
    </Head>
    <Section
      id="home"
      className="h-screen"
      style={{
        backgroundImage: 'url(/images/bg-head.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container h-full flex items-center">
        <h1 className="text-white text-4xl sm:text-6xl font-bold">
          We Move <br/>
          Digital Industry <br/>
          Forward <br/>
        </h1>
      </div>
    </Section>
    <Section
      id="services"
      className="min-h-screen flex items-center"
      light
    >
      <OurServices />
    </Section>
    <Section
      id="works"
      className="min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundColor: '#111111'
      }}
    >
      <Works />
    </Section>
    <Section
      id="about"
      className="h-screen"
      light
    >
      <About />
    </Section>
    <Section
      id="connect"
      className="h-screen"
      style={{
        backgroundColor: '#111111'
      }}
    >
      <div className="container h-full flex items-center">
        <h1 className="text-white text-4xl sm:text-6xl font-bold sm:whitespace-pre-line">
          {`Elevating Brands
          through innovation in
          Digital Transformation.`}
        </h1>
      </div>
    </Section>
    <Footer />
  </>)
}

export default Home