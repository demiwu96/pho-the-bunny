import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardImg
} from 'reactstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 1rem 1rem;
  flex: 0 1 22rem;
`;

const CardButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.colorTextRed};
  border: none;
  font-size: 1.5rem;
  width: 100%;
  a{
    color:inherit;
    text-decoration:none;
  }
`;

const DisplayCard = ({ item }) => {
  return (
    <StyledCard body color="light" outline>
      <CardImg
        alt={item.imgAlt}
        src={item.src}
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">{item.title}</CardTitle>
        <CardText className="text-muted">
        {item.text}
        </CardText>
        <CardButton><a href={item.url}>Play</a></CardButton>
      </CardBody>
    </StyledCard>
  );
};

export default DisplayCard;
