
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/LogIn/Login/Login';
import Register from './Pages/LogIn/Register/Register.js';
import AuthProvider from './Contexts/AuthProvider/AuthProvider.js';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute.js';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard.js';
import Footer from './Pages/Shared/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Switch>
          <PrivateRoute path="/appointment">
            <Appointment />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          </Switch>
          <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
