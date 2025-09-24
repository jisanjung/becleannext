'use client'

import { useStoreActions, useStoreState } from 'easy-peasy';
import RadioOption from './RadioOption';
import OptionSelectionContent from './OptionSelectionContent';

const VehicleTypeRadio = () => {

    const setVehicleType = useStoreActions(actions => actions.setVehicleType);
    const vehicleTypeSelected = useStoreState(state => state.vehicleTypeSelected);

    const handleChange = (event) => {
        setVehicleType(event.target.value);
    };

  return (
    <div>
        <RadioOption
            label={<OptionSelectionContent 
                title='Sedans, Coupes & Hatchbacks'
                price='$1,500'
            />}
            name='vehicleType'
            value='sedan'
            checked={vehicleTypeSelected === 'sedan'}
            onChange={handleChange}
            className='mb-3'
            styleOverrides={{
                minHeight: '90px'
            }}
        />
        <RadioOption
            label={<OptionSelectionContent 
                title='SUVs'
                price='$1,700'
            />}
            name='vehicleType'
            value='suv'
            checked={vehicleTypeSelected === 'suv'}
            onChange={handleChange}
            className='mb-3'
            styleOverrides={{
                minHeight: '90px'
            }}
        />
        <RadioOption
            label={<OptionSelectionContent 
                title='Trucks & 3-Row'
                price='$2,000'
            />}
            name='vehicleType'
            value='truck'
            checked={vehicleTypeSelected === 'truck'}
            onChange={handleChange}
            className='mb-3'
            styleOverrides={{
                minHeight: '90px'
            }}
        />
    </div>
  )
}

export default VehicleTypeRadio