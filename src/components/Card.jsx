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
  border-radius: 10px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 8px 22px 0 rgba(0, 0, 0, 0.19);
`;

const CardButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.colorTextRed};
  border: none;
  font-size: 1.5rem;
  width: 100%;
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
        <a href={item.url}><CardButton>{item.button}</CardButton></a>
      </CardBody>
    </StyledCard>
  );
};

export default DisplayCard;
