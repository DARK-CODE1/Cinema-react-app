import React, { useState, useEffect } from 'react'
import './banner.css';
function Banner() {
    const [movie, setmovie] = useState([]);
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
        (<div className='banner'>
            <div className="movie">
                <img src="ff" alt="Background Image" className="bgImg" />
                <div class="container-fluid">
                    <div class="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="content">
                                <img src="gg" alt="Movie Title" className="movie-title" />
                                <h4>
                                    <span>Year</span>
                                    <span><i>Age</i></span>
                                    <span>Length</span>
                                    <span>Category</span>
                                </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Consectetur non sint quas? Optio nihil facilis, id et ipsum
                                    enim iure deserunt veritatis animi sint possimus, accusant
                                    ium odio voluptas esse? Perferendis?
                                </p>
                                <div className="buttom">
                                Buttom
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">

                        </div>
                    </div>
                </div>
            </div>
        </div>)
    )
}

export default Banner