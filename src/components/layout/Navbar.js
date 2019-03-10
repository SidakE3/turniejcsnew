import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux' 

class Navbar extends Component {
    
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }
    toggleNavbar() {
        this.setState({
        collapsed: !this.state.collapsed,
    });
    }
    
    render() {
    const { auth,profile } = this.props;
    console.log(auth)
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
        <div className="container">
            <Link to="/" className="navbar-brand" >Turniej CSGO PZS3</Link>
                <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
            <div className={`${classOne}`} id="navbarResponsive">
                { links }
            </div>
        </div>
    </nav>
    );
    }
    }

    const mapStateToProps = (state) => {
        console.log(state)
        return{
            auth: state.firebase.auth,
            profile: state.firebase.profile.admin
        }
    }

   export default connect(mapStateToProps)(Navbar);