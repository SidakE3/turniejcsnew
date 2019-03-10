import React from 'react'
import PlayerSummary from './PlayerSummary'

const PlayerList = ({players, auth}) => {
  return (
    <div>
      {players && players.map(player => {
        return player.captainId === auth.uid ? <PlayerSummary player={player} key={player.id}/> : null
      })}
    </div>
  )
}

export default PlayerList
