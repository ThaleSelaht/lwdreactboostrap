import React from 'react';
import ReactDOM from 'react-dom';
import navbarReact from './Navigation';
import Sidebar from './Sidebar';
import MyApp from './MessagePanel';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';

ReactDOM.render(
  navbarReact,
  document.getElementById('nav')
);

ReactDOM.render(
  Sidebar, 
  document.getElementById('sidebar')
);

ReactDOM.render(
  <MyApp />, 
  document.getElementById('teste')
);