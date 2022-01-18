import styled from 'styled-components';
import Title from 'components/Title';
import Card from 'components/Card';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Games = () => {
const gameList = [{
    title: "Eat All Carrots",
    text:"Help Pho eat as much carrots in 1 minute",
    imgAlt: "carrots",
    src:"https://i.pinimg.com/originals/a9/74/a0/a974a07fa8fb4b9e52f7cbd785e86cd5.jpg",
},{
    title: "How High Can You Jump",
    text:"",
    imgAlt: "",
    src:"https://c.tenor.com/pHI9FN2hLpUAAAAM/run-nyoom.gif",
}];

const renderGameCards = () => {
    return gameList.map((item) => (
      <Card item={item} />
    ));
  };
  return (
    <div>
      <Title content={'Games'} iconClass={'fas fa-gamepad'} />
      <CardContainer>
        {renderGameCards()}
      </CardContainer>
    </div>
  );
};

export default Games;
