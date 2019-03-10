import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePlayer } from '../../store/actions/playerActions'
import './admin.css'

class PlayerSummary extends Component {
  state = {
    id: ''
  }
  handldeDelete = (id) => {
      this.setState({
        id: id
      }, () => {
        this.props.deletePlayer(this.state)
      }
      )
    }
    
    
  render(){
    const {player} = this.props;
  return (
    <div className="card adminSummary  w-100">
          <p className="m-0">Nick: {player.player}</p>
            <div className="card-footer admin-delete">
                <button className="btn" onClick={() => {if(window.confirm(`Czy jesteś pewien, że chcesz usunąć gracza o nicku ${player.player}`)) {this.handldeDelete(player.id)}}}><i className="fas fa-times"></i></button>
            </div>
        </div>
    
  )
}
}

const mapDispatchToProps = (dispatch) => {
  return{
    deletePlayer: (player) => dispatch(deletePlayer(player))
  }
}
export default connect(null,mapDispatchToProps)(PlayerSummary)
