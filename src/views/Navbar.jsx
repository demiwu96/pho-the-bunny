import * as React from 'react';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler
} from 'reactstrap';
import styled from 'styled-components';

const NavTitle = styled(NavbarBrand)`
  font-size: 1.7rem;
  padding-left: 3rem;
`;
const StyledNavLink = styled(NavLink)`
  font-size: 1.2rem;
  @media only screen and (max-width: 768px) {
    padding-left: 3rem !important;
  }
`;

const navTab = [
  { label: 'About', url: '/about' },
  { label: 'Play With Me', url: '/games' },
  { label: 'Blog', url: '/blog' },
  {label: 'Free', url:'/freestuff'}
];

const renderNavLink = (navTab) => {
  return navTab.map((item) => (
    <NavItem>
      <StyledNavLink href={item.url}>{item.label}</StyledNavLink>
    </NavItem>
  ));
};

const TopNavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" fixed="top">
      <NavTitle href="/">Pho the Bunny</NavTitle>
      <NavbarToggler onClick={toggle} />
      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          {renderNavLink(navTab)}
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export default TopNavBar;
