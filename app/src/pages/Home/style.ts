import styled from "styled-components";

export const HomeStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  font-family: "Poppins", sans-serif;

  background-color: ${(props) => props.theme.colors.bc};
`;
