import React from 'react'
import './modal.css'
function Modal({ movie, toggleModal, status }) {
    return (
        <div className={`movieModal ${status ? 'active' : undefined}`}>
            <a href="#" className="modalClose" onClick={toggleModal}>
                <ion-icon name="close-outline"></ion-icon>
            </a>
            <iframe src={movie.video}
                width='1070' height='520'
                title={`${movie.title}| Official Trailer`}
                allow='accelerometer;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share'
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default Modal