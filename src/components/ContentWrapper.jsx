import React from 'react'
import ContentWrapperStyled from './styled/ContentWrapperStyled'
import ResultSummary from './ResultSummary'

export default function ContentWrapper() {
    return (
        <ContentWrapperStyled>
            <ResultSummary />
        </ContentWrapperStyled>
    )
}
