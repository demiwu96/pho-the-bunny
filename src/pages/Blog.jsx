import Title from 'components/Title';
import Post from 'components/Post';

const Blog = () => {
  const postList = [
    {
      title: 'Pho got adopted',
      img: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Ufenau_-_Oryctolagus_cuniculus_2011-07-25_17-33-40.jpg',
      url: 'youtube.com',
      alt: 'rabbit',
      createdAt: "Jan. 26, 2021 Wed"
    },
    {
      title: "Pho's favorite treats",
      img: 'https://www.popsci.com/uploads/2020/07/20/W2NSRFJ7ZZBT3OMTMN2ZTGREJE.jpg?auto=webp&width=1440&height=1080',
      url: 'youtube.com',
      alt: 'rabbit',
      createdAt: "Jan. 28, 2021 Fri"
    },
    {
      title: 'Average Monthly Cost for Having A Rabbit',
      img: 'https://www.envigo.com/hubfs/resources/model-images/dutch-belted.png',
      url: 'youtube.com',
      alt: 'rabbit',
      createdAt: "Jan. 5, 2021 Wed"
    }
  ];

  const renderPosts = () => {
    return postList.map((item) => (
      <Post item={item}/>
    ));
  };

  return (
    <>
      <Title content={'My Posts'} />
      {renderPosts()}
    </>
  );
};

export default Blog;
