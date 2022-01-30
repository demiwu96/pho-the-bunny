import styled from 'styled-components';
import Card from 'components/Card';
import Title from 'components/Title';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Free = () => {
  const appList = [
    {
      title: 'Calendar',
      text: '',
      imgAlt: 'screenshoot of calendar app',
      src: 'https://i.pinimg.com/originals/a9/74/a0/a974a07fa8fb4b9e52f7cbd785e86cd5.jpg',
      url: '/phothebunny/calendar',
      button: 'Go'
    },
    {
      title: 'App 2',
      text: '',
      imgAlt: 'screenshoot',
      src: 'https://i.pinimg.com/originals/a9/74/a0/a974a07fa8fb4b9e52f7cbd785e86cd5.jpg',
      url: '/phothebunny/app-2',
      button: 'Go'
    },
    {
      title: 'App 3',
      text: '',
      imgAlt: 'screenshoot',
      src: 'https://i.pinimg.com/originals/a9/74/a0/a974a07fa8fb4b9e52f7cbd785e86cd5.jpg',
      url: '/phothebunny/app-3',
      button: 'Go'
    }
  ];

  const renderInfoCards = () => {
    return appList.map((item) => <Card item={item} />);
  };

  return (
    <>
      <Title content={'Free Apps'} />
      <CardContainer>{renderInfoCards()}</CardContainer>
    </>
  );
};

export default Free;
