import { HEADER_BACKGROUND_COLOR } from '@/constants'
import React from 'react'

const OurGuarantee = () => {
  return (
    <section className='wrapper px-4 py-8 text-white'
        style={{
            background: HEADER_BACKGROUND_COLOR
        }}
    >
        <h1 className="text-2xl font-bold text-center mb-4">Our Guarantee.</h1>
        <p className='text-center'>If you notice bonding or spotting issues in 30 days, we fix it free.</p>
    </section>
  )
}

export default OurGuarantee