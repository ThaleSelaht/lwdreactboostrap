import React from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

var navbarReact = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
      <a href="#">EIS</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
    <Nav>
    <NavItem eventKey={1} href="#">Home</NavItem>
    <NavItem eventKey={2} href="#">Edit Profile</NavItem>
    <NavDropdown eventKey={3} title="Help Desk" id="basicnav-dropdown">
    <MenuItem eventKey={3.1}>View Tickets</MenuItem>
    <MenuItem eventKey={3.2}>New Ticket</MenuItem>
    </NavDropdown>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default navbarReact;
