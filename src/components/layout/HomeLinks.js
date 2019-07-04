import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeLinks = () => {
    return(
        <ul className="navbar-nav">
                {/* <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li> */}  
                <li className="nav-item"><a className="nav-link" href="#zapisy">Zapisy</a></li>
                <li className="nav-item"><a className="nav-link" href="#wojtek">Wojtek</a></li>
                <li className="nav-item"><NavLink to="/" className="nav-link"><div id="logo"> T O T</div></NavLink></li>
                <li className="nav-item"><a className="nav-link" href="#sponsorzy">Sponsorzy</a></li>
                <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
        </ul>
    )
}

export default HomeLinks