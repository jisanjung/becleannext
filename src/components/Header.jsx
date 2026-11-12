'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [menuToggled, setMenuToggled] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    // Re-check after the browser restores scroll or jumps to a #hash on load
    const raf = requestAnimationFrame(onScroll);
    const timeout = setTimeout(onScroll, 150);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('load', onScroll);
    window.addEventListener('hashchange', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('load', onScroll);
      window.removeEventListener('hashchange', onScroll);
    };
  }, [isHome]);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuToggled(false);
  }, [pathname]);

  const transparent = isHome && !scrolled && !menuToggled;

  return (
    <header
      className={`${isHome ? 'fixed' : 'relative'} inset-x-0 top-0 z-40 border-b text-white transition-[background-color,box-shadow,border-color] duration-300 ${
        transparent
          ? 'border-transparent bg-transparent'
          : 'border-white/10 bg-ink shadow-lg shadow-black/25'
      }`}
    >
      <div className='container-x flex h-[72px] items-center justify-between gap-6'>
        <Link href='/' className='flex shrink-0 items-center gap-2' aria-label='beclean home'>
          <Image
            src='/beclean_logo_wreath.png'
            alt=''
            width={40}
            height={40}
            className='h-10 w-10'
          />
          <span className='text-lg font-bold tracking-tight'>beclean</span>
        </Link>

        <DesktopNav className='hidden lg:block' />

        <div className='flex items-center gap-3'>
          <Link href='/book' className='btn hidden !px-5 !py-2.5 sm:inline-flex'>
            Book Now
          </Link>
          <button
            type='button'
            className='relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/10 lg:hidden'
            onClick={() => setMenuToggled(!menuToggled)}
            aria-label={menuToggled ? 'Close menu' : 'Open menu'}
            aria-expanded={menuToggled}
            aria-controls='mobile-nav'
          >
            <span className={`absolute h-0.5 w-5 bg-white transition-transform duration-300 ${menuToggled ? 'rotate-45' : '-translate-y-1.5'}`} />
            <span className={`absolute h-0.5 w-5 bg-white transition-opacity duration-300 ${menuToggled ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute h-0.5 w-5 bg-white transition-transform duration-300 ${menuToggled ? '-rotate-45' : 'translate-y-1.5'}`} />
          </button>
        </div>
      </div>

      <MobileNav
        className='lg:hidden'
        menuToggled={menuToggled}
        onNavigate={() => setMenuToggled(false)}
      />
    </header>
  )
}

export default Header
