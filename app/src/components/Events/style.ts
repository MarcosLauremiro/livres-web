import styled from "styled-components";

export const EventStyle = styled.section`
  width: 98vw;
  max-width: 62.5rem;
  margin-top: 3rem;
  @media (max-width: 800px) {
    height: 100%;
  }

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    h3 {
      text-align: center;
      font-size: 0.9rem;
    }
    h1 {
      color: ${(props) => props.theme.colors.primary};
      font-size: clamp(1.5rem, 10.8vw, 6.9rem);
      text-transform: uppercase;
      text-align: center;
      font-weight: 500;
    }
    p {
      text-align: center;
      font-size: 0.9rem;
      width: 70%;
    }
  }
  .card-event {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    @media (max-width: 800px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
  p {
    font-weight: 300;
    @media (max-width: 600px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    a {
      text-decoration: none;
      color: black;
      font-weight: 600;
      &:hover {
        transition: 3s;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;
