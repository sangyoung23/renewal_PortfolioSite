import styled from "@emotion/styled";

const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  h1 {
    font-weight: 800;
    margin: 50px 0;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 100vh;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  div img {
    width: 70%;
  }
  @media (max-width: 756px) {
    div {
      height: 40%;
    }
    div img {
      width: 90%;
      height: 40%;
    }
    height: 50vh;
  }
`;

export { SkillDiv };
