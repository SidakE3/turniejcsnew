import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setResult } from '../../store/actions/playerActions';


class AdminMatchesDetalis extends Component {

  state = {
    team1Result : '',
    team2Result : '',
    id: ''
  }
  handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (id) => (e) => {
        e.preventDefault();
        this.setState({
          id: id
        },() => {
          this.props.setResult(this.state)
        })
        
    }

  render() {
      const { match } = this.props
    return (
      <div className="container text-dark">
        <form onSubmit={this.handleSubmit(match.id)}> 
            <label htmlFor="team1">{match.team1}</label>
            <input type="text" id="team1Result" name="team1Result" onChange={this.handleChange} placeholder={match.team1Result}/>
            <label htmlFor="team1">{match.team2}</label>
            <input type="text" id="team2Result" name="team2Result" onChange={this.handleChange} placeholder={match.team2Result}/>
            <input type="submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setResult: (match) => dispatch(setResult(match))
  }
}

export default connect(null,mapDispatchToProps)(AdminMatchesDetalis)
