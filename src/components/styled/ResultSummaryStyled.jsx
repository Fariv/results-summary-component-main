import { styled } from "styled-components";

const ResultSummaryStyled = styled.div`
    display: flex;
    width: 738px;
    height: 513px;
    border-radius: 1.8rem;
    position: relative;

    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        flex-direction: column;
    }
`;

export default ResultSummaryStyled;