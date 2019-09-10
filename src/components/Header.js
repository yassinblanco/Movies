import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand className="ml-5" href="/">
          BestOfMovies
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse className="mr-5" isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/contactus">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">
                <Button color="success" size="lg">
                  Login
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
