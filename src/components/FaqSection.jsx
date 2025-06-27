import React, { useState } from 'react'
import { IoChevronDownSharp } from "react-icons/io5";
import { FAQ_LIST } from '../constants';
import DropdownInfo from './DropdownInfo';

const FaqSection = ({ className }) => {

    const [openDropdown, setOpenDropdown] = useState(true);

  return (
    <section className={`py-4 md:pt-6 pb-14 ${className}`}>
        <div className='flex justify-between items-center border-b-1 border-gray-300 pb-4'
            onClick={() => setOpenDropdown(!openDropdown)}
        >
            <h2 className='font-bold text-4xl cursor-pointer'>Frequently <span className='block md:inline'>Asked</span> <span className='block md:inline'>Questions</span></h2>
            <button className='cursor-pointer'>
                <IoChevronDownSharp className='text-5xl transition-all'
                    style={{
                        transform: openDropdown ? 'rotate(180deg)' : 'none'
                    }}
                />
            </button>
        </div>
        <div className={`transition-all ${openDropdown ? 'h-auto' : 'h-0'} overflow-hidden`}>
            {FAQ_LIST.map((item) => {
                return (
                    <DropdownInfo key={item.question} title={item.question} description={item.answer}/>
                )
            })}
        </div>
    </section>
  )
}

export default FaqSection