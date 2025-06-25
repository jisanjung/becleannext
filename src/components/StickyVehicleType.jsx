import { useStoreState } from 'easy-peasy';
import { getVehicleImageBasedOnSelection } from '../utils';

const StickyVehicleType = ({ className }) => {

  const vehicleTypeSelected = useStoreState(state => state.vehicleTypeSelected);

  const vehicleImage = getVehicleImageBasedOnSelection(vehicleTypeSelected, { 
    sedan: '/sedan_sideview.png', 
    suv: '/suv_sideview.png', 
    truck: '/truck_sideview.png' 
  });

  return (
    <div className={`sticky-vehicle lg:sticky lg:top-0 ${className}`}>
      <h3 className='block lg:hidden font-bold text-lg mt-12 mb-4 text-center lg:text-left'>Size. <span className='text-gray-500'>How Big is Your Car?</span></h3>
      <div className='flex justify-center lg:items-center lg:h-full'>
        <div className='mb-4 w-80 sm:w-96 h-40 lg:w-full lg:h-full lg:mt-8 relative'>
          <img src={vehicleImage} alt='Sedan 1' className='w-full h-full object-cover'/>
          <div className='absolute lg:h-10 w-full bg-white bottom-0'></div>
        </div>
      </div>
    </div>
  )
}

export default StickyVehicleType