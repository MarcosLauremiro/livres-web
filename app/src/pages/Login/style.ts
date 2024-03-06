import styled from "styled-components";

export const LoginStyle = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    h1{
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 1.5rem;
    }
    .form-container{
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .button-login {
        display: flex;
        Button {
          background-color: ${(props) => props.theme.colors.primary};
          color: white;
          font-family: "Poppins", sans-serif;
          border: none;
        }
      }
    }
  }
`;
