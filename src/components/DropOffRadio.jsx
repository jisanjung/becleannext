'use client';

import { useStoreActions, useStoreState } from 'easy-peasy';
import RadioOption from './RadioOption';
import OptionSelectionContent from './OptionSelectionContent';

const DropOffRadio = () => {

    const setDropOffSelection = useStoreActions(actions => actions.setDropOffSelection);
    const dropOffSelected = useStoreState(state => state.dropOffSelected);

    const handleChange = (event) => {
        setDropOffSelection(event.target.value);
    };

  return (
    <div>
        <RadioOption
            label={<OptionSelectionContent 
                title='Delivery'
                price='Free'
                description={
                    <p className='mt-4 w-4/5'>
                        Remove the headache around scheduling the right time to pick-up your car. 
                        As soon as the coating cures, we drop it off for you.
                    </p>
                }
            />}
            name='dropOff'
            value='drop_off'
            checked={dropOffSelected === 'drop_off'}
            onChange={handleChange}
            className='mb-3'
        />
        <RadioOption
            label={<OptionSelectionContent 
                title='No Delivery'
            />}
            name='dropOff'
            value='none'
            checked={dropOffSelected === 'none'}
            onChange={handleChange}
            className='mb-3'
        />
    </div>
  )
}

export default DropOffRadio