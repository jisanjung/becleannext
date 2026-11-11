import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { MAIN_LINKS, SERVICE_AREA_LINKS, SERVICE_LINKS } from './navLinks';

const itemClass =
  'flex w-full items-center justify-between border-b border-white/10 py-4 text-base font-medium text-white/90 transition hover:text-white';

const MobileNav = ({ menuToggled, className, onNavigate = () => {} }) => {
  const menuContentRef = useRef(null);
  const [menuContentHeight, setMenuContentHeight] = useState(0);
  const [activePanel, setActivePanel] = useState('main');

  useEffect(() => {
    setMenuContentHeight(menuContentRef?.current?.scrollHeight);
  }, [menuToggled, activePanel]);

  // Reset to the main panel each time the menu closes
  useEffect(() => {
    if (!menuToggled) setActivePanel('main');
  }, [menuToggled]);

  const NavLink = ({ href, children, className: extra = '' }) => (
    <Link href={href} className={`${itemClass} ${extra}`} onClick={onNavigate}>
      {children}
    </Link>
  );

  const BackButton = () => (
    <button
      type='button'
      onClick={() => setActivePanel('main')}
      className='mb-2 inline-flex items-center gap-1 py-2 text-sm font-medium text-white/60 hover:text-white'
    >
      <IoChevronBack /> Back
    </button>
  );

  return (
    <nav
      id='mobile-nav'
      aria-label='Mobile'
      className={`overflow-hidden transition-[height] duration-300 ease-out ${className}`}
      ref={menuContentRef}
      style={{ height: menuToggled ? `${menuContentHeight}px` : '0px' }}
      aria-hidden={!menuToggled}
      inert={!menuToggled ? true : undefined}
    >
      <div className='relative overflow-hidden'>
        <div
          className={`flex items-start transition-transform duration-500 ease-in-out ${
            activePanel === 'services'
              ? '-translate-x-1/3'
              : activePanel === 'areas'
              ? '-translate-x-2/3'
              : 'translate-x-0'
          }`}
          style={{ width: '300%' }}
        >
          {/* MAIN PANEL */}
          <div className='w-1/3 px-4 pb-6 md:px-10'>
            <ul>
              <li><NavLink href='/'>Home</NavLink></li>
              <li>
                <button type='button' onClick={() => setActivePanel('services')} className={itemClass}>
                  Services <IoChevronForward className='text-white/50' />
                </button>
              </li>
              {MAIN_LINKS.map((link) => (
                <li key={link.href}><NavLink href={link.href}>{link.label}</NavLink></li>
              ))}
              <li>
                <button type='button' onClick={() => setActivePanel('areas')} className={itemClass}>
                  Service Areas <IoChevronForward className='text-white/50' />
                </button>
              </li>
            </ul>
            <Link href='/book' className='btn mt-6 w-full' onClick={onNavigate}>
              Book an Appointment
            </Link>
          </div>

          {/* SERVICES PANEL */}
          <div className='w-1/3 px-4 pb-6 md:px-10'>
            <BackButton />
            <ul>
              <li><NavLink href='/services' className='!text-brand'>Explore All Services</NavLink></li>
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}><NavLink href={link.href}>{link.label}</NavLink></li>
              ))}
            </ul>
          </div>

          {/* SERVICE AREAS PANEL */}
          <div className='w-1/3 px-4 pb-6 md:px-10'>
            <BackButton />
            <ul className='grid grid-cols-2 gap-x-6'>
              {SERVICE_AREA_LINKS.map((link) => (
                <li key={link.href}><NavLink href={link.href}>{link.label}</NavLink></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
