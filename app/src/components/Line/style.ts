import styled from "styled-components";

export const LineStyle = styled.div`
  width: 98vw;
  max-width: 62.5rem;

  display: flex;
  flex-direction: column;
  gap: .6rem;

  margin-top: 4rem;
  p {
    font-weight: 500;
  }
  div {
    width: 100%;
    opacity: .3;
    height: 1px;
    border-bottom: 1px solid black;
  }
`;
