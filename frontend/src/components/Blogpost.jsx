import styled from "styled-components";

const Article = styled.article`
  background-color: pink;
  width: 90%;
  margin: 5rem auto;
  text-align: center;
`;

const Header = styled.header`
  border: 1px solid red;
  pedding: 2rem;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const Author = styled.h2`
  font-size: 18px;
`;

const Body = styled.p`
  padding: 2rem;
`;

const Button = styled.button`
  padding: 1rem;
  margin: 1rem;
`;

const Blogpost = (props) => {
  return (
    <Article>
      <Header>
        <Title>{props.title}</Title>
        <Author>{props.author}</Author>
      </Header>
      <Body>{props.body}</Body>
      <Button>Edit</Button>
    </Article>
  );
};

export default Blogpost;
