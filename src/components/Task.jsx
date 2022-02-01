import { useState } from 'react';
import styled from 'styled-components';
import theme from 'styles';

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
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.colors.colorHoverCheckboxGreen};
    }
  }
  .completed {
    margin-left: 1rem;
    margin-right: 0.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.colorCompletedGreen};
    :hover {
      color: ${({ theme }) => theme.colors.colorHoverCheckboxGreen};
    }
  }
  .fa-times {
    color: ${({ theme }) => theme.colors.colorMediumGray12};
    float: right;
    padding: 0.6rem 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    :hover {
      color: ${({ theme }) => theme.colors.colorPureBlack};
    }
  }
`;

const Task = ({ item }) => {
  return (
    <TaskRow>
      {item.completed ? (
        <i class="fas fa-check-square completed"></i>
      ) : (
        <i class="far fa-check-square"></i>
      )}
      {item.text}
      <i class="fas fa-times"></i>
    </TaskRow>
  );
};

export default Task;
