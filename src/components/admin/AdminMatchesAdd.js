import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMatch } from '../../store/actions/playerActions'


class AdminMatchesAdd extends Component {

    state = {
        team1: '',
        team2: '',
        matchTime: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.createMatch(this.state)
    }


  render() {
      const { users } = this.props
    return (
      <div className="container text-dark">
      <form onSubmit={this.handleSubmit}>
      <select name="team1" id="team1" value={this.state.value} onChange={this.handleChange}>
          <option>Wybierz opcje</option>
              {users && users.map(user=>{
                return user.admin === true ? null : <option value={user.teamName} key={user.id}>{user.teamName}</option>
               })}
              </select>
              <p>vs</p>
              <select name="team2" id="team2" value={this.state.value} onChange={this.handleChange}>
              <option>Wybierz opcje</option>
              {users && users.map(user=>{
                return user.admin === true ? null : <option value={user.teamName} key={user.id}>{user.teamName}</option>
               })}
              </select>
              <input type="time" id="matchTime" name="matchTime" onChange={this.handleChange}/>
              <input type="submit"/>
      </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createMatch: (match) => dispatch(createMatch(match))
  }
}

export default connect(null, mapDispatchToProps)(AdminMatchesAdd)
