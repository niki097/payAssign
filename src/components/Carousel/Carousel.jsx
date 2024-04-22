import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './carousel.css';
import testimonial1 from "../../assets/imgs/testimonial1.svg";


function Carousel({ className, slidesToShow, customArrows, customDots, cardData,
    showButton, testimonialWords, carouselName, carouselPrice, carouselImage}) {

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="slick-arrow-prev" onClick={onClick}>
                <FaChevronLeft />
            </div>
        );
    };
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="slick-arrow-next" onClick={onClick}>
                <FaChevronRight />
            </div>
        );
    };

    const settings = {
        dots: customDots !== undefined ? customDots : true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow !== undefined ? slidesToShow : 4,
        slidesToScroll: 1,
        prevArrow: customArrows ? <PrevArrow /> : null,
        nextArrow: customArrows ? <NextArrow /> : null,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
        <div className="py-3">
         <Slider {...settings} className="slick-slider">
            {cardData.map((card, index) => (
                <div key={index} className={`${className}`}>
                    {
                        testimonialWords && <p>Selfcare for me was about using only basic face cream and chapstick. 
                            But Sanfe has changed my perspective about selfcare...I tried their Underarm Depigmentation Serum, and now, I am hooked.</p>
                    }
                   
                    <div className="product_cardImg">
                        {
                            carouselImage && <img src={card.Image1} alt="" />
                        }

                       
                    </div>
                    {
                        carouselName && <h2 className='text-center font-bold text-xl my-3'>{card.name}</h2>
                    }
                    {
                        carouselPrice && <h6>{card.price}</h6>
                    }
                    {
                        showButton && <button className=''>Connect</button>
                    }

                </div>
            ))}
        </Slider>
        </div>
        </>
       
    );
}

export default Carousel;
