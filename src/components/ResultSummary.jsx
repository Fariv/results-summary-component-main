import React from 'react'
import LeftSideCard from './LeftSideCard'
import RightSideCard from './RightSideCard'
import ResultSummaryStyled from './styled/ResultSummaryStyled'

const ResultSummary = () => {
    return (
        <ResultSummaryStyled>
            <LeftSideCard />
            <RightSideCard />
        </ResultSummaryStyled>
    );
}

export default ResultSummary