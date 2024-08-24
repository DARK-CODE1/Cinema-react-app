import React from 'react'
import './movieContent.css';
import titleImg from '../../Images/transformer-title.png';
import Button from '../Button/button';

function MovieContent() {
  return (
    <div className="content active">
      <img src={titleImg} alt="Movie Title" className="movie-title" />
      <h4>
        <span>Year</span>
        <span><i>Age</i></span>
        <span>Length</span>
        <span>Category</span>
      </h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur non sint quas? Optio nihil 
        facilis, id et ipsum
        enim iure deserunt veritatis animi sint possimus, accusant
        ium odio voluptas esse? Perferendis?
      </p>
      <div className="buttom">
        <Button icon={<ion-icon name="bookmark-outline"></ion-icon>} name='Book' color='#ff3800' bgColor='#fff' />
        <Button icon={<ion-icon name="add"></ion-icon>} name='My List'/>

      </div>
    </div>
  )
}

export default MovieContent