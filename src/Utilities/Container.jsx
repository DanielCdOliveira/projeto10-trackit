import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;

  img {
    width: 180px;
    height: 178px;
    margin-top: 70px;
  }
  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 33px;
  }
  input {
    width: 100%;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 6px;
    font-size: 20px;
    line-height: 25px;
    padding-left: 11px;
  }
  input:focus{
    border: 2px solid #52b6ff;
    outline: 0;
  }
  button {
    width: 100%;
    height: 45px;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
    background-color: #52b6ff;
    border: none;
    border-radius: 5px;
  }
  p {
    margin-top: 25px;
    color: var(--highlight-color);
    text-decoration: underline;
  }
  a {
    text-decoration: none;
  }
  ::placeholder {
    color:#D4D4D4;
  }
`;

export default Container