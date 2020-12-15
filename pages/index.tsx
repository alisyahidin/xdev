import Head from 'next/head';
import useSwr from 'swr';
import Section from 'components/Section';
import OurServices from 'components/homepage/OurServices';
import Works from 'components/homepage/Works';
import About from 'components/homepage/About';
import Footer from 'components/Footer';
import Hero from 'components/homepage/Hero';
import fetchQuery from 'lib/fetchQuery';

const query = `
  query MyQuery {
    pages {
      nodes {
        slug
        homepage {
          quote
          hero {
            title
            image {
              sourceUrl
            }
          }
        }
        ourservice {
          services {
            category
            description
            title
            image {
              sourceUrl
            }
          }
        }
        works {
          clients {
            title
            category
            description
            logo {
              sourceUrl
            }
            image {
              sourceUrl
            }
          }
        }
      }
    }
  }`

export const getServerSideProps = async () => {
  const { data } = await fetchQuery(query)
  return { props : { data } }
}

interface HomeProps {
  data: any
}

const Home: React.FC<HomeProps> = ({ data: initialData }) => {
  const { data } = useSwr(query, gqlQuery => fetchQuery(gqlQuery).then(res => res?.data), { initialData })
  const homepage = data?.pages?.nodes.find(({ slug }) => slug === 'homepage')
  const ourServices = data?.pages?.nodes.find(({ slug }) => slug === 'our-services')
  const works = data?.pages?.nodes.find(({ slug }) => slug === 'works')

  return (<>
    <Head>
      <title>xDev</title>
    </Head>
    <Section
      id="home"
      className="h-screen relative"
    >
      <Hero data={homepage.homepage?.hero} />
    </Section>
    <Section
      id="services"
      className="min-h-screen flex items-center"
      light
    >
      <OurServices data={ourServices.ourservice.services} />
    </Section>
    <Section
      id="works"
      className="min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundColor: '#111111'
      }}
    >
      <Works data={works.works.clients} />
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
          {homepage.homepage?.quote}
        </h1>
      </div>
    </Section>
    <Footer />
  </>)
}

export default Home