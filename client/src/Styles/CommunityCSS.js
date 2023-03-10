import styled from "@emotion/styled";

const CommunityDiv = styled.div`
  height: 550px;
  padding: 30px;
  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
  @media (max-width: 756px) {
    height: 100%;
  }
`;

const CommunityHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  border-bottom: 1px solid #ccc;
  div:first-of-type {
    font-size: 1.2rem;
    font-weight: 800;
    width: 20%;
  }
  .contentBox {
    width: 80%;
    font-weight: 800;
    font-size: 1.1rem;
  }
  .icon {
    font-size: 1.3rem;
  }
`;

const WriteButton = styled.button`
  border: none;
  background: none;
`;

const PostDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  border-bottom: 1px solid #ccc;
  div:first-of-type {
    font-size: 1.2rem;
    width: 20%;
  }
  .contentBox {
    width: 70%;
  }
  .custom {
    display: flex;
    justify-content: right;
    width: 10%;
  }
  .custom button {
    border: none;
    border-radius: 10px;
    color: white;
    background-color: #0066ff;
  }
  .custom button:first-of-type {
    margin-right: 10px;
  }
  .custom button:hover {
    border: 1px solid black;
    color: black;
    background-color: white;
  }
`;

const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      display: inline-block;
      width: 30px;
      height: 30px;
      border: 1px solid #e2e2e2;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      a {
        text-decoration: none;
      }
    }
    li:hover {
      a {
        color: white;
      }
      background-color: #0066ff;
    }
  }
`;

export { CommunityDiv, PostDiv, WriteButton, CommunityHeader, PaginationBox };
