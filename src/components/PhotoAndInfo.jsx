import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

const Info = styled.p`
  .fa-carrot {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.colorTextRed};
    padding-right: 0.5rem;
  }
  .genderIcon{
    color:${({theme})=>theme.colors.colorMediumBlue2};
    padding-left: 1rem;
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

const PhotoAndInfo = ({nameArray, infoArray, photo, imgAlt})=>{
    const renderNameAndGenderIcon = (nameArray)=>{
        return nameArray.map((item) => (
          <Info>
            <i class="fas fa-carrot"></i>
            Name: {item.name}
            <i class={`genderIcon ${item.genderIcon}`}></i>
          </Info>
        ))
      };

      const renderProfileInfo = (infoArray) => {
        return infoArray.map((item) => (
          <Info>
            <i class="fas fa-carrot"></i>
            {item}
          </Info>
        ));
      };

    return(
        <Row style={{ 'padding-top': '3rem' }}>
        <Col xs={12} md={6}>
          <PictureWrapper>
            <img src={photo} alt={imgAlt} height={350} />
          </PictureWrapper>
        </Col>
        <Col xs={12} md={6} style={{ 'padding-top': '5rem' }}>
        {renderNameAndGenderIcon(nameArray)}
        {renderProfileInfo(infoArray)}
        </Col>
      </Row>
    )

}

export default PhotoAndInfo;