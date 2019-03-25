import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './main/components/Header';
import Footer from './main/components/Footer';
import Home from './main/Home';
/*
import Register from './main/components/Register';
import ChangePassword from './main/components/ChangePassword';
import Profile from './main/components/Profile';
*/
import { store } from './redux/store';
import './App.css';
/*
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './redux/actions/main/authentication';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
} */
class App extends Component {
   render() {
      return (
        <Provider store = { store }>
        <Router>
            <div>
            
            <Header />          
            <div style={{ marginTop: '67px' }}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Home} />
                {/*<Route path='/register' component={ Register } />
                <Route path='/profile' component={ Profile } />
                <Route path='/change-password' component={ ChangePassword } />*/}
            </Switch>
            </div>
            <Footer />
            
          </div>
          </Router>
        </Provider>
      );
   }
}
export default App;