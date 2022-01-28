import styled from 'styled-components';
import { Row, Container, Col } from 'reactstrap';

const PostContainer=styled(Container)`
padding: 3rem 0;
`;

const PostTitle = styled.p`
color: ${({ theme }) => theme.colors.colorTextRed};
font-weight: bold;
font-size: 3rem;
`;
const PostDate = styled.span`
font-weight: bold;
color: ${({ theme }) => theme.colors.colorSemiDarkGray5};
`;
const ReadMore = styled.a`
padding-top: 3rem;
color: ${({ theme }) => theme.colors.colorTextRed};
`;

const Post = ({item}) => {
//   const renderPosts = (postArray) => {
//     return postArray.map((item) => (
//       <Row>
//         <Col>
//           <img src={item.img} alt={item.alt} width="500" />
//         </Col>
//         <Col>
//           <Row>
//             <PostDate>{item.createdAt}</PostDate>
//           </Row>
//           <Row>
//             <PostTitle>{item.title}</PostTitle>
//           </Row>
//           <Row>
//             <ReadMore href={item.url}>More...</ReadMore>
//           </Row>
//         </Col>
//       </Row>
//     ));
//   };

  return (
    <PostContainer>
      <Row>
        <Col>
          <img src={item.img} alt={item.alt} width="500" />
        </Col>
        <Col>
          <Row>
            <PostDate>{item.createdAt}</PostDate>
          </Row>
          <Row>
            <PostTitle>{item.title}</PostTitle>
          </Row>
          <Row>
            <ReadMore href={item.url}>More...</ReadMore>
          </Row>
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <img
            alt="rabbits"
            src="https://images.wideopenpets.com/wp-content/uploads/2019/09/Bunny-vs-Rabbit-vs-Hare.png"
            width="500"
          />
        </Col>
        <Col>
          <Row>
            <PostDate>Jan. 27, 2021 Thu</PostDate>
          </Row>
          <Row>
            <PostTitle>Title here</PostTitle>
          </Row>
          <Row>
            <ReadMore>More...</ReadMore>
          </Row>
        </Col>
      </Row> */}
    </PostContainer>
  );
};

export default Post;
