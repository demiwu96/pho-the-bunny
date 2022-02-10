import styled from 'styled-components';

const TaskRow = styled.div`
  display: flex;
  font-size: 1.8rem;
  background-color: ${({ theme }) => theme.colors.colorPureWhite};
  width: 80%;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  box-shadow: 5px 5px 5px #aaaaaa;
  padding: 0.2rem;
  .fa-check-square{
    margin-left: 1rem;
    margin-right: 0.5rem;
    padding-top: 0.5rem;
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.colors.colorHoverCheckboxGreen};
    }
  }
  .far {
    color: ${({ theme }) => theme.colors.colorMediumGray12};
  }
  .completed {
    color: ${({ theme }) => theme.colors.colorCompletedGreen};
  }
`;

const CloseButtonContainer = styled.span`
flex: 1;
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

const Task = ({ item, completeTask, deleteTask }) => {
  return (
    <TaskRow>
      {item.completed ? (
        <i className="fas fa-check-square completed"></i>
      ) : (
        <i className="far fa-check-square" onClick={completeTask}></i>
      )}
      {item.text}
      <CloseButtonContainer>
        <i className="fas fa-times" onClick={deleteTask}></i>
      </CloseButtonContainer>
    </TaskRow>
  );
};

export default Task;
