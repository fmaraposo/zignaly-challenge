import React from 'react'
import CityImage from '../assets/images/city.png'

const Home = () => {

  return (
    <div className="home-wrapper">
      <img src={CityImage} alt="City" style={{ cursor: 'pointer' }} className="home-image" />
      <h1 className='home-message'>
        Search For Your City On the Search Bar
      </h1>
    </div>
  )

}

export default Home;
