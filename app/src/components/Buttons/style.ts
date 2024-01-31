import styled from "styled-components";

export const ButtonsStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 12px;
  button {
    border: none;
    background-color: transparent;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    padding:0 20px 0 20px ;
  }
  .login {
    font-weight: 600;
    border: solid 1px ${(props) => props.theme.colors.primary};
    height: 40px;
    border-radius: 4px;
    &:hover{
        background-color: ${(props) => props.theme.colors.secondary};
        border: solid 1px ${(props) => props.theme.colors.secondary};
    }
}
  .register {
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
    border: solid 1px ${(props) => props.theme.colors.primary};
    height: 40px;
    border-radius: 4px;
    &:hover{
        background-color: black;
    }
  }
`;
