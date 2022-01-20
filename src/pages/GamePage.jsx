import * as React from 'react';
import styled from 'styled-components';
import CountdownTimer from 'components/CountdownTimer';
import { Button } from 'reactstrap';

const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 5rem 0rem 5rem;
  margin-bottom: 3rem;
`;

const GameTitle = styled.h2`
  padding-top: 6rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.colorTextRed};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.colorSemiDarkGray5};
  text-align: center;
  padding: 1rem 2rem;
`;

const StartButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.colorTextRed};
  border: none;
  font-size: 3rem;
  width: 10rem;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const GamePage = () => {
  const [showButton, setShowButton] = React.useState(true);
  const [backgroundColor, setBackgroundColor] = React.useState("#CACACA");
  const [startTime, setStartTime] = React.useState();

  const GameArea = styled.div`
    background-color: ${backgroundColor};
    height: 30rem;
    flex: 1 1 15rem;
    text-align: center;  
  `;

  const StartTheGame = () => {
    setShowButton(false);
    setBackgroundColor("#fff");
    setStartTime(60);
  };

  return (
    <div>
      <GameTitle>Eat All Carrots</GameTitle>
      <Description>
        Click the carrot when it appears on the screen. See how many can you get
        in 1 minute. Click the button to start.
      </Description>
      <GameContainer>
        <GameArea>
        <CountdownTimer startTime={startTime} />
          {showButton && (
            <StartButton
              onClick={StartTheGame}
            >
              Start
            </StartButton>
          )}
        </GameArea>
      </GameContainer>
    </div>
  );
};

export default GamePage;
