import * as React from 'react';
import styled from 'styled-components';
import GamePage from './GamePage';

const EatAllCarrotsWrapper = styled.div``;

const ClickableCarrot = () => {
  const [count, setCount] = React.useState(0);
  const [position, setPosition] = React.useState({ x: '', y: '' });

  const CarrotIcon = styled.i`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.colorTextRed};
    transform:translate(${position.x},${position.y});
  `;

  const ScoreCount = styled.span`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.colorTextRed};
    position: absolute;
    right: 7rem;
  `;

  const changePosition = () => {
    // miss the heiht and width of the parent
    // if height = 100, then y can only between
    const gameArea = document
      .getElementById('game-area')
      .getBoundingClientRect();
    // console.log(gameArea);

    const rand = Math.random();
    const multipler = rand <= 0.5 ? 1 : -1;

    const xBound = gameArea.bottom - gameArea.top;
    const yBound = gameArea.right - gameArea.left;

    let x = Math.floor(Math.random() * xBound).toFixed() * multipler *0.5 ;
    let y = Math.floor(Math.random() * yBound).toFixed() * multipler *0.5  ;

    console.log(x, y);

    setPosition({ x: `${x}px`, y: `${y}px` });

    setTimeout(changePosition, 1200);
  };

  React.useEffect(() => {
    changePosition();
  }, []);

  return (
    <>
      <ScoreCount>Score: {count}</ScoreCount>
      <CarrotIcon
        className="fas fa-carrot"
        onClick={() => {
          setCount(count + 1);
        }}
      ></CarrotIcon>
    </>
  );
};

const EatAllCarrots = () => {
  const eatAllCarrotsInfo = {
    title: 'Eat All Carrots',
    description:
      'Click as many carrots as you can in 1 minute. Press the button to start the game.'
  };

  return (
    <EatAllCarrotsWrapper>
      <GamePage
        gameInfo={eatAllCarrotsInfo}
        childComponent={<ClickableCarrot />}
      />
    </EatAllCarrotsWrapper>
  );
};

export default EatAllCarrots;
