import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 98vw;
  max-width: 62.5rem;
  border-top: solid 1px #a3a3a3;
  .container {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      img {
        width: 60px;
      }
    }
    .redes {
        display: flex;
        gap: 12px;
      a {
        text-decoration: none;
        color: black;
        font-size: .9rem;
        &:hover {
        transition: 3s;
        text-decoration: underline;
        cursor: pointer;
      }
      }
    }
  }
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem;
    p {
        opacity: .9;
        font-weight: 500;
    }
  }
`;
