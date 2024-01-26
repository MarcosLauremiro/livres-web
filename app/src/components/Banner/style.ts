import styled from "styled-components";
import banner from "../../assets/GersonMilitao-19.jpg"

export const BannerStyle = styled.div`
    background-color: black;

    width: 98vw;
    max-width: 62.5rem;
    height: clamp(100px, 50vh, 500px);
    
    border-radius: 12px;

    display: flex;
    align-items: center;
    justify-content: center;
    div{
        width:calc(100%);
        height: calc(100%);
        border-radius: 12px;

        background-image: url(${banner});
        background-position: center;
        background-size: cover;
    }
`