import HomePageImg1 from 'assets/jpg/home-page-img-2.jpg';
import PhotoAndInfo from 'components/PhotoAndInfo';

const About = () => {
  const infoList = [
    'Age: 1yr 3mths',
    'Breed: American',
    'Favorite food: cilantro, banana, carrots',
    'Hobby: eat & sleep, renovate my home'
  ];

  const name = [
    {name: "Pho",
    genderIcon: 'fas fa-mars'}
  ]

  return (
    <>
    <PhotoAndInfo nameArray={name} infoArray={infoList} photo={HomePageImg1} imgAlt={"Pho the bunny"}/>
    </>
  );
};

export default About;
