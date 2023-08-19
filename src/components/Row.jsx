import React from 'react'
import { styled } from 'styled-components';
import RowStyled from './styled/RowStyled';

const RowReaction = styled(RowStyled)`
    background-color: hsla(0, 100%, 67%, 0.1);
`;
const RowMemory = styled(RowStyled)`
    background-color: hsla(39, 100%, 56%, 0.1);
`;
const RowVerbal = styled(RowStyled)`
    background-color: hsla(166, 100%, 37%, 0.1);
`;
const RowVisual = styled(RowStyled)`
    background-color: hsla(234, 85%, 45%, 0.1);
`;

const Row = ({rowtype, children}) => {

    let rowComp = (<RowStyled></RowStyled>);

    if (rowtype === "Reaction") {

        rowComp = <RowReaction>{children}</RowReaction>
    } else if (rowtype === "Memory") {

        rowComp = <RowMemory>{children}</RowMemory>
    } else if (rowtype === "Verbal") {

        rowComp = <RowVerbal>{children}</RowVerbal>
    } else if (rowtype === "Visual") {

        rowComp = <RowVisual>{children}</RowVisual>
    }

    return rowComp;
}

export default Row;