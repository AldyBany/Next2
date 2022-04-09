import React from 'react'
import Navbar from '../Navbar'

const Banner = () => {
  return (
    <div className='header'>
      <Navbar/>
      <div className="hero__banner container grid">
            <div className="hero__banner__container">
                <h1 className="hero__banner__title">Need to Service or <br/> repair your car?</h1>
                <p className="hero__banner__description">Car servicing rationally encounter consequences that extremely painful. Nor again is there anyone who loves or pursues</p>
                <a href="#" className="hero__banner__button button">Contactez Nous</a>
            </div>
        </div>
    </div>
  )
}

export default Banner