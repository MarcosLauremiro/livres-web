import styled from "styled-components";

export const InputStyle = styled.input`
    border: none;
    background-color: none;
    font-family: "Poppins", sans-serif;

    border-bottom: 1px solid #D9D9D9;
    width: 350px;
    max-width: 350px;
    &::placeholder{
        
    }
    &:focus {
    outline: none;
}
`