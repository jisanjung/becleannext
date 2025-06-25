'use client'

import { useStoreState } from 'easy-peasy'
import StickyVehicleType from '@/components/StickyVehicleType'
import '../globals.css';
import VehicleTypeSection from '@/components/VehicleTypeSection';
import GlassCoatingSection from '@/components/GlassCoatingSection';
import DropOffSection from '@/components/DropOffSection';
import TotalSection from '@/components/TotalSection';
import InfoSection from '@/components/InfoSection';
import FaqSection from '@/components/FaqSection';

const Book = () => {

  const vehicleTypeSelected = useStoreState(state => state.vehicleTypeSelected);
  const glassCoatingSelected = useStoreState(state => state.glassCoatingSelected);
  
  return (
    <main>
      <div>
        <div className='wrapper lg:flex'>
          <div className='px-4 md:px-10 lg:pr-0 p-4 md:pt-8 lg:w-3/5'>
            <h1 className='font-bold text-4xl'>Book a Ceramic Coating</h1>
            <StickyVehicleType/>
          </div>
          <div className='lg:w-2/5 lg:mt-16'>
            <VehicleTypeSection className='px-4 md:px-10'/>
            <GlassCoatingSection className='px-4 md:px-10' disabled={!Boolean(vehicleTypeSelected)}/>
            <DropOffSection className='px-4 md:px-10' disabled={!Boolean(glassCoatingSelected)}/>
          </div>
        </div>
        <TotalSection className='px-4 md:px-10'/>
        <InfoSection className='px-4 md:px-10 wrapper'/>
        <FaqSection className='px-4 md:px-10 wrapper'/>
      </div>
    </main>
  )
}

export default Book