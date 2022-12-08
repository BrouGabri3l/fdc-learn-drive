import '../styles/globals.css'
import {Open_Sans} from '@next/font/google'
import { AppProps } from 'next/app'
const openSans = Open_Sans({
  subsets:['latin'],
  variable:'--font-openSans'
})
function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <main className={openSans.className}>
      <Component {...pageProps} />
    </main>
    )
}

export default MyApp
