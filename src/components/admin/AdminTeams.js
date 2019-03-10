import React from 'react'
import AdminList from './AdminList'
const AdminTeams = ({players, auth, users}) => {
  return (
    <div>
    <div className="card mt-2 player-info">
            {users && users.map(user =>{
                return <div className="card-title">{user.teamName}<AdminList players={players} auth={auth} user={user} key={user.id}/></div>
            })}
        </div>
    </div>
  )
}

export default AdminTeams
