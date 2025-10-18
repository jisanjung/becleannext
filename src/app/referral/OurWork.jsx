"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { REFERRAL_WORK_EXAMPLE_IMG_PATHS } from '@/constants';

const OurWork = () => {

    const slickSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

  return (
    <section className='wrapper px-4 py-8'>
        <h1 className="text-2xl font-bold text-center mb-4">Our Work</h1>
        <div>
            <Slider {...slickSettings}>
                {REFERRAL_WORK_EXAMPLE_IMG_PATHS.map((path) => (
                    <div>
                        <img src={path} className="rounded-2xl object-cover"
                            style={{
                                height: '300px',
                                width: '100%',
                            }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    </section>
  )
}

export default OurWork