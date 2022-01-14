import * as React from 'react';
import styled from 'styled-components';
import theme from '../styles/index';
import image from '../assets/images/home page image.jpg';
import { Row, Col, Container } from 'reactstrap';

const HomeContainer = styled(Container)`
  padding: 80px;
  background-color: ${theme.colors.colorBackgroundPaleGray};
`;

const Title = styled.h1`
  color: ${theme.colors.colorTextRed};
  margin-top: 20px;
  font-size: 3rem;
`;

const Content = styled.div`
  color: ${theme.colors.colorSemiDarkGray5};
  margin-top: 40px;
  font-size: 1.8rem;
`;

const Footer = styled(Row)`
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-style: italic;
`;

const IconContainer = styled.span`
margin-left: 10%;
margin-bottom: 30px;
  font-size: 3rem;
  display: inline-block;
  color: ${theme.colors.colorTextRed};
`;

const PictureWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  width: 379px;
  height: 500px;
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.3);
  transform: rotate(-2deg);
  border: 15px solid #fff;
`;

const Home = () => {
  return (
    <HomeContainer fluid>
      <Row>
        <Col xs={12} md={6}>
          <Title>Hello, I am Pho <i class="far fa-heart"></i></Title>
          <Content>
            Welcome to my website. You can:
            <ul>
              <li>Find information about me</li>
              <li>Play games with me</li>
              <li>Read my blog posts</li>
            </ul>
            If you are interested in vlog contents, please go to our social media.
          </Content>
          <Row>
            <IconContainer>
              <i class="fab fa-instagram" style={{ margin: '10px 20px' }}></i>
              <i class="fab fa-tiktok" style={{ margin: '10px 20px' }}></i>
              <i class="fab fa-youtube" style={{ margin: '10px 20px' }}></i>
            </IconContainer>
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <PictureWrapper data-aos="zoom-in-left">
            <img src={image} alt="Pho" height={500} />
          </PictureWrapper>
        </Col>
      </Row>
      {/* <Row>
        <IconContainer>
            <i class="fab fa-instagram" style={{margin: "10px 20px"}}></i>
             <i class="fab fa-tiktok" style={{margin: "10px 20px"}}></i> 
            <i class="fab fa-youtube" style={{margin: "10px 20px"}}></i>
        </IconContainer>
      </Row> */}
      <Footer xs={12}>Copyright © 2022, All Rights Reserved</Footer>
    </HomeContainer>
  );
};

export default Home;
