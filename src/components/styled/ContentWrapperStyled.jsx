import { styled } from "styled-components";

const ContentWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
    min-height: 100vh;
    background-color: hsl(221, 100%, 96%);

    @media only screen and (max-width: 768px) {
        justify-content: flex-start;
        align-items: flex-start;
        background-color: hsl(0, 100%, 100%);
    }
`;

export default ContentWrapperStyled;