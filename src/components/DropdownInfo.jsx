import React, { useEffect, useRef, useState } from 'react'
import { IoChevronDownSharp } from "react-icons/io5";

const DropdownInfo = ({ title, description }) => {

  const [openDropdown, setOpenDropdown] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    setContentHeight(contentRef?.current?.scrollHeight);
  }, []);

  return (
    <div className='py-4 border-b-1 border-gray-300'>
      <div className='flex justify-between items-center'
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        <p className='font-bold hover:cursor-pointer'>{title}</p>
        <button className='hover:cursor-pointer'>
          <IoChevronDownSharp className='text-3xl transition-all'
            style={{
              transform: openDropdown ? 'rotate(180deg)' : 'none'
            }}
          />
        </button>
      </div>
      <div className='transition-all overflow-hidden'
        ref={contentRef}
        style={{
          height: openDropdown ? `${contentHeight}px` : '0px',
        }}
      >
        <p className='mt-4'>{description}</p>
      </div>
    </div>
  )
}

export default DropdownInfo