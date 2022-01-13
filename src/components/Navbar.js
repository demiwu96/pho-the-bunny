import * as React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

const TopNavBar = () => {
  const navTab = ['Home', 'About', 'Play With Me', 'Blog'];

  const renderNavLink = () => {
    return navTab.map((item) => (
      <NavItem>
        <NavLink to={`/${item.toLocaleLowerCase()}`}>{item}</NavLink>
      </NavItem>
    ));
  };

  return (
    <Navbar color="dark" dark expand="md" fixed="top">
      <NavbarBrand href="/">Pho the Bunny</NavbarBrand>
      <Nav tabs>{renderNavLink()}</Nav>
    </Navbar>
  );
};
export default TopNavBar;
