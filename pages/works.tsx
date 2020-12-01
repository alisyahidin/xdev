import React from 'react';
import Head from 'next/head';
import Section from 'components/Section';
import clsx from 'clsx';
import Footer from 'components/Footer';

const data = [
  {
    title: 'Hakuhodo : H3',
    detail: `H:Three is Hakuhodo’s fifth agency in Indonesia.
      Within its first year, H:Three has managed to acquire
      several local and International clients.`,
    category: 'UI/UX Design. Website.',
    logo: '/images/work-logo-1.png',
    preview: '/images/work-1.png'
  },
  {
    title: 'InterBIO',
    detail: `interBIO is the leading identity management
      biometric software solutions company.`,
    category: 'UI/UX Design. Website.',
    logo: '/images/work-logo-2.png',
    preview: '/images/work-2.png'
  },
  {
    title: 'WAN Solution',
    detail: `WAN Solutions was a system integrator company which has
      extensive exposures to the technology driven solutions.`,
    category: 'UI/UX Design. Website.',
    logo: '/images/work-logo-3.png',
    preview: '/images/work-3.png'
  },
]

const testimonials = [
  {
    name: 'Jhon Doe',
    position: 'Head of Sukamulya region',
    company: 'Government of Indonesia',
    text: `An innovative, state of the art, grid computing
      based enterprise platform that supports all your
      current and future identity management needs`,
  }
]

interface WorksProps {}

const Works: React.FC<WorksProps> = () => {
  return (<>
    <Head>
      <title>Works - xDev</title>
    </Head>
    <Section
      className="h-screen"
      style={{
        backgroundColor: '#111111'
      }}
    >
      <div className="container h-full flex items-center">
        <h1 className="text-white text-4xl sm:text-6xl font-bold">
          We do amazing <br/>
          things with amazing <br/>
          People.
        </h1>
      </div>
    </Section>
    <Section
      className="min-h-screen"
      style={{
        backgroundColor: '#111111'
      }}
    >
      <div className="container h-full py-16 text-white">
        <h2 className="text-3xl sm:text-5xl font-bold mb-12">
          Works
        </h2>
        {data.map((work, index) => {
          const isEven = (index + 1) % 2 === 0
          return (
            <div className={clsx(["flex flex-col sm:flex-row mb-20", isEven && 'justify-end'])} key={index}>
              <div className="relative">
                <img
                  className="w-full"
                  src={work.preview}
                  alt={work.title}
                />
                <div
                  className={clsx(["absolute flex justify-center items-center bg-white bottom-0 right-0", isEven ? 'lg:right-full' : 'lg:left-full'])}
                  style={{ width: 120, height: 120 }}
                >
                  <img
                    className="max-w-full max-h-full"
                    src={work.logo}
                    alt={work.title}
                  />
                </div>
              </div>
              <div className={clsx(["sm:px-10 py-6", isEven && 'sm:order-first sm:text-right'])}>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{work.title}</h3>
                <p className="whitespace-pre-line leading-7 mb-4">{work.detail}</p>
                <p className="mb-4" style={{ color: '#AFAAAA' }}>{work.category}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
    <Section
      style={{
        backgroundColor: '#111111'
      }}
    >
      <div className="container flex flex-col sm:flex-row h-full py-16 text-white">
        <div className="flex-1 flex justify-between items-start mb-8 sm:mb-0">
          <h2 className="text-3xl sm:text-5xl font-bold">
            Testimonials
          </h2>
          <svg className="sm:mt-4" width="67" height="40" viewBox="0 0 67 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#EB5757" d="M2.92548 40C2.10429 40 1.38575 39.6899 0.769862 39.0698C0.256621 38.4496 0 37.7261 0 36.8992C0 36.2791 0.102648 35.7106 0.307945 35.1938L12.1638 4.34108C12.7797 2.99741 13.4982 1.96382 14.3194 1.24031C15.2433 0.413438 16.475 0 18.0148 0H29.2548C30.1786 0 30.8971 0.361759 31.4104 1.08528C32.0263 1.80879 32.2829 2.63566 32.1802 3.56589L27.4071 34.5736C27.0991 36.124 26.4833 37.416 25.5594 38.4496C24.6356 39.4832 23.3525 40 21.7101 40H2.92548ZM37.7232 40C36.9021 40 36.1835 39.6899 35.5676 39.0698C35.0544 38.4496 34.7978 37.7261 34.7978 36.8992C34.7978 36.2791 34.9004 35.7106 35.1057 35.1938L46.9616 4.34108C47.5775 2.99741 48.296 1.96382 49.1172 1.24031C50.041 0.413438 51.2728 0 52.8125 0H64.0525C64.9764 0 65.6949 0.361759 66.2081 1.08528C66.824 1.80879 67.0807 2.63566 66.978 3.56589L62.2049 34.5736C61.8969 36.124 61.281 37.416 60.3572 38.4496C59.4334 39.4832 58.1503 40 56.5079 40H37.7232Z" />
          </svg>
        </div>
        <div className="flex-1 sm:p-4">
          {testimonials.map((testi, index) => (
            <div className="sm:mx-6" key={index}>
              <p className="mb-3 text-lg sm:whitespace-pre-line">{testi.text}</p>
              <p>
                <strong>{testi.name}</strong>, {testi.position}
              </p>
              <span className="text-sm">{testi.company}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
    <Footer />
  </>);
};

export default Works;