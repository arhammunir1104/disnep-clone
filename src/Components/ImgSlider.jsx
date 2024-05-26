import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Css/ImgSlider.css" 
import bannerImg1 from "../imgs/slider-badag.jpg"
import bannerImg2 from "../imgs/slider-badging.jpg"
import bannerImg3 from "../imgs/slider-scale.jpg"
import bannerImg4 from "../imgs/slider-scales.jpg"


function ImgSlider() {
    let settings = {
        dots: true,
        infinite : true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll : 1,
        autoplay: true
    }
  return (
    <>
    <div>
        <Slider {...settings} className='carousal'>
            <div className='wrap'>
                <a>
                    <img src={bannerImg1} alt='banner'  />
                </a>
            </div>
            <div className='wrap'>
                <a>
                    <img src={bannerImg2} alt='banner'  />
                </a>
            </div>
            <div className='wrap'>
                <a>
                    <img src={bannerImg3} alt='banner'  />
                </a>
            </div>
            <div className='wrap'>
                <a>
                    <img src={bannerImg4} alt='banner'  />
                </a>
            </div>
        </Slider>
    </div>
    </>
  )
}

export {ImgSlider}
