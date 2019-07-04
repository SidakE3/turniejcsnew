import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions' 

const SignedInLinks = (props) => {
    return(
        <ul className="navbar-nav">
            <li className="nav-item"><NavLink to="/" className="nav-link"><div id="logo"> T O T</div></NavLink></li>
            {props.profile != null ? null : <li className="nav-item"><NavLink className="nav-link" to='/create'>Dodaj gracza</NavLink></li>}
            <li className="nav-item"><button className="nav-link logout" href="#" onClick={props.signOut}>Wyloguj się</button></li>
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