import React from 'react';
import './trendCard.css';

function TrendCard({ slide }) {
    return (
        <div className="trend-card">
            <img src={slide.previewImg} alt='' className="img-fluid swiper-image" />
            <a href="/">Add To Calendar<ion-icon name="calendar-outline"></ion-icon></a>
        </div>
    )
}

export default TrendCard