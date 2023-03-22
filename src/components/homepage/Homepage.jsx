import React from 'react';
import './homepage.css';

import { Homebar, Content } from "../index";

const Homepage = () => {
  return (
    <div className='flickbase__homepage'>
      <Homebar />
      <Content />
    </div>
  )
}

export default Homepage;
