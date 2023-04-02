import '../styles/global.css'
import 'tailwindcss/tailwind.css'
import Header from '../src/components/Header';

 function MyApp({ Component, pageProps }) {
   return (
    <>
      <Header />
      <main className='flex min-h-screen pt-16 overflow-hidden'>
        <div className='w-full h-full'>
          <div className='w-full gap-x-1 mx-auto max-w-screen-md'>
            <Component {...pageProps} />
          </div>
        </div>
      </main>
    </>
   )
 }

 export default MyApp