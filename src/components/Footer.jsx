import styled from 'styled-components';

const FooterContainer = styled.footer`
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  font-style: italic;
  position: fixed;
  bottom: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color:${({ theme }) => theme.colors.colorPureWhite};
`;

const Footer = () => {
  return <FooterContainer>Copyright © 2022, All Rights Reserved</FooterContainer>;
};

export default Footer;
