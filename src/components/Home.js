import React from 'react'
import CityImage from '../assets/images/city.png'

const Home = () => {

  return (
    <div className="not-found-wrapper">
        <img src={CityImage} alt="City" style={{cursor: 'pointer'}}/>
        <h1 className='not-found-message'> 
            Search For Your City On the Search Bar
        </h1>
    </div>
  )

}

export default Home;
