import styled from "styled-components";

export const LoginStyle = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 98vh;
    .form-container {
      h1 {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 1.5rem;
      }
      display: flex;
      flex-direction: column;
      .conect {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        p {
          font-family: "Poppins", sans-serif;
          font-size: 0.9rem;
        }
      }
      gap: 3rem;
      .button-login {
        display: flex;
        justify-content: space-between;
        Button {
          background-color: ${(props) => props.theme.colors.primary};
          color: white;
          font-family: "Poppins", sans-serif;
          border: none;
          font-weight: 300;
          height: 40px;
          cursor: pointer;
          border-radius: 6px;
        }
        .login {
          width: 190px;
          &:hover {
            background-color: #e6e6e6;
            color: ${(props) => props.theme.colors.primary};
          }
        }
        .register {
          color: ${(props) => props.theme.colors.primary};
          background-color: transparent;
          border: 1px solid black;
          width: 150px;
        }
      }
    }
  }
`;
