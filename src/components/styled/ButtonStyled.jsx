import { styled } from "styled-components";

const ButtonStyled = styled.button`
    cursor: pointer;
    background-color: hsl(224, 30%, 27%);
    color: hsl(0, 0%, 100%);
    outline: none;
    border: none;
    height: 3rem;
    border-radius: 2rem;
    margin-top: 1.5rem;
    font-size: 18px;
    
    &:active,
    &:hover {
        background-image: linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%));
    }
`;

export default ButtonStyled;