import React from 'react';
import Head from 'next/head';
import Section from 'components/Section';
import OurServices from 'components/homepage/OurServices';
import Works from 'components/homepage/Works';
import About from 'components/homepage/About';

const Home: React.FC<{}> = () => {
  return (<>
    <Head>
      <title>xDev</title>
    </Head>
    <Section
      className="h-screen"
      style={{
        backgroundImage: 'url(/images/bg-head.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container h-full flex items-center">
        <h1 className="text-white text-6xl font-bold">
          We Move <br/>
          Digital Industry <br/>
          Forward <br/>
        </h1>
      </div>
    </Section>
    <Section
      className="min-h-screen flex items-center"
      light
    >
      <OurServices />
    </Section>
    <Section
      className="min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundColor: '#111111'
      }}
    >
      <Works />
    </Section>
    <Section
      className="h-screen"
      light
    >
      <About />
    </Section>
    <Section
      className="h-screen"
      style={{
        backgroundColor: '#111111'
      }}
    >
      <div className="container h-full flex items-center">
        <h1 className="text-white text-6xl font-bold">
          Elevating Brands <br/>
          through innovation in <br/>
          Digital Transformation.
        </h1>
      </div>
    </Section>
    <Section
      className="h-screen"
      style={{
        backgroundImage: 'url(/images/bg-footer.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container h-full flex flex-col justify-between">
        <div className="flex-1 flex items-center">
          <h1 className="text-white text-6xl font-bold">
            Hello@xdevels.com
          </h1>
        </div>
        <div className="flex items-end justify-between py-6">
          <div style={{ color: '#f2f2f2' }}>
            <p className="text-xl font-bold mb-2">Contact us</p>
            <span className="mr-12">+62 817 614262</span>
            <span>Hello@xdevels.com</span>
          </div>
          <p style={{ color: '#BDBDBD' }}>© 2020 xdevels.</p>
        </div>
      </div>
    </Section>
  </>)
}

export default Home