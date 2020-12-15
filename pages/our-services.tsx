import React from 'react';
import Head from 'next/head';
import useSWR from 'swr'
import Section from 'components/Section';
import Footer from 'components/Footer';
import clsx from 'clsx';
import fetchQuery from 'lib/fetchQuery';

const query = `
  query MyQuery {
    page(idType: URI, id: "our-services") {
      ourservice {
        services {
          title
          image {
            sourceUrl
          }
          description
          category
        }
      }
    }
  }`

export const getServerSideProps = async () => {
  const { data: { page } } = await fetchQuery(query)
  return { props : { data: page } }
}

type Service = {
  title: string,
  image: {
    sourceUrl: string
  },
  description: string,
  category: string
}
interface OurServicesProps {
  data: {
    ourservice: {
      services: Service[]
    }
  }
}

const OurServices: React.FC<OurServicesProps> = ({ data: initialData }) => {
  const { data } = useSWR(query, gqlQuery => fetchQuery(gqlQuery).then(res => res?.data?.page), { initialData })

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
        <h1 className="text-4xl sm:text-6xl font-bold sm:whitespace-pre-line my-32">
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
          <p className="sm:whitespace-pre-line mr-10">
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
        <h2 className="text-3xl sm:text-5xl font-bold mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-5 gap-10 md:gap-24 lg:gap-56">
          {data.ourservice.services.map((service: Service, index: number) => {
            const isEven = (index + 1) % 2 === 0
            const rowStarts = [
              'sm:row-start-1',
              'sm:row-start-2',
              'sm:row-start-3',
              'sm:row-start-4',
            ]
            return (
              <div
                key={index}
                className={clsx([
                  'sm:row-span-2 flex flex-col items-start min-h-full',
                  rowStarts[index],
                  isEven ? 'sm:col-start-2 sm:items-end sm:text-right' : 'col-start-1'
                ])}
              >
                <img
                  className="mb-8 w-full sm:width-420 h-72 sm:height-640 object-cover"
                  src={service.image.sourceUrl}
                  alt={service.title}
                />
                <h3
                  className={clsx([
                    "title-left text-2xl sm:text-3xl font-bold mb-4",
                    isEven && 'sm:title-right'
                  ])}
                >
                  {service.title}
                </h3>
                <p className="lg:whitespace-pre-line mb-4">
                  {service.description}
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