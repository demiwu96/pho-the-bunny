import styled from 'styled-components';
import Task from '../components/Task';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { useState } from 'react';

const DateText = styled.span`
  color: ${({ theme }) => theme.colors.colorTextRed};
  font-size: 3rem;
  font-weight: 600;
`;

const Container = styled.div`
  padding: 5rem;
  .fa-chevron-left,
  .fa-chevron-right {
    font-size: 2rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    color: ${({ theme }) => theme.colors.colorTextRed};
    cursor: pointer;
  }
`;

const AddButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.colorTextRed};
  border: none;
  color: ${({ theme }) => theme.colors.colorPureWhite};
  margin-left: 3rem;
  margin-bottom: 1rem;
`;

const ToDoList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const taskList = [
    { text: 'Cooking', completed: true },
    { text: 'This is a long long long long long long long long long long long long long long long long task', completed: false },
    { text: 'Cleaning', completed: true },
    { text: 'Go grocery', completed: false }
  ];

  const renderTasks = () => {
    return taskList.map((item) => <Task item={item} />);
  };

  return (
    <Container fluid>
      <i class="fas fa-chevron-left"></i>
      <DateText>Today</DateText>
      <i class="fas fa-chevron-right"></i>
      <AddButton color="light" onClick={()=>{setIsModalOpen(true)}}>
        <i class="fas fa-plus"></i> New Task
      </AddButton>
      <Modal centered returnFocusAfterClose={false} isOpen={isModalOpen} >
        <ModalHeader>Add New Task</ModalHeader>
        <ModalBody>
        <Input placeholder="Enter your task here"/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>{setIsModalOpen(!isModalOpen)}}>
            Done
          </Button>{' '}
          <Button onClick={()=>{setIsModalOpen(!isModalOpen)}}>Cancel</Button>
        </ModalFooter>
      </Modal>
      {renderTasks()}
    </Container>
  );
};

export default ToDoList;
