import Navbar from '../components/NavBar'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
