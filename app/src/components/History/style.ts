import styled from "styled-components";
import liders from "../../assets/liders.jpg";

export const HistoryStyle = styled.section`
  width: 98vw;
  max-width: 62.5rem;
  margin-top: 3rem;
  span {
    font-size: 0.9rem;
    font-weight: 300;
  }
  .container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    justify-content: center;
    .side_left {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h1 {
        text-align: start;
        font-size: 2rem;
        font-weight: 500;
      }
      p {
        text-align: start;
        line-height: 1.4;
      }
    }
    .side_rigth {
      display: flex;
      align-items: center;
      justify-content: end;
      div {
        background-image: url(${liders});
        background-size: cover;
        width: clamp(150px, 35vw, 400px);
        height: clamp(100px, 30vh, 300px);
        border-radius: 12px;

      }
    }
  }
  @media (max-width: 600px) {
    .container {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1.5rem;
      .side_left {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        h1 {
          text-align: start;
          font-size: 2rem;
          font-weight: 500;
        }
        p {
          text-align: start;
          line-height: 1.4;
        }
      }
      .side_rigth {
        display: flex;
        align-items: center;
        justify-content: center;
        div {
          background-image: url(${liders});
          background-size: cover;
          width: clamp(150px, 98vw, 600px);
          height: clamp(100px, 40vh, 400px);
          border-radius: 12px;
        }
      }
    }
  }
`;
