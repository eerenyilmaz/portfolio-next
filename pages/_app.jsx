import '../styles/global.css'
import 'tailwindcss/tailwind.css'
import Header from '../src/components/Header';
import { Nunito } from 'next/font/google'
import Footer from '../src/views/Footer';

const nunito = Nunito({ subsets: ['latin'] })

 function MyApp({ Component, pageProps }) {
   return (
    <>
      <Header />
      <main className={"{ 'flex min-h-screen overflow-hidden'}",nunito.className}>
        <div className='w-full h-full'>
          <div className='w-full gap-x-1'>
            <Component {...pageProps} />
          </div>
        </div>
      </main>
      <Footer />
    </>
   )
 }

 export default MyApp