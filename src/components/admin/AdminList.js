import React from 'react'
import AdminSummary from './AdminSummary'

const AdminList = ({players, auth, user}) => {
  return (
    
    <div>
      {console.log(user.id)}
    <div className="card mt-2 player-info">
      <div className="card-body">
      </div>
      {players && players.map(player => {
          return user.id === player.captainId ? <AdminSummary player={player} key={player.id}/> : null
        })}
    </div>
    </div>
  )
}

export default AdminList
