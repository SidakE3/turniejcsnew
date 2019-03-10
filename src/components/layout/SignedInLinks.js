import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions' 

const SignedInLinks = (props) => {
    console.log()
    return(
        <ul className="navbar-nav ml-auto">
            {props.profile != null ? null : <li className="nav-item"><NavLink className="nav-link" to='/create'>Dodaj gracza</NavLink></li>}
            <li className="nav-item"><a className="nav-link" onClick={props.signOut}>Wyloguj się</a></li>
            <li className="nav-item"><NavLink className="nav-link" to='/dashboard'>Panel</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)