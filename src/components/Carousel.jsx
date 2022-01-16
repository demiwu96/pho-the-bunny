import * as React from 'react';
import styled from 'styled-components';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  img {
    height: 100%;
    width: auto;
    max-width: 100%;
  }
`;

const PhotoCarousel = () => {
  const [photoIndex, setPhotoIndex] = React.useState(0);

  const photoList = [
    {
      altText: 'Slide 1',
      key: 1,
      src: 'https://i.ibb.co/8xFtrzg/slide-5.jpg'
    },
    {
      altText: 'Slide 2',
      key: 2,
      src: 'https://i.ibb.co/474qnVn/slide-2.jpg'
    },
    {
      altText: 'Slide 3',
      key: 3,
      src: 'https://i.ibb.co/ky8Bwc1/slide-3.jpg'
    },
    {
      altText: 'Slide 4',
      key: 4,
      src: 'https://i.ibb.co/tHkRS61/slide-4.jpg'
    }
  ];

  const itemLength = photoList.length - 1;

  const goToPrev = () => {
    const nextIndex = photoIndex === 0 ? itemLength : photoIndex - 1;
    setPhotoIndex(nextIndex);
  };

  const goToNext = () => {
    const nextIndex = photoIndex === itemLength ? 0 : photoIndex + 1;
    setPhotoIndex(nextIndex);
  };

  const renderCarouselItems = () => {
    return photoList.map((item) => (
      <CarouselItem
        onExited={function noRefCheck() {}}
        onExiting={function noRefCheck() {}}
      >
        <img alt={item.altText} src={item.src} height={800} />
      </CarouselItem>
    ));
  };

  return (
    <CarouselContainer>
      <Carousel
        activeIndex={photoIndex}
        next={() => goToNext()}
        previous={() => goToPrev()}
      >
        {renderCarouselItems()}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={() => goToPrev()}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={() => goToNext()}
        />
      </Carousel>
    </CarouselContainer>
  );
};

export default PhotoCarousel;
