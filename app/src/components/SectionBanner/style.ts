import styled from "styled-components";

export const SectionStyle = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .container {
    width: 98vw;
    max-width: 62.5rem;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
  }
`;
