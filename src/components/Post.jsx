import styled from 'styled-components';

const PostContainer = styled.div`
width: 100%;
margin-bottom: 2rem;
flex: 1;
`;

const PostImg = styled.img`
  width: 30rem;
  height: 20rem;
  object-fit: cover;
`;

const PostInfo = styled.div`
  font-weight: bold;
  .title {
    color: ${({ theme }) => theme.colors.colorTextRed};
    font-size: 1.8rem;
  }
  .date {
    padding-top: 1rem;
    color: ${({ theme }) => theme.colors.colorSemiDarkGray5};
    width: auto;
  }
  .more {
    padding-top: 3rem;
    color: ${({ theme }) => theme.colors.colorTextRed};
    width: auto;
  }
`;

const Post = ({ item, position }) => {
  console.log(position);
  return (
    <PostContainer>
      <PostImg
        src={item.img}
        alt={item.alt}
        width="100%"
        align={position}
      />
      <PostInfo>
        <span className="date">{item.createdAt}</span>
        <p className="title">{item.title}</p>
        <a className="more" href={item.url}>
          Read More...
        </a>
      </PostInfo>
    </PostContainer>
  );
};

export default Post;
