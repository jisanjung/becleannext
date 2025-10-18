import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SlideShowNextArrow = (props) => {
    const { className, style, onClick } = props;
    return <MdOutlineKeyboardArrowRight
        className={className}
        style={{ ...style, display: "block", color: 'black', right: '0', zIndex: '1', width: '36px', height: '36px' }}
        onClick={onClick}
    />;
}

export default SlideShowNextArrow