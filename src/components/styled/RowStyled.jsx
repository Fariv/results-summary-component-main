import { styled } from "styled-components";

const RowStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.95rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    .component {
        display: flex;
    }
    .component-reaction {
        color: hsl(0, 100%, 67%);
    }
    .component-memory {
        color: hsl(39, 100%, 56%);
    }
    .component-verbal {
        color: hsl(166, 100%, 37%);
    }
    .component-visual {
        color: hsl(234, 85%, 45%);
    }
    .icon-reaction {
        background: url("./assets/images/icon-reaction.svg") no-repeat;
    }
    .icon-memory {
        background: url("./assets/images/icon-memory.svg") no-repeat;
    }
    .icon-verbal {
        background: url("./assets/images/icon-verbal.svg") no-repeat;
    }
    .icon-visual {
        background: url("./assets/images/icon-visual.svg") no-repeat;
    }
`;

export default RowStyled;