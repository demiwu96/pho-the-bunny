import styled from 'styled-components';

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

const GameHeader = ({title, gameDescription}) => {
  return(
  <>
    <GameTitle>{title}</GameTitle>
    <Description>
      {gameDescription}
    </Description>
    ƒ
  </>
  );
};

export default GameHeader;
