import React, { Component } from 'react'
import AdminTeams from './AdminTeams'
import AdminInfo from './AdminInfo';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class AdminDashboard extends Component {
  render() {

    const { players, auth, users, matches } = this.props;
   
    if (!auth.uid) return <Redirect to='/signin' />
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
          <h3 className="mt-5">Drużyny</h3>
            <AdminTeams players={players} auth={auth} users={users} />
          </div>
          <div className="col-md-6 col-sm-12">
            <h3 className="mt-5">Mecze</h3>
            <AdminInfo players={players} auth={auth} users={users} matches={matches}/>
          </div>
        </div>        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.firestore.ordered.players,
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
    matches: state.firestore.ordered.matches
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'players'},
    { collection: 'users'},
    { collection: 'matches'}
  ])
)(AdminDashboard)