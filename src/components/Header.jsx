'use client'

import React, { useState } from 'react'
import MobileNav from './MobileNav'
import { HEADER_BACKGROUND_COLOR } from '../constants'
import { GiHamburgerMenu } from "react-icons/gi";
import DesktopNav from './DesktopNav';
import ButtonPrimary from './ButtonPrimary';
import Image from 'next/image';

const Header = () => {

  const [menuToggled, setMenuToggled] = useState(false);

  return (
    <header style={{
      background: HEADER_BACKGROUND_COLOR,
      color: '#fff',
    }}
      className='py-2 px-4 md:px-10 lg:py-3'
    >
      <div className='wrapper lg:flex lg:justify-between'>
        <div>
          <div className='flex items-center justify-between '>
            <a href='/' className='flex items-center'>
              <div style={{
                width: '50px'
              }}>
                <Image
                  src='/beclean_logo.png'
                  alt='Beclean Logo'
                  width={100}
                  height={100}
                />
              </div>
              <p className='font-bold text-lg'>beclean</p>
            </a>
            <button className='lg:hidden' onClick={() => setMenuToggled(!menuToggled)}>
              <GiHamburgerMenu className='text-3xl'/>
            </button>
          </div>
          <MobileNav className='lg:hidden' menuToggled={menuToggled}/>
          <DesktopNav className='hidden lg:block'/>
        </div>
        <div className='hidden lg:flex items-center'>
          <a href='/book'>
            <ButtonPrimary>Book an Appointment</ButtonPrimary>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header