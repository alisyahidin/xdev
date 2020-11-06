import { AppProps } from 'next/app'
import 'styles/index.scss'
import Navbar from 'components/Navbar'
import Menu from 'components/Menu'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Navbar />
    <Menu />
    <Component {...pageProps} />
  </>
}

export default MyApp
