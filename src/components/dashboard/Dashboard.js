import React, { Component } from 'react'
import PlayerList from '../players/PlayerList'
import PlayerInfo from '../players/PlayerInfo';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {

    const { players, auth } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />
    if(this.props.profile === true) return <Redirect to='/admin' />
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 col-s12">
          <h3 className="mt-5">Moja drużyna</h3>
            <PlayerList players={players} auth={auth}/>
          </div>
          <div className="col-6 col-s12">
            <h3 className="mt-5">Informacje</h3>
            <PlayerInfo/>
          </div>
        </div>        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.firestore.ordered.players,
    profile: state.firebase.profile.admin,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'players'}
  ])
)(Dashboard)