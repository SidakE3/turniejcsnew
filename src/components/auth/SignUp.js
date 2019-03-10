import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions' 


class SignUp extends Component {
    state = {
        LoginFormEmail: '',
        LoginFormPassword: '',
        LoginFormCaptainName: '',
        LoginFormTeamName: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.signUp(this.state)
        
    }

  render() {
    const { auth, authError } = this.props
    if (auth.uid) return <Redirect to='/dashboard' />
    return (
      <div className="container formContent">
        <div className="card">
            <h5 className="card-header info-color white-text text-center py-4 bg-login">
                <strong>Rejestracja</strong>
            </h5>

            <div className="card-body px-lg-5 pt-5">
                <form className="text-left" onSubmit={this.handleSubmit}>
                    <div className="md-form">
                        <label htmlFor="LoginFormEmail">Email</label>
                        <input type="email" id="LoginFormEmail" name="LoginFormEmail" className="form-control" required onChange={this.handleChange}/>
                    </div>
                    <div className="md-form">
                        <label htmlFor="LoginFormPassword">Nick kapitana</label>
                        <input type="text" id="LoginFormCaptainName" name="LoginFormCaptainName" className="form-control" required onChange={this.handleChange}/>
                    </div>
                    <div className="md-form">
                        <label htmlFor="LoginFormPassword">Nazwa drużyny</label>
                        <input type="text" id="LoginFormTeamName" name="LoginFormTeamName" className="form-control" required onChange={this.handleChange}/>
                    </div>
                    <div className="md-form">
                        <label htmlFor="LoginFormPassword">Hasło</label>
                        <input type="password" id="LoginFormPassword" name="LoginFormPassword" className="form-control" required onChange={this.handleChange}/>
                    </div>

                    <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>
                    <div className="text-danger">
                        { authError ? <p>{ authError }</p> : null} 
                    </div>
                    <p>Masz już konto?
                        <Link to="/signup"> Logowanie</Link>
                    </p>
                </form>
            </div>
        </div>
        </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)