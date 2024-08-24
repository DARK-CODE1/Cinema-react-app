import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from "swiper/modules";
import './movieSwiper.css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function MovieSwiper({ slides }) {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            slidesPerView={'auto'}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                slideShadows: true,
            }}
            loop={true}
            modules={[Autoplay, EffectCoverflow]}
            className='movieSwiper'
        >

            {
                slides.map(slide => (
                    <SwiperSlide>
                        <img src={slide.previewImg} alt="Perview" />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default MovieSwiper