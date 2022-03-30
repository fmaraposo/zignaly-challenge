import React, { useState } from 'react';
import axios from 'axios';
import { debounce } from 'lodash'

import ItemsList from './ItemsList'
import TextField from '@mui/material/TextField';

const apiURL = `https://api.mapbox.com/geocoding/v5/`;
const publicKey = 'pk.eyJ1IjoiZm1hcmFwb3NvIiwiYSI6ImNsMWNtOWt1azA4dmkzZnAzcDlhcW5nNGQifQ.87sfWbzVEZTM_kIJBQf-Vg'

const InputComponent = () => {

    const [data, setData] = useState(null)

    const handleCoupon = debounce(async (city) => {
        //To avoid multiple calls on the api
        const response = await axios.get(apiURL + `mapbox.places/${city}.json?access_token=${publicKey}`)
        setData(response.data)
    }, 1000)

    console.log('data', data)

    return (
        <div>
            <TextField
                id="standard-basic"
                label="Search"
                variant="standard"
                onChange={(e) => handleCoupon(e.target.value)}
            />

            {data && <ItemsList data={data} />}
        </div>
    );
}

export default InputComponent;