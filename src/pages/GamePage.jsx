import * as React from 'react';
import styled from 'styled-components';
import CountdownTimer from 'components/CountdownTimer';
import { Button } from 'reactstrap';
import GameHeader from 'components/GameHeader';

const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0rem 5rem 0rem 5rem;
  margin-bottom: 8rem;
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

const GamePage = ({ gameInfo, childComponent }) => {

  const [showButton, setShowButton] = React.useState(true);
  const [backgroundColor, setBackgroundColor] = React.useState('#CACACA');
  const [startTime, setStartTime] = React.useState();
  const [isGameStart, setIsGameStart] = React.useState(false);

  const GameArea = styled.div`
    background-color: ${backgroundColor};
    height: 300px;
    width: 400px;
    text-align: center;
  `;

  const StartGame = () => {
    setShowButton(false);
    setBackgroundColor('#fff');
    setStartTime(60);
    setIsGameStart(true);
  };

  return (
    <div>
      <GameHeader
        title={gameInfo.title}
        gameDescription={gameInfo.description}
      />
      <GameContainer id="game-container">
        {/* <ScoreCount>Score: {score}</ScoreCount> */}
        <GameArea id="game-area">
          <CountdownTimer startTime={startTime} isGameStart={isGameStart} />
          {showButton && <StartButton onClick={StartGame}>Start</StartButton>}
          {childComponent}
        </GameArea>
      </GameContainer>
    </div>
  );
};

export default GamePage;
