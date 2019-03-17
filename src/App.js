import React, { Component } from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Welcome from './components/front/Welcome'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import CreatePlayer from './components/players/CreatePlayer'
import AdminDashboard from './components/admin/AdminDashboard';
import Navbar from './components/layout/Navbar';
 
class App extends Component {
  render() {
    const url = window.location.href
    const pathname = new URL(url).pathname;
    console.log(this.props)
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar location = {pathname} />
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
