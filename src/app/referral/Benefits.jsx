import { BECLEAN_PRIMARY_BLUE_COLOR } from '@/constants';
import React from 'react'

const PricingDisplay = ({ topText, price, isRecurring, bottomText }) => {
    return (
        <div className='mt-4'>
            <p className='font-bold'>
                <span className='block'>{topText}</span>
                <span className='block text-6xl my-2'
                    style={{
                        color: BECLEAN_PRIMARY_BLUE_COLOR
                    }}
                >
                    {Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    }).format(price)}
                    {isRecurring && <span className='text-black text-2xl'>/ year*</span>}
                </span>
                <span className='block text-right'>{bottomText}</span>
            </p>
        </div>
    );
};

const Benefits = () => {
  return (
    <section className='wrapper px-4 py-8'>
        <h1 className="text-2xl font-bold text-center mb-4">Benefits of a ceramic coating</h1>
        <div className='mb-8'>
            <h2 className='font-bold text-lg'>Fewer Washes</h2>
            <p>
                A ceramic coating significantly reduces the need for frequent washes by creating a hydrophobic surface that resists dirt, dust, 
                and grime. Water beads up and rolls off effortlessly, carrying contaminants with it, making your vehicle stays cleaner for longer. 
                Road film, bird droppings, and other debris have a harder time bonding to the paint. 
                What would normally require weekly washes can often be stretched out to biweekly or even monthly cleaning. 
                The result is not only fewer washes, but each wash becomes quicker and easier, 
                as stubborn residues lift away without the need for aggressive scrubbing.
            </p>
            <PricingDisplay
                topText='You save'
                price={750}
                isRecurring={true}
                bottomText='with a ceramic coating'
            />
        </div>
        <div className='mb-8'>
            <h2 className='font-bold text-lg'>Preserves Resale Value</h2>
            <p>
                A ceramic coating helps preserve your vehicle's resale value by protecting the paint from long-term damage and keeping it 
                looking newer for years. The coating forms a durable shield against UV rays, oxidation, chemical stains, and etching, 
                which are common causes of fading, dullness, and premature wear. Because the finish maintains its deep gloss and clarity, 
                the car projects a well-cared-for appearance that appeals to future buyers. 
                By reducing paint correction needs and preventing permanent defects, 
                a ceramic coating ensures that when it comes time to sell or trade in your vehicle, 
                it stands out with a higher-quality finish and stronger market value.
            </p>
            <PricingDisplay
                topText='Ceramic coated cars preserve'
                price={2500}
                bottomText='of their value.'
            />
        </div>
        <div className='mb-8'>
            <h2 className='font-bold text-lg'>Zero Hassle Concierge</h2>
            <p>
            Our Zero Hassle Concierge service is designed to make protecting your vehicle effortless from start to finish. 
            We handle everything for you. We pick up your car, complete the full ceramic coating treatment in our studio, 
            and return it looking flawless, all without disrupting your schedule. There's no need to rearrange your day, wait around, 
            or worry about logistics. This experience ensures maximum convenience and peace of mind, 
            so you can enjoy the benefits of world-class protection and brilliance without lifting a finger.
            </p>
        </div>
    </section>
  )
}

export default Benefits