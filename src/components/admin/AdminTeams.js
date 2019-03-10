import React from 'react'
import AdminList from './AdminList'
const AdminTeams = ({players, auth, users}) => {
  return (
    <div>
    
            {users && users.map(user=>{
                return user.admin === true ? null : <AdminList players={players} auth={auth} user={user} key={user.id}/>
            })}
        
    </div>
  )
}

export default AdminTeams
