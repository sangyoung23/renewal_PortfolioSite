import styled from "@emotion/styled";

const Title = styled.h1`
  font-weight: 800;
  text-align: center;
  margin-bottom: 50px;
`;

const AboutDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const AboutItem = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  div {
    text-align: center;
    margin-bottom: 20px;
  }
  div p {
    font-size: 1rem;
  }
  div p a {
    font-size: 1rem;
    color: black;
    text-decoration: none;
  }
  div p a:hover {
    color: red;
  }
  .icon {
    font-size: 2rem;
    color: #85bfe6;
    margin-bottom: 10px;
  }
  @media (max-width: 756px) {
    div p {
      font-size: 0.8rem;
    }
    div p a {
      font-size: 0.8rem;
    }
  }
`;

export { Title, AboutDiv, AboutItem };
