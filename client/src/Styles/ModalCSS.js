import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
  &:active,
  &:focus {
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  resize: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
  &:active,
  &:focus {
    outline: none;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 15px;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: #c6c6c6;
    border-radius: 15px;
    box-shadow: inset 0px 0px 5px whitesmoke;
  }
`;

export { Input, Textarea };
