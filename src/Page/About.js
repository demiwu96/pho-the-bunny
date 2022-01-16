import * as React from 'react';
import styled from 'styled-components';
import theme from '../styles/index';
import image from '../assets/images/profile image.jpg';
import { Row, Col } from 'reactstrap';

// const AboutContainer = styled(Row)`
// padding-top 80px;
// `

const Title = styled.h1`
  color: ${theme.colors.colorTextRed};
  margin-top: 20px;
  font-size: 3rem;
`;

const Info = styled.p`
  i {
    font-size: 1.8rem;
    color: ${theme.colors.colorTextRed};
    padding: 0px 15px 0px 0px;
  }
  font-size: 1.8rem;
  color: ${theme.colors.colorSemiDarkGray5};
`;

const PictureWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  position: relative;
  overflow: hidden;
  width: 490px;
  height: 350px;
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.3);
  transform: rotate(-2deg);
  border: 15px solid #fff;
`;

const About = () => {
  const infoList = [
    'Name: Pho',
    'Age: 1yr 3mths',
    'Breed: American',
    'Favorite food: cilantro, banana, carrots',
    'Hobby: eat & sleep, renovate my home',
    '',
    '',
    ''
  ];

  const renderProfileInfo = () => {
    return infoList.map((item) => (
      <Info>
        <i class="fas fa-carrot"></i>
        {item}
      </Info>
    ));
  };

  return (
    // <AboutContainer>
    <>
      <Row>
        <Title></Title>
      </Row>
      <Row>
        <Col xs={12} md={6}>
        <PictureWrapper>
            <img src={image} alt="Pho" height={350} />
          </PictureWrapper>
        </Col>
        <Col xs={12} md={6} style={{"padding-top": "50px"}}>
          {renderProfileInfo()}
        </Col>
      </Row>
    </>

    // </AboutContainer>
  );
};

export default About;
