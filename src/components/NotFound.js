import React from 'react'
import Error from '../assets/images/error-404.png'

const NotFound = ({ errorMessage }) => {

    return (
        <div>
            <img src={Error} alt="Error Message" className='not-found-image' />
            <h1 className='not-found-message'>{errorMessage}</h1>
        </div>
    )
}

export default NotFound;
