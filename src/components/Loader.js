import React from 'react';
import "../styles/Loader.scss";
import {loader} from "../services/images";

const Loader = () => {
  return (
    <div className='container'>
      <div className='loader flex justify-center align-center'>
        <img src = {loader} alt = "" />
      </div>
    </div>
  )
}

export default Loader
