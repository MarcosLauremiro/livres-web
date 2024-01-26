import styled from "styled-components";

export const InstaStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    a{
        text-decoration: none;
        color: ${(props) => props.theme.colors.primary};
        font-weight: 600;
    }
`