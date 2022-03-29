import React from 'react'
import { connect } from 'react-redux';
import Home from './Home'
import NotFound from './NotFound'

const ItemsList = ({ city }) => {

    if(!city) return <Home />

    if(city.errorMessage) return <NotFound errorMessage={city.errorMessage}/>
    
    return (
        <div>Items List</div>
    )
}

const mapStateToProps = (state) => {

    return {
        city: state.city
    }
}

export default connect(mapStateToProps, null)(ItemsList);