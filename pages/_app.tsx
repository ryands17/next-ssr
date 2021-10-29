import type { AppProps } from 'next/app'
import '../styles/global.css'

const App = (props: AppProps) => {
  const { Component, pageProps } = props
  return <Component {...pageProps} />
}

export default App
