import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <ul className="navbar-nav ml-auto">
            <li className="nav-item"><NavLink className="nav-link" to='/signin'>Zaloguj się</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to='/signup'>Zarejestuj się</NavLink></li>
        </ul>
    )
}

export default SignedInLinks