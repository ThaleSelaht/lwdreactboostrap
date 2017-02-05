import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
        <div className="col-lg-6">
        <form>
        <h1>Login Form</h1>
        <hr/>
        <div className="form-group">
        <label htmlFor="emailInput">Email address</label>
        <input type="email" className="form-control"
        id="emailInput" placeholder="Email"/>
        </div>
        <div className="form-group">
        <label htmlFor="passwordInput">Password</label>
        <input type="password" className="form-control"
        id="passwordInput" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-default col-xs-offset-9 col-xs-3">
        Submit
        </button>
        </form>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
