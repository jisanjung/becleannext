import React, { useEffect, useRef, useState } from 'react';

const MobileNav = ({ menuToggled, className }) => {

  const menuContentRef = useRef(null);
  const [menuContentHeight, setMenuContentHeight] = useState(0);

  useEffect(() => {
    setMenuContentHeight(menuContentRef?.current?.scrollHeight);
  }, []);

  return (
    <nav className={`transition-all overflow-hidden ${className}`}
      ref={menuContentRef}
      style={{
        height: menuToggled ? `${menuContentHeight}px` : '0px',
      }}
    >
        <ul className='my-4'>
            <li className='pb-4'><a href="/">Home</a></li>
            <li className='pb-4'><a href="/#servicesSection">Services</a></li>
            <li className='pb-4'><a href="/#contactSection">Contact</a></li>
            <li><a href="/#ourStorySection">Our Story</a></li>
        </ul>
    </nav>
  )
}

export default MobileNav