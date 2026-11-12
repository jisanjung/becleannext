'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { usePathname } from 'next/navigation';
import { SERVICE_LINKS } from './navLinks';

const PATHNAMES_TO_SHOW_FINEPRINT = ['/8-year-ceramic-coating', '/referral'];

const SOCIALS = [
  { href: 'https://www.linkedin.com/company/becleancars/', label: 'LinkedIn', Icon: FaLinkedinIn },
  { href: 'https://www.facebook.com/becleanceramics', label: 'Facebook', Icon: TfiFacebook },
  { href: 'https://www.instagram.com/becleanceramics/', label: 'Instagram', Icon: FaInstagram },
];

const COLUMNS = [
  {
    title: 'Services',
    links: [{ href: '/services', label: 'All Services' }, ...SERVICE_LINKS],
  },
  {
    title: 'Company',
    links: [
      { href: '/our-work', label: 'Our Work' },
      { href: '/reviews', label: 'Reviews' },
      { href: '/#ourStorySection', label: 'Our Story' },
      { href: '/#contactSection', label: 'Contact' },
    ],
  },
];

const footerLink = 'text-sm text-ink/70 transition hover:text-brand-dark';

const Footer = () => {
  const pathname = usePathname();
  const showFinePrint = PATHNAMES_TO_SHOW_FINEPRINT.includes(pathname);

  return (
    <footer className='bg-mist text-ink'>
      <div className='container-x py-16'>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]'>
          {/* Brand */}
          <div>
            <Link href='/' className='inline-flex items-center gap-2'>
              <Image src='/logo_wreath.png' alt='' width={40} height={40} className='h-10 w-10' />
              <span className='text-lg font-bold tracking-tight'>beclean</span>
            </Link>
            <p className='mt-4 max-w-xs text-sm leading-relaxed text-ink/70'>
              The detailing studio devoted solely to ceramic coatings.
            </p>
            <div className='mt-6 flex gap-2'>
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={label}
                  className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink ring-1 ring-black/5 transition hover:bg-brand hover:text-white'
                >
                  <Icon className='text-base' />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className='text-xs font-semibold uppercase tracking-[0.2em] text-ink/50'>{col.title}</h3>
              <ul className='mt-4 space-y-3'>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={footerLink}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className='text-xs font-semibold uppercase tracking-[0.2em] text-ink/50'>Get in touch</h3>
            <ul className='mt-4 space-y-3'>
              <li><a href='mailto:becleancars@gmail.com' className={footerLink}>becleancars@gmail.com</a></li>
              <li><a href='tel:+12674096913' className={footerLink}>(267) 409-6913</a></li>
            </ul>
            <Link href='/book' className='btn mt-6'>Book an Appointment</Link>
          </div>
        </div>

        <div className='mt-14 flex flex-col gap-4 border-t border-black/10 pt-8 text-sm text-ink/60 md:flex-row md:items-center md:justify-between'>
          <p>&copy; {new Date().getFullYear()} beclean. All rights reserved.</p>
          <div className='flex gap-6'>
            <Link href='/cookie-policy' className='transition hover:text-ink'>Cookies</Link>
            <Link href='/privacy-policy' className='transition hover:text-ink'>Privacy Policy</Link>
          </div>
        </div>

        {showFinePrint && (
          <p className='mt-8 text-xs leading-relaxed text-ink/50'>
            * Durability ratings are based on an average life expectancy. Coatings can last longer or shorter depending on the life a car is subjected to. The harsher the life, the shorter a coating will last.
          </p>
        )}
      </div>
    </footer>
  )
}

export default Footer
