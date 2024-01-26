import styled from "styled-components";

interface CardStyleProps {
  img: string;
}

export const CardStyle = styled.div<CardStyleProps>`
  width: clamp(150px, 35vw, 400px);
  height: clamp(150px, 55vh, 400px);
  @media (max-width: 800px) {
    width: 100%;
    height: clamp(150px, 35vh, 400px);
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .img {
    background-image: url(${(props) => props.img});
    background-size: cover;
    height: 100%;
    width: 100%;
    border-radius: 14px 14px 0 0;
    &:hover {
      transition: 1s;
      opacity: 0.6;
      cursor: pointer;
    }
  }
  .content {
    background-color: #fff;
    height: 40%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    border-radius:0 0 14px 14px;
    h1 {
      text-align: start;
      font-weight: 600;
      &:hover {
        transition: 3s;
        text-decoration: underline;
        cursor: pointer;
      }
    }
    p{
      text-align: start;
    }
  }
`;
