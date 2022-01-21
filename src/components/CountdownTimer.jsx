import * as React from 'react';
import styled from 'styled-components';

const Time = styled.p`
  padding-top: 1rem;
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.colorTextRed};
`;

const CountdownTimer = ({ startTime, isGameStart }) => {
  const [timeLeftState, setTimeLeft] = React.useState(startTime);

  const startTimer = () => {
    let timerInterval;
    const countDown = () => {
      let seconds = startTime - 1;
      startTime = seconds;
      setTimeLeft(seconds);
      console.log(seconds);
      if (seconds === 0) {
        clearInterval(timerInterval);
      }
    };
    timerInterval = setInterval(countDown, 1000);
  };

  React.useEffect(()=>{
    if (isGameStart){
      startTimer();
    }
  }, []);

  return (
    <>
      <Time>{timeLeftState}</Time>
    </>
  );
};

export default CountdownTimer;
