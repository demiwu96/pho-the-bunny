import * as React from 'react';
import styled from 'styled-components';
import GamePage from './GamePage';

const EatAllCarrotsWrapper = styled.div``;

const EatAllCarrots = () => {
const eatAllCarrotsInfo = {title: "Eat All Carrots",description: "Click as many carrots as you can in 1 minute. Press the button to start the game."};

  return (
    <EatAllCarrotsWrapper>
      <GamePage gameInfo={eatAllCarrotsInfo} />
    </EatAllCarrotsWrapper>
  );
};

export default EatAllCarrots;
