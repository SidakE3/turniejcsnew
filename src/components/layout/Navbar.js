import React, {Component} from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux' ;
import { compose } from 'redux'
import HomeLinks from './HomeLinks';
import { withRouter } from 'react-router-dom';

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
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
        <div className="container">
            
                <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
            <div className={`${classOne}`} id="navbarResponsive">
            {this.props.location.pathname === "/" ? <HomeLinks /> : <div className="authlinks">{links}</div>}
            </div>
        </div>
    </nav>
    
    
    );
    }
    }

    const mapStateToProps = (state) => {
        return{
            auth: state.firebase.auth,
            profile: state.firebase.profile.admin
        }
    }

   export default compose(
       withRouter,
       connect(mapStateToProps)
   )(Navbar);

 