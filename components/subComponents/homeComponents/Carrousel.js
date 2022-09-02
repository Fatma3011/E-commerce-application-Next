import React from 'react';
import Slider from "react-slick";
import { Carousel } from 'react-responsive-carousel';  
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
export const Carrousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='row'>
            <div className='col-lg-2'></div>
            <div className='col-lg-8'>
                {/* <Slider {...settings}>
                    
                        <div>
                            <img className="d-block w-100" src="/assets/img/h4-slide.png" alt="First slide" />
                        </div>
                        <div>
                            <img className="d-block w-100" src="/assets/img/h4-slide2.png" alt="Second slide" />
                        </div>
                        <div>
                            <img className="d-block w-100" src="/assets/img/h4-slide3.png" alt="Third slide" />
                        </div>
                    
                </Slider> */}
                



            <Carousel>  
                    
                        <div>
                            <Image className="d-block w-100" src="/assets/img/h4-slide.png" alt="First slide" width={1300} height={350} />
                        </div>
                        <div>
                            <Image className="d-block w-100" src="/assets/img/h4-slide2.png" alt="Second slide" width={1300} height={350} />
                        </div>
                        <div>
                            <Image className="d-block w-100" src="/assets/img/h4-slide3.png" alt="Third slide" width={1300} height={350} />
                        </div>
                    
                </Carousel>  


            </div>
            <div className='col-lg-2'></div>
        </div>

    );
};
