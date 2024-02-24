import styled from "styled-components";

export const LoginStyle = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;

  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  .login-box {
    position: relative;
    width: 100%;
    max-width: 1000px;
    height: 600px;
    background: #fff;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .side-left{
      background-color: #D9D9D9;
      height: 100%;
      width: 100%;
      border-radius: 15px 0  0 15px;
    }
    .side-right{
      border-radius: 0 15px 15px 0;
    }
  }
`;
