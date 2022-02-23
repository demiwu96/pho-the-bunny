import Title from 'components/Title';
import Post from 'components/Post';
import styled from 'styled-components';

const BlogPostContainer = styled.div`
  margin: 5rem;
`;

const PostRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.3rem;
`;

const Blog = () => {
  const postList = [
    {
      title: 'Pho got adopted',
      img: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Ufenau_-_Oryctolagus_cuniculus_2011-07-25_17-33-40.jpg',
      url: 'youtube.com',
      alt: 'rabbit',
      createdAt: 'Jan. 26, 2021 Wed'
    },
    {
      title: "Pho's favorite treats",
      img: 'https://www.popsci.com/uploads/2020/07/20/W2NSRFJ7ZZBT3OMTMN2ZTGREJE.jpg?auto=webp&width=1440&height=1080',
      url: 'youtube.com',
      alt: 'rabbit',
      createdAt: 'Jan. 28, 2021 Fri'
    },
    {
      title: 'Average Monthly Cost for Having A Rabbit',
      img: 'https://www.envigo.com/hubfs/resources/model-images/dutch-belted.png',
      url: 'youtube.com',
      alt: 'rabbit',
      createdAt: 'Jan. 5, 2021 Wed'
    },
    {
      img: 'https://www.collinsdictionary.com/images/full/rabbit_274039655.jpg'
    },
    {
      img: 'https://images.pexels.com/photos/2362002/pexels-photo-2362002.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      img: 'https://www.aphis.usda.gov/wcm/connect/b7cf6397-3e09-4fdb-b2bc-120bfc97483a/1/rabbit-import-banner.png?MOD=AJPERES&CVID='
    },
    {
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rabbit-breeds-american-white-1553635287.jpg?crop=0.976xw:0.651xh;0.0242xw,0.291xh&resize=480:*'
    }
  ];

  const renderPosts = () => {
    return postList.map((item, index) => {
      if (index % 2 === 0){
        return (<Post item={item} position="right" />)
      } else {
        return <Post item={item} position="left" />
      }
  }
    );
  };

  return (
    <BlogPostContainer>
      <Title content={'My Posts'} />
      <PostRow>{renderPosts()}
      </PostRow>
    </BlogPostContainer>
  );
};

export default Blog;
