import { AppProps } from 'next/app'
import 'styles/index.scss'
import { Provider } from 'react-redux'
import Navbar from 'components/Navbar'
import Menu from 'components/Menu'
import { useStore } from 'store'
import { ShowMenuProvider } from 'store/menu'

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <ShowMenuProvider>
        <Navbar />
        <Menu />
        <Component {...pageProps} />
      </ShowMenuProvider>
    </Provider>
  )
}

export default MyApp
