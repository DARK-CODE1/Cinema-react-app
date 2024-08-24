import React, { useState, useEffect } from 'react'
import './banner.css';
import bgImg from '../../Images/bg-transformer.jpg';
import MovieContent from '../../components/movieContent/movieContent';
import MovieDate from '../../components/movieDate/movieDate';
import MovieTrailer from '../../components/movieTrailder/movieTrailer';
import MovieSwiper from '../../components/movieSwiper/movieSwiper';


function Banner() {
    const [movies, setmovie] = useState([]);
    const fetchData = () => {
        fetch('http://localhost:3000/data/movieData.json')
            .then(res => res.json())
            .then(data => setmovie(data))
            .catch(e => console.log(e.message));
    };
    useEffect(
        () => {
            fetchData();
        }, []);

    return (
        <div className='banner'>
            <div className="movie">
                <img src={bgImg} alt="Background" className="bgImg active" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <MovieContent />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <MovieDate />
                            <MovieTrailer />
                        </div>
                    </div>
                </div>
            </div>
            {movies&&movies.length>0 && <MovieSwiper slides={movies}/>}
            
        </div>
    );
}

export default Banner