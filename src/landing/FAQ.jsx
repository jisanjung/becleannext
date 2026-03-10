'use client'

import React, { useState } from 'react';
import { IoChevronDownSharp } from "react-icons/io5";
import { HP_FAQ_LIST } from '../constants';
import DropdownInfo from '../components/DropdownInfo';

const FAQ = ({ className = '' }) => {
  const [openDropdown, setOpenDropdown] = useState(true);

  return (
    <section className={`py-4 md:pt-6 pb-14 ${className}`}>
      {/* Header with toggle */}
      <div
        className='flex justify-between items-center border-b border-gray-300 pb-4 cursor-pointer'
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        <h2 className='font-bold text-4xl'>
          Frequently <span className='block md:inline'>Asked</span> <span className='block md:inline'>Questions</span>
        </h2>
        <IoChevronDownSharp
          className='text-5xl transition-all'
          style={{ transform: openDropdown ? 'rotate(180deg)' : 'none' }}
        />
      </div>

      {/* FAQ items */}
      <div className={`transition-all ${openDropdown ? 'h-auto' : 'h-0'} overflow-hidden`}>
        {HP_FAQ_LIST?.map((item) => (
          <DropdownInfo key={item.question} title={item.question} description={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;