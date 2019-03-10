import React, { Component } from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Welcome from './components/front/Welcome'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import CreatePlayer from './components/players/CreatePlayer'
import AdminDashboard from './components/admin/AdminDashboard';
 
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />
          <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/create' component={CreatePlayer} />
          <Route path='/admin' component={AdminDashboard} />
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
