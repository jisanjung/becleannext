"use client";

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoStarFill } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { customerReviews } from '@/constants';


function NextArrow(props) {
    const { className, style, onClick } = props;
    return <MdOutlineKeyboardArrowRight
        className={className}
        style={{ ...style, display: "block", color: 'black', right: '0', zIndex: '1' }}
        onClick={onClick}
    />;
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return <MdOutlineKeyboardArrowLeft
        className={className}
        style={{ ...style, display: "block", color: 'black', left: '0', zIndex: '1' }}
        onClick={onClick}
    />;
  }

  function ReviewCard(props) {
    const { text, name, date } = props;
    
    return (
        <div className='m-8 p-4 bg-gray-100 rounded-3xl'>
            <p>"{text}"</p>
            <div className='mt-4'>
                <p className='font-bold'>{name}</p>
                <p className='font-bold'>{date}</p>
            </div>
        </div>
    );
  }

const slickSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
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
                {customerReviews.map((review) => (
                    <ReviewCard
                        text={review.text}
                        name={review.name}
                        date={review.date}
                    />
                ))}
            </Slider>
        </div>
    </section>
  )
}

export default Testimonials