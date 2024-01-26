import styled from "styled-components";

export const HeaderStyle = styled.header`
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 98vw;
  max-width: 62.5rem;

  font-family: "Poppins", sans-serif;

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-size: clamp(1.5rem, 10.8vw, 6.9rem);
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;

    white-space: nowrap;
    width: 100%;
  }

  .rol {
    div {
      overflow: hidden; /* Adicionando overflow hidden para evitar que a div ultrapasse */
      white-space: nowrap;
      animation: scroll 30s linear infinite;
    }
    p {
      width: 100%;
      font-size: 1.5rem;
      span {
        font-weight: 600;
      }
    }
  }

  @keyframes scroll {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
