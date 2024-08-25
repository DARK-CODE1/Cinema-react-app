import React from 'react'
import'./main.css';
import Schedule from '../schedule/schedule';
import Trend from '../trend/trend';
import Blog from '../blog/blog';

function Main() {
  return (
    <main>
        <Schedule/>
        <Trend/>
        <Blog/>
    </main>
  )
}

export default Main