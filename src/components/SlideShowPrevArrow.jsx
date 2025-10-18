import React from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


const SlideShowPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return <MdOutlineKeyboardArrowLeft
        className={className}
        style={{ ...style, display: "block", color: 'black', left: '0', zIndex: '1', width: '36px', height: '36px' }}
        onClick={onClick}
    />;
}

export default SlideShowPrevArrow