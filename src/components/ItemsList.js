import React from 'react'
import { connect } from 'react-redux';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Home from './Home'
import NotFound from './NotFound'

const ItemsList = ({ city }) => {

    if (!city) return <Home />

    if (city.errorMessage) return <NotFound errorMessage={city.errorMessage} />

    return (
        <div className="card-wrapper-component"/*style={{ display: 'flex' }}*/>
            {
                city?.features.map(feature => {
                    return (
                        <Card className='card-container' key={feature.id}>
                            <CardContent className="card-content">
                                <p className='card-title'>{feature.place_name}</p>
                                <ul style={{ padding: 0 }}>
                                    {feature.context?.map((data, index) => {
                                        //Get the Title and Capitalize first Letter
                                        const title = data.id.split('.')[0].charAt(0).toUpperCase() + data.id.split('.')[0].slice(1)

                                        return (
                                            <div key={index}>
                                                <li className='data-items'>
                                                    <span style={{ fontWeight: 'bold' }}>{title}:</span> {data.text}
                                                </li>
                                            </div>
                                        )
                                    })}
                                </ul>
                            </CardContent>
                        </Card>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        city: state.city
    }
}

export default connect(mapStateToProps, null)(ItemsList);