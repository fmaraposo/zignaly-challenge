import React from 'react'
import { connect } from 'react-redux';
import { debounce } from 'lodash'
import Actions from '../store/action'
import Logo from '../assets/images/logo.png'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = ({ getCity }) => {

    //To delay the function and avoid multiple requests.
    const handleCoupon = debounce(async (city) => getCity(city), 500)

    return (
        <ul className='navbar'>
            <li className='logo'>
                <img src={Logo} alt="Zignaly Logo" style={{cursor: 'pointer'}}/>
            </li>
            <li className= 'search-bar' style={{fontWeight: 600, fontSize: 24}}>
                <TextField 
                    id="outlined-basic" 
                    label="Search" 
                    variant="outlined" 
                    InputProps={{
                        endAdornment: <SearchIcon/>
                      }}
                    onChange={(e) => handleCoupon(e.target.value)}
                />
            </li>
        </ul>
    )
}

const mapDispatchToProps = dispatch => ({
    getCity: (city) => dispatch(Actions.getCity(city))
})

export default connect(null, mapDispatchToProps)(Navbar);

