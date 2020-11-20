import React from 'react';
import Head from 'next/head';

interface AboutProps {}
import Section from 'components/Section';

const About: React.FC<AboutProps> = () => {
  return (<>
    <Head>
      <title>About - xDev</title>
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
  </>);
};

export default About;