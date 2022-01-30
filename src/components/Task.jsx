import { useState } from 'react';
import styled from 'styled-components';

const TaskRow = styled.div`
  font-size: 1.8rem;
  background-color: ${({ theme }) => theme.colors.colorPureWhite};
  width: 80%;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  box-shadow: 5px 5px 5px #aaaaaa;
  .far {
    margin-left: 1rem;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.colorMediumGray12};
  }
  .fas {
    margin-left: 1rem;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.colorConnectedGreen};
  }
`;

const Task = ({ item}) => {

  return (
    <TaskRow>
      {item.completed ? (
        <i class="fas fa-check-square"></i>
      ) : (
        <i class="far fa-check-square"></i>
      )}
      {item.text}
    </TaskRow>
  );
};

export default Task;
