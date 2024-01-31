import styled from "styled-components";

export const RegisterStyle = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 98vw;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  gap: 1.5rem;
  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-size: clamp(1.5rem, 10.8vw, 3rem);
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;
    width: 100%;
  }
  span {
    text-align: center;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 90%;
    }
  }
  button {
    background-color: ${(props) => props.theme.colors.secondary};
    border: solid 1px ${(props) => props.theme.colors.secondary};
    border-radius: 4px;
    cursor: pointer;
  }
`;
