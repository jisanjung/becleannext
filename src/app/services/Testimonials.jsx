"use client";

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoStarFill } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


function NextArrow(props) {
    const { className, style, onClick } = props;
    return <MdOutlineKeyboardArrowRight
        className={className}
        style={{ ...style, display: "block", color: 'black', right: '0' }}
        onClick={onClick}
    />;
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return <MdOutlineKeyboardArrowLeft
        className={className}
        style={{ ...style, display: "block", color: 'black', left: '0' }}
        onClick={onClick}
    />;
  }

const slickSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
};

const Testimonials = () => {
  return (
    <section className='wrapper px-4 md:px-10 py-4'>
        <h3 className='mb-4 text-2xl font-bold text-center'>
            What Our Clients Say
        </h3>
        <div className='flex justify-center'>
            <GoStarFill className='text-2xl text-yellow-400 mr-1'/>
            <GoStarFill className='text-2xl text-yellow-400 mr-1'/>
            <GoStarFill className='text-2xl text-yellow-400 mr-1'/>
            <GoStarFill className='text-2xl text-yellow-400 mr-1'/>
            <GoStarFill className='text-2xl text-yellow-400'/>
        </div>
        <div>
            <Slider {...slickSettings}>
                <div className='p-8'>
                    <h3>1</h3>
                </div>
                <div className='p-8'>
                    <h3>2</h3>
                </div>
                <div className='p-8'>
                    <h3>3</h3>
                </div>
                <div className='p-8'>
                    <h3>4</h3>
                </div>
                <div className='p-8'>
                    <h3>5</h3>
                </div>
                <div className='p-8'>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    </section>
  )
}

export default Testimonials