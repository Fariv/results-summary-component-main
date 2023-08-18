import React from 'react'
import RightSideCardStyled from './styled/RightSideCardStyled';
import RowStyled from './styled/RowStyled';
import { styled } from 'styled-components';
import ButtonStyled from './styled/ButtonStyled';

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
const RightSideCard = () => {
    return (
        <RightSideCardStyled>
            <h3>
                Summary
            </h3>

            <RowReaction>
                <div className="component component-reaction">
                    <div className="icon icon-reaction"></div>
                    <span>Reaction</span>
                </div>
                <div className="states">
                    <span className="mark">80</span> <span className="max-mark">/ 100</span>
                </div>
            </RowReaction>

            <RowMemory>
                <div className="component component-memory">
                    <div className="icon icon-memory"></div>
                    <span>Memory</span>
                </div>
                <div className="states">
                    <span className="mark">92</span> <span className="max-mark">/ 100</span>
                </div>
            </RowMemory>

            <RowVerbal>
                <div className="component component-verbal">
                    <div className="icon icon-verbal"></div>
                    <span>Verbal</span>
                </div>
                <div className="states">
                    <span className="mark">61</span> <span className="max-mark">/ 100</span>
                </div>
            </RowVerbal>

            <RowVisual>
                <div className="component component-visual">
                    <div className="icon icon-visual"></div>
                    <span>Visual</span>
                </div>
                <div className="states">
                    <span className="mark">72</span> <span className="max-mark">/ 100</span>
                </div>
            </RowVisual>

            <ButtonStyled>
                Continue
            </ButtonStyled>
        </RightSideCardStyled>
    );
}

export default RightSideCard