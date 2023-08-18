import { styled } from "styled-components";

const RightSideCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 398px;
    height: 100%;
    right: 0;
    background-color: hsl(0, 0%, 100%);
    border-top-right-radius: 1.8rem;
    border-bottom-right-radius: 1.8rem;
    position: absolute;
    padding: 1rem 2.25rem 1rem 3.5rem;

    @media only screen and (max-width: 768px) {
        position: relative;
        padding: 0 2rem 2rem 2rem;
        align-self: center;
        width: 100%;
        border-radius: 0;
    }
`;

export default RightSideCardStyled;