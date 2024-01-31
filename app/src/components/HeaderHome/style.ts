import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 6vh;

  background-color: ${(props) => props.theme.colors.secondary};
  
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    width: 98vw;
    max-width: 62.5rem;
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;
