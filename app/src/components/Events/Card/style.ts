import styled from "styled-components";

interface CardStyleProps {
  img: string;
}

export const CardStyled = styled.div<CardStyleProps>`
  width: clamp(150px, 50vw, 460px);
  height: clamp(150px, 45vh, 600px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 14px;

  width: 100%;
  @media (max-width: 800px) {
    width: 100%;
    height: clamp(150px, 45vh, 600px);
  }

  background-color: #000;
  .img {
    height: 50%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    .img-bc{
      background: url(${(props) => props.img});
      background-size: cover;
      height: 100%;
      width: 100%;
  
      border-radius: 14px 14px 0 0;
    }
  }
  .content {
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    .content-container{
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: calc(100% - 14px);
      width: calc(100% - 14px);
      .title {
        display: flex;
        justify-content: space-between;
        width: 100%;
        display: flex;
  
        .name {
          h3 {
            text-align: start;
            color: #fff;
          }
          h1 {
            color: #fff;
            text-align: start;
            font-size: 2rem;
          }
        }
        .date {
          border: solid 1px #fff;
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px;
          p {
            color: #fff;
          }
        }
      }
      .detail {
        display: flex;
        justify-content: space-between;
        span{
          font-size: .8rem;
          color: #fff;
          opacity: .8;
          cursor: pointer;
        }
      }

    }
  }
`;
