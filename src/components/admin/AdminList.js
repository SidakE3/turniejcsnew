import React, {Component} from 'react'
import AdminSummary from './AdminSummary'
import { connect } from 'react-redux'
import { verifyTeam } from '../../store/actions/playerActions'
import { deleteTeam } from '../../store/actions/playerActions'

class AdminList extends Component{
  state = {
    id: '',
    verify: null
  }
  
  
  handleVerify = (id) => {
    this.setState({
      id: id,
      verify:true
    }, () => {
        this.props.verifyTeam(this.state)
      }
    )
  }
  handleUnVerify = (id) => {
    this.setState({
      id: id,
      verify:false
    }, () => {
        this.props.verifyTeam(this.state)
      }
    )
  }
  handleDeleteTeam = (id) => {
      this.setState({
        id: id
      }, () => {
        this.props.deleteTeam(this.state)
      }
      )
    }
    
  render(){

  const {user,players} = this.props
  return (
    <div className="w-100">
      {console.log(user.id)}
      <div className="card">
      <div className="card-title">
        <h3 className="m-3">{user.teamName}</h3>
        <p className="mt-1">{user.email}</p>
        <p className="mt-1">Kapitan: {user.captain}</p>
      </div>
      
      
      {players && players.map(player => {
          return user.id === player.captainId ? <AdminSummary player={player} key={player.id}/> : null
        })}
        <div className="card-footer d-flex flex-column">
         {user.verify === true 
         ? 
         <div className="verifyCheck"><p className="text-success">Drużyna zweryfikowana</p><button className="btn btn-info" onClick={() => {if(window.confirm(`Czy jesteś pewien, że chcesz anulować weryfikację drużyny o nazwie ${user.teamName}`)) {this.handleUnVerify(user.id)}}}>Anuluj weryfikacje</button></div> 
         :
         <div className="verifyCheck"><p className="text-danger">Drużyna nie zweryfikowana</p><button className="btn btn-info" onClick={() => {if(window.confirm(`Czy jesteś pewien, że chcesz zweryfikować drużynę o nazwie ${user.teamName}`)) {this.handleVerify(user.id)}}}>Zweryfikuj drużynę</button></div>}
         <div className="verifyCheck"><button className="btn btn-danger" onClick={() => {if(window.confirm(`Czy jesteś pewien, że chcesz usunąć drużynę o nazwie ${user.teamName}`)) {this.handleDeleteTeam(user.id)}}}>Usuń drużynę</button></div>
        </div>
      </div>
    </div>
  )
}

}
const mapDispatchToProps = (dispatch) => {
  return{
    verifyTeam: (team) => dispatch(verifyTeam(team)),
    deleteTeam: (team) => dispatch(deleteTeam(team))
  }
}

export default connect(null,mapDispatchToProps)(AdminList)




    


