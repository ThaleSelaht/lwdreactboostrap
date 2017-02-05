import ReactDOM from 'react-dom';
import navbarReact from './Navigation';
import Sidebar from './Sidebar';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';

ReactDOM.render(
  navbarReact,
  document.getElementById('root')
);

ReactDOM.render(
  Sidebar, 
  document.getElementById('sidebar')
);
