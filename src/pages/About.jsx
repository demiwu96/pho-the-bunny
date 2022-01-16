import * as React from 'react';
import styled from 'styled-components';
import HomePageImg1 from 'assets/jpg/home-page-img-2.jpg';
import { Row, Col } from 'reactstrap';

const Info = styled.p`
  .fa-carrot {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.colorTextRed};
    padding: 0px 15px 0px 0px;
  }
  .fa-mars{
    color:${({theme})=>theme.colors.colorMediumBlue2};
  }
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.colorSemiDarkGray5};
`;

const PictureWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
  width: 30rem;
  height: 23.8rem;
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.3);
  transform: rotate(-2deg);
  border: 15px solid #fff;
`;

const About = () => {
  const infoList = [
    'Age: 1yr 3mths',
    'Breed: American',
    'Favorite food: cilantro, banana, carrots',
    'Hobby: eat & sleep, renovate my home'
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
    <>
      <Row style={{ 'padding-top': '3rem' }}>
        <Col xs={12} md={6}>
          <PictureWrapper>
            <img src={HomePageImg1} alt="Pho" height={350} />
          </PictureWrapper>
        </Col>
        <Col xs={12} md={6} style={{ 'padding-top': '5rem' }}>
        <Info>
        <i class="fas fa-carrot"></i>
        Name: Pho <i class="fas fa-mars"></i>
      </Info>
          {renderProfileInfo()}
        </Col>
      </Row>
    </>
  );
};

export default About;
