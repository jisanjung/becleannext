import React, { useEffect, useRef, useState } from 'react';
import content from '../content.json';

const MobileNav = ({ menuToggled, className }) => {

  const menuContentRef = useRef(null);
  const [menuContentHeight, setMenuContentHeight] = useState(0);

  useEffect(() => {
    setMenuContentHeight(menuContentRef?.current?.scrollHeight);
  }, []);

  const { home, services, contact, ourStory } = content.nav;

  return (
    <nav className={`transition-all overflow-hidden ${className}`}
      ref={menuContentRef}
      style={{
        height: menuToggled ? `${menuContentHeight}px` : '0px',
      }}
    >
        <ul className='my-4'>
            <li className='pb-4'><a href="/">{home}</a></li>
            <li className='pb-4'><a href="/#servicesSection">{services}</a></li>
            <li className='pb-4'><a href="/#contactSection">{contact}</a></li>
            <li><a href="/#ourStorySection">{ourStory}</a></li>
        </ul>
    </nav>
  )
}

export default MobileNav