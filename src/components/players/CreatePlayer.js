import React, { Component } from 'react'
import { createPlayer } from '../../store/actions/playerActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

 class CreatePlayer extends Component {
     state = {
         player: ''
         
     }
     handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })  
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const { auth,players } = this.props;
        const countPlayer = () => {
        const countPlayers = players.filter(player => player.captainId === auth.uid);
        return countPlayers.length;
    }   
        if( countPlayer() === 5) {return (alert("Osiągnięto maksymalną liczbę graczy"))}else{
          this.props.createPlayer(this.state)
          this.props.history.push('/dashboard')  
        }       
          
    }
  render() {
    
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />
    if(this.props.profile === true === true) return <Redirect to='/admin' />
    return (
    
    <div className="container mt-5 w-25">
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail">Nick gracza</label>
            <input type="text" className="form-control" id="player" aria-describedby="addPlayer" placeholder="Dodaj gracza" onChange={this.handleChange} required/> 
        </div>
        <button type="submit" className="btn btn-primary">Dodaj</button>
        
      </form>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile.admin,
    players: state.firestore.ordered.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createPlayer: (player) => dispatch(createPlayer(player))
  }
}
export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([
    { collection: 'players'}
  ])
)(CreatePlayer)