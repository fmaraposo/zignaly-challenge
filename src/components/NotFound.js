import React from 'react'
import Error from '../assets/images/error-404.png'

const NotFound = ({ errorMessage }) => {

    return (
        <div>
            <img src={Error} alt="Error Message" style={{ cursor: 'pointer' }} />
            <h1>{errorMessage}</h1>
        </div>
    )
}

export default NotFound;
