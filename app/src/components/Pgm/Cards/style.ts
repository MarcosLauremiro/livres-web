import styled from "styled-components";

interface CardStyleProps {
  img: string;
}

export const CardStyle = styled.div<CardStyleProps>`
  width: clamp(150px, 35vw, 400px);
  height: clamp(150px, 35vh, 400px);
  @media (max-width: 800px) {
    width: 100%;
    height: clamp(150px, 35vh, 400px);
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 14px;
  .img {
    background-image: url(${(props) => props.img});
    background-size: cover;
    height: 100%;
    width: 100%;
    border-radius: 14px;
    &:hover {
      transition: 1s;
      opacity: 0.6;
      cursor: pointer;
    }
  }
  .content {
    h1 {
      text-align: center;
      &:hover {
        transition: 3s;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;
