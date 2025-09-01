'use client';

import { FOOTER_BACKGROUND_COLOR } from '../constants'
import LinkButton from './LinkButton'
import { FaLinkedinIn } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Footer = () => {

    const PATHNAMES_TO_SHOW_FINEPRINT = ['/8-year-ceramic-coating'];
    const [showFinePrint, setShowFinePrint] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (PATHNAMES_TO_SHOW_FINEPRINT.includes(pathname)) {
            setShowFinePrint(true);
        }
    }, []);

  return (
    <footer className='flex flex-col lg:flex-row justify-center lg:block px-4 py-6 md:px-10' style={{
        background: FOOTER_BACKGROUND_COLOR,
        color: '#000',
    }}>
        <div className='lg:flex lg:items-center lg:justify-between wrapper'>
            <div>
                <p className='font-bold hidden lg:block lg:mb-2'>Copyright &copy; <span>{new Date().getFullYear()}</span> beclean </p>
                <div className='flex justify-center lg:justify-start mb-6 lg:mb-0'>
                    <LinkButton href="/8-year-ceramic-coating" className='pr-8 lg:pr-4'>Services</LinkButton>
                    <LinkButton href="/#contactSection" className='pr-8 lg:pr-4'>Contact Us</LinkButton>
                    <LinkButton href="/cookie-policy" className='pr-8 lg:pr-4'>Cookies</LinkButton>
                </div>
            </div>
            <div>
                <div className='flex justify-center lg:justify-end items-end mb-6'>
                    <a href='https://www.linkedin.com/company/becleancars/' target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className='text-3xl mr-4'/>
                    </a>
                    <a href='https://www.facebook.com/becleanceramics' target="_blank" rel="noopener noreferrer">
                        <TfiFacebook className='text-3xl mr-4'/>
                    </a>
                    <a href='https://www.instagram.com/becleanceramics/' target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='text-3xl mr-4 lg:mr-0'/>
                    </a>
                </div>
                <div className='flex flex-col items-center lg:items-end mb-6 lg:mb-0'>
                    <p>becleancars@gmail.com</p>
                    <LinkButton href='tel:+12674096913'>(267) 409-6913</LinkButton>
                </div>
            </div>
            <p className='font-bold lg:hidden text-center'>Copyright &copy; <span>{new Date().getFullYear()}</span> beclean </p>
        </div>
        {showFinePrint && (
            <div className='wrapper pt-10'>
                <small> * Durability ratings are based on an average life expectancy. Coatings can last longer or shorter depending on the life a car is subjected to. The harsher the life, the shorter a coating will last.</small>
            </div>
        )}
    </footer>
  )
}

export default Footer