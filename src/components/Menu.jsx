import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse, Nav, Navbar,
  NavbarToggler, NavItem
} from "reactstrap";

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="dark" dark expand="md">
      <Link className="nav_links" to="/">
        LOGO
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <Link className="nav_links" to="/">
            <NavItem>Home</NavItem>
          </Link>
          <Link className="nav_links" to="/add">
            <NavItem>Add User</NavItem>
          </Link>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

Menu.propTypes = {};

export default Menu;
