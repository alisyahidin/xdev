import React from 'react';
import Link from 'next/link'
import Arrow from 'components/Arrow'

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="container h-full flex flex-col items-start justify-center my-16">
      <h1 className="text-5xl font-bold mb-16">
        About
      </h1>
      <div className="flex w-full">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8">
            We help businesses <br/>
            all around the world <br/>
            to grow. <br/>
          </h2>
        </div>
        <div className="flex-1 text-black">
          <p className="mb-8">
            Based on Jakarta, <br/>
            xDev has become one of the best <br/>
            quality Digital Agency in Indonesia.
          </p>
          <p className="mb-8">
            Our focus has always been to create <br/>
            enjoyable, intuitive, engaging and <br/>
            remarkable experience for people.
          </p>
          <Link href="/about" passHref>
            <a className="flex items-center">
              <p className="text-lg font-bold">See more</p>
              <Arrow className="ml-4" size={35} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;