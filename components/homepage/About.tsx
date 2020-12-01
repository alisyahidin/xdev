import React from 'react';
import Link from 'next/link'
import Arrow from 'components/Arrow'

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="container h-full flex flex-col items-start justify-center">
      <h2 className="text-3xl sm:text-5xl font-bold mb-16">
        About
      </h2>
      <div className="flex flex-col sm:flex-row w-full">
        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 sm:whitespace-pre-line">
            {`We help businesses
            all around the world
            to grow.`}
          </h3>
        </div>
        <div className="flex-1 text-black">
          <p className="mb-6 sm:mb-8 sm:whitespace-pre-line">
            {`Based on Jakarta,
            xDev has become one of the best
            quality Digital Agency in Indonesia.`}
          </p>
          <p className="mb-6 sm:mb-8 sm:whitespace-pre-line">
            {`Our focus has always been to create
            enjoyable, intuitive, engaging and
            remarkable experience for people.`}
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