import React,{Component} from 'react'
import Modal from 'react-responsive-modal';
import AdminMatches from './AdminMatches'
import AdminMatchesAdd from './AdminMatchesAdd';


class AdminInfo extends Component{
  state = {
    open: false
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  render(){
    const { open } = this.state;
    const { users, matches } = this.props


  return (
     <div>  <button className="btn btn-success " onClick={this.onOpenModal}>Dodaj mecz</button>
            {matches && matches.map(match=>{
              return <AdminMatches match={match}/> 
            })}
            

            <Modal open={open} onClose={this.onCloseModal} center>
            <div className="d-flex flex-column">
              <h4>Dodaj gracza</h4>
              <p>Wybierz drużyny oraz czas w którm zostanie rozegrany mecz kwalifikacyjny</p>
              <AdminMatchesAdd users={users}/>
            </div>
            </Modal>
        

    </div>
  )
}
}
export default AdminInfo
