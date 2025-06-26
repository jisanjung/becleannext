import { FOOTER_BACKGROUND_COLOR } from '../constants'
import LinkButton from './LinkButton'
import { FaLinkedinIn } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import content from '../content.json';

const Footer = () => {

    const { copyrightText, nav } = content.footer;
    const { email, phone, logo } = content.common;

  return (
    <footer className='flex justify-center lg:block px-4 py-6 md:px-10' style={{
        background: FOOTER_BACKGROUND_COLOR,
        color: '#000',
    }}>
        <div className='lg:flex lg:items-center lg:justify-between wrapper'>
            <div>
                <p className='font-bold hidden lg:block lg:mb-2'>{copyrightText} &copy; <span>{new Date().getFullYear()}</span> {logo} </p>
                <div className='flex justify-center lg:justify-start mb-6 lg:mb-0'>
                    <LinkButton href="/#servicesSection" className='pr-8 lg:pr-4'>{nav.services}</LinkButton>
                    <LinkButton href="/#contactSection">{nav.contact}</LinkButton>
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
                    <p>{email}</p>
                    <LinkButton href='tel:+12674096913'>{phone}</LinkButton>
                </div>
            </div>
            <p className='font-bold lg:hidden'>{copyrightText} &copy; <span>{new Date().getFullYear()}</span> {logo} </p>
        </div>
    </footer>
  )
}

export default Footer