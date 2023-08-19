import { styled } from "styled-components";
import reactionicon from "../../assets/images/icon-reaction.svg";
import memoryicon from "../../assets/images/icon-memory.svg";
import verbalicon from "../../assets/images/icon-verbal.svg";
import visualicon from "../../assets/images/icon-visual.svg";

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
        background: url("${reactionicon}") no-repeat;
    }
    .icon-memory {
        background: url("${memoryicon}") no-repeat;
    }
    .icon-verbal {
        background: url("${verbalicon}") no-repeat;
    }
    .icon-visual {
        background: url("${visualicon}") no-repeat;
    }
`;

export default RowStyled;