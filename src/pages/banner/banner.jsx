import React, { useState, useEffect } from 'react'
import './banner.css';
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

    const handleSlideChange = id => {
        const newMovie = movies.map(movie => {
            movie.active = false;
            if (movie._id === id) {
                movie.active = true;
            }
            return movie;
        });
        setmovie(newMovie);
    };
    return (
        <div className='banner'>
            {
                movies && movies.length > 0 && movies.map(movie => (
                    <div className="movie" key={movie._id}>
                        <img src={movie.bgImg} alt="Background" className={`bgImg ${movie.active ? 'active' : undefined}`} />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <MovieContent movie={movie} />
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <MovieDate movie={movie} />
                                    <MovieTrailer movie={movie} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

            {movies && movies.length > 0 && <MovieSwiper slides={movies} slideChange={handleSlideChange} />}

        </div>
    );
}

export default Banner