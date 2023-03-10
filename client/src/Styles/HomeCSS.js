import styled from "@emotion/styled";

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  margin-bottom: 40px;
  div:first-of-type {
    font-size: 4rem;
    text-align: center;
    line-height: 120px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 15px;
    background-color: black;
  }
  div:last-of-type {
    width: 180px;
    height: 40px;
    border-radius: 5px;
    background-color: #0066ff;
    p {
      text-align: center;
      line-height: 40px;
      color: white;
    }
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 15px;
  }
`;

export { HomeDiv };
