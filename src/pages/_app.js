// assets
import '../styles/globals.css'

// redux
import { Provider } from 'react-redux'
import store from '../components/redux/store'

export default function App({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}
