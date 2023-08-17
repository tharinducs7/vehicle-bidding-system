import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/templates/Layout'
import store from '@/store'
import { Provider } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }: AppProps) {
  return (
     <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer position="top-center" theme="colored" />
      </Layout>
    </Provider>
  )
}
