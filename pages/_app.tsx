import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { start as startLoading, done as stopLoading, configure } from 'nprogress'
import Navbar from 'components/Navbar'
import Menu from 'components/Menu'
import { ShowMenuProvider } from 'store/menu'
import { useEffect } from 'react'

import 'styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    configure({ showSpinner: false })
    router.events.on('routeChangeStart', startLoading)
    router.events.on('routeChangeComplete', stopLoading)
    router.events.on('routeChangeError', stopLoading)

    return () => {
      router.events.off('routeChangeStart', startLoading)
      router.events.off('routeChangeComplete', stopLoading)
      router.events.off('routeChangeError', stopLoading)
    }
  }, [])

  return (
    <ShowMenuProvider>
      <Navbar />
      <Menu />
      <Component {...pageProps} />
    </ShowMenuProvider>
  )
}

export default MyApp
