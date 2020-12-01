import React, { useState } from 'react';
import Link from 'next/link'
import Arrow from 'components/Arrow'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { ourServices } from 'pages/our-services'

interface OurServicesProps {}

const OurServices: React.FC<OurServicesProps> = () => {
  return (
    <div className="container h-full flex flex-col items-start justify-center my-16">
      <h2 className="text-3xl sm:text-5xl font-bold mb-16">
        Our Services
      </h2>
      <Services />
      <div className="flex flex-col sm:flex-row sm:items-center w-full mt-12">
        <div className="sm:w-8/12">
          <h3 style={{ color: '#333' }} className="text-2xl sm:text-3xl mb-4">
            Elevating Brands <br className="hidden sm:block"/> through innovation in <span style={{ color: '#EB5757' }}> Digital Transformation.</span>
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt labore et dolore magna aliqua.</p>
        </div>
        <Link href="/our-services" passHref>
          <a className="sm:w-4/12 flex sm:justify-center items-center mt-4 sm:mt-0">
            <p className="text-lg font-bold">What we do</p>
            <Arrow className="ml-4" size={35} />
          </a>
        </Link>
      </div>
    </div>
  );
};

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <AnimateSharedLayout type="crossfade">
      <div className="w-full grid sm:grid-cols-4 grid-cols-2 gap-8 sm:gap-16 mb-8 sm:mb-16">
        {ourServices.map(({ image, title }, index) => (
          <div key={index} className="block cursor-pointer z-0">
            <motion.div layoutId={`service-container-${index}`} onClick={() => setActiveIndex(index)} className="block">
              <motion.img
                layoutId={`image-${index}`}
                style={{ borderRadius: 5 }}
                className="w-full"
                src={image}
                alt={title}
              />
              {/* <div
                className="absolute w-full h-full top-0 left-0 rounded-md"
                style={{ boxShadow: 'rgb(255, 255, 255) 0px -40px 60px -30px inset' }}
              /> */}
            </motion.div>
            <motion.h3
              animate={{
                opacity: activeIndex === index ? 0 : 1,
                y: activeIndex === index ? 30 : 0,
                transition: {
                  duration: 0.1,
                  delay: activeIndex === index ? 0 : 0.3
                }
              }}
              style={{ marginTop: -30, opacity: 1, wordWrap: 'break-word' }}
              className="inline-block text-2xl font-bold leading-7 ml-4"
            >
              {title}
            </motion.h3>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            className="fixed flex items-center justify-center w-full h-full top-0 left-0 z-50"
          >
            <motion.div
              layoutId={`service-container-${activeIndex}`}
              className="flex flex-col md:flex-row w-11/12 sm:w-4/5 items-center bg-white p-10"
            >
              <motion.img
                layoutId={`image-${activeIndex}`}
                animate={{ borderRadius: 0 }}
                className="lg:h-96"
                src={ourServices[activeIndex].image}
                alt={ourServices[activeIndex].title}
              />
              <div className="flex-1 my-8 md:my-0 text-center md:text-left md:ml-10">
                <h3
                  className="title-left text-2xl font-bold md:leading-7 mb-4"
                >
                  {ourServices[activeIndex].title}
                </h3>
                <p className="sm:whitespace-pre-line mb-4">
                  {ourServices[activeIndex].detail}
                </p>
                <p>
                  {ourServices[activeIndex].category}
                </p>
              </div>
              <svg onClick={() => setActiveIndex(null)} className="cursor-pointer" height="38px" viewBox="0 0 9.9375 8.1761" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(-100.03 -144.41)">
                  <g fill="none" stroke="#4F4F4F" strokeWidth="0.8" strokeDasharray="8">
                    <path d="m102.19 145.69 5.6127 5.6127" />
                    <path d="m102.19 151.31 5.6407-5.612" />
                  </g>
                </g>
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default OurServices;