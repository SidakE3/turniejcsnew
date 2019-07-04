import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

 class SignIn extends Component {
    state = {
        LoginFormEmail: '',
        LoginFormPassword: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })  
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.signIn(this.state)
        
    }
  render() {
      const { authError, auth } = this.props
      if (auth.uid) return <Redirect to='/dashboard' />
    return (
        <div className="container formContent">
        <div className="card">
            <h5 className="card-header info-color white-text text-center py-4 bg-login">
                <strong>Zaloguj się</strong>
            </h5>

            <div className="card-body px-lg-5 pt-5">
                <form className="text-left" onSubmit={this.handleSubmit}>
                    <div className="md-form">
                        <label htmlFor="LoginFormEmail">Email</label>
                        <input type="email" id="LoginFormEmail" name="LoginFormEmail" className="form-control" required onChange={this.handleChange}/>
                    </div>
                    <div className="md-form">
                        <label htmlFor="LoginFormPassword">Hasło</label>
                        <input type="password" id="LoginFormPassword" name="LoginFormPassword" className="form-control" required onChange={this.handleChange}/>
                        
                    </div>

                    <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Logowanie</button>
                    <div className="text-danger">
                        { authError ? <p>{ authError }</p> : null} 
                    </div>
                    <p>Nie masz konta?
                        <Link to="/signup"> Rejestracja</Link>
                    </p>
                </form>
            </div>
        </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
    
}

const mapDispatchToPorps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToPorps)(SignIn)