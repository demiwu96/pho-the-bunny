import styled from 'styled-components';

const PinkTitle = styled.h1`
  color: ${({ theme }) => theme.colors.colorTextRed};
  margin-top: 5rem;
  font-size: 3rem;
  padding-left: 2rem;
`;

const Title = ({content, iconClass}) => {
  return <PinkTitle>{content} <i className={iconClass}></i></PinkTitle>;
};

export default Title;
