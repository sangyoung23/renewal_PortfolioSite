import styled from "@emotion/styled";

const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 800;
    text-align: center;
    margin-bottom: 50px;
  }
  div {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 30px;
  }
  padding: 60px;
  @media (max-width: 756px) {
    height: auto;
  }
  div {
    flex-wrap: wrap;
  }
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0 20px;
  h3 {
    font-weight: 700;
    color: black;
    margin-bottom: 10px;
  }
  p {
    font-weight: 600;
    color: gray;
  }
  div {
    width: 30%;
    border: 1px solid black;
  }
  a {
    color: #0066ff;
    text-decoration: none;
  }
  a:hover {
    color: tomato;
  }
  @media (max-width: 756px) {
    h3,
    p,
    a {
      font-size: 1rem;
    }
    div {
      width: auto;
      padding: 0.2rem;
    }
    height: auto;
  }
`;

export { ProjectDiv, ProjectItem };
