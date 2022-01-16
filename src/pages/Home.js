import * as React from 'react';
import styled from 'styled-components';
import HomePageImg1 from 'assets/jpg/home-page-img-1.jpg';
import { Row, Col, Container } from 'reactstrap';
import About from 'pages/About';
import PhotoCarousel from 'components/Carousel';

const HomeContainer = styled(Container)`
  padding: 5rem;
  background-color: ${({ theme }) => theme.colors.colorBackgroundPaleRed}
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.colorTextRed};
  margin-top: 5rem;
  font-size: 3rem;
`;

const Content = styled.div`
  color: ${({ theme }) => theme.colors.colorSemiDarkGray5};
  margin-top: 3rem;
  font-size: 1.8rem;
`;

const IconContainer = styled.span`
  margin-left: 10%;
  margin-bottom: 2rem;
  font-size: 3rem;
  display: inline-block;
  color: ${({ theme }) => theme.colors.colorTextRed};
`;

const PictureWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
  width: 25rem;
  height: 33rem;
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.3);
  transform: rotate(-2deg);
  border: 15px solid #fff;
`;

const Home = () => {
  return (
    <HomeContainer fluid>
      <Row>
        <Col xs={12} md={6}>
          <Title>
            Hello, I am Pho <i class="far fa-heart"></i>
          </Title>
          <Content>
            Welcome to my website. You can:
            <ul>
              <li>Find information about me</li>
              <li>Play games with me</li>
              <li>Read my blog posts</li>
            </ul>
            If you are interested in vlog contents, please go to our social
            media.
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
          <PictureWrapper>
            <img src={HomePageImg1} alt="Pho" height={500} />
          </PictureWrapper>
        </Col>
      </Row>
      <About />
      <Row>
        <Col></Col>
        <Col xs={8}>
          <PhotoCarousel />
        </Col>
        <Col></Col>
      </Row>
    </HomeContainer>
  );
};

export default Home;
