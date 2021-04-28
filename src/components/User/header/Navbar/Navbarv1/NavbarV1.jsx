import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import LogoEquity from "../../../../../assets/images/logos/Logo.png"
import Style from "./NavbarV1.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";

class NavbarV1 extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (

      <MDBNavbar className={Style.NavbarCon} white expand="md">
        <MDBNavbarBrand>
         <img className={Style.gambarEquity} src={LogoEquity} alt=""/>
        </MDBNavbarBrand>
        <MDBNavbarToggler  onClick={this.toggleCollapse}> <FontAwesomeIcon icon={faBars} /></MDBNavbarToggler>

        <MDBCollapse  id='navbarCollapse1' text-dark isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="/">Customers</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="">Solutions</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="">Partners</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="">About Us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <button className="navbarLogin">LOG IN</button>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">France</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              
            </MDBNavItem>
            <MDBNavItem>
            <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">EN</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>

    );
  }
}

export default NavbarV1;