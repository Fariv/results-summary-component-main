import { styled } from "styled-components";

const LeftSideCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 367px;
    max-width: 367px;
    color: hsl(0, 0%, 100%);
    background-image: linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%));
    border-radius: 1.8rem;
    z-index: 1;
    
    @media only screen and (max-width: 768px) {
        max-width: 100%;
        width: 100%;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        align-self: center;
    }

    h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        height: 105px;
        color: hsla(0, 0%, 100%, 0.6);
    }

    .circle-container {
        display: flex;
        justify-content: center;
        height: 201px;

        .circle {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-radius: 50%;
            width: 201px;
            height: 201px;
            background-image: linear-gradient(hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0));

            h1 {
                margin: 0;
                font-size: 4rem;
                line-height: 1.1;
            }

            .subtitle {
                color: hsla(0, 0%, 100%, 0.4);
            }
        }
    }

    h2 {
        text-align: center;
        margin-bottom: 0;
    }

    p.subtitle {
        text-align: center;
        color: hsla(0, 0%, 100%, 0.6);
        width: 264px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export default LeftSideCardStyled;