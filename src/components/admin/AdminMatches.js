import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import AdminMatchesDetalis from './AdminMatchesDetalis';
import { connect } from 'react-redux'
import { deleteMatch } from '../../store/actions/playerActions'
class AdminMatches extends Component {

  state = {
    id: '',
    open: false
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleDeleteMatch = (id) => {
      this.setState({
        id: id
      }, () => {
        this.props.deleteMatch(this.state)
      }
      )
    }

  render() {
    const { open } = this.state
    const { match } = this.props
    return (
      
      <div className="card mt-2">
            <div className="card-body">
              {console.log(match)}
                <p className="m-0">{match.team1} vs {match.team2}</p> 
                <p className="m-0">{match.team1Result} : {match.team2Result}</p> 
                <button className="btn btn-success" onClick={this.onOpenModal}>Wpisz wynik meczu</button>
                <button className="btn btn-danger" onClick={() => {if(window.confirm(`Czy jesteś pewien, że chcesz usunąć mecz drużyn: ${match.team1} i ${match.team2}`)) {this.handleDeleteMatch(match.id)}}}>Usuń mecz</button>

            </div>
            <div className="card-footer">O godzinie {match.matchTime}</div>
            <Modal open={open} onClose={this.onCloseModal} center>
            <AdminMatchesDetalis match={match} />
            </Modal>
        </div>
      
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    deleteMatch: (match) => dispatch(deleteMatch(match))
  }
}
export default connect(null,mapDispatchToProps)(AdminMatches)
