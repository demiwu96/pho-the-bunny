import styled from 'styled-components';

const FooterContainer = styled.footer`
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  font-style: italic;
  
`;

const Footer = () => {
  return <FooterContainer>Copyright © 2022, All Rights Reserved</FooterContainer>;
};

export default Footer;
