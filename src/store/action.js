import axios from 'axios';
const apiURL = `https://api.mapbox.com/geocoding/v5/`;
const publicKey = 'pk.eyJ1IjoiZm1hcmFwb3NvIiwiYSI6ImNsMWNtOWt1azA4dmkzZnAzcDlhcW5nNGQifQ.87sfWbzVEZTM_kIJBQf-Vg'

const Types = {
    GET_CITY: "GET_CITY",
}

const listCities = response => ({
    type: Types.GET_CITY,
    payload: response
})

const getCity = (city) => {
    return async (dispatch) => {
      
        try {
            const response = await axios.get(apiURL + `mapbox.places/${city}.json?access_token=${publicKey}`);
            dispatch(listCities(response.data))

        } catch(e) {
            const error = {errorMessage: 'Query Not Found'}
            dispatch(listCities(error))
        }
    }
}


export default {Types, getCity}