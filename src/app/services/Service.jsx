import AlertBanner from '@/components/AlertBanner';
import '../globals.css';
import Hero from './Hero';

const Service = () => {
  return (
    <main className='relative'>
        <AlertBanner 
            background='#3C3B3B'
            color='#fff'
        >
            Now through August 15, FREE Ceramic Window Coating with All Coatings
        </AlertBanner>
        <Hero/>
    </main>
  )
}

export default Service