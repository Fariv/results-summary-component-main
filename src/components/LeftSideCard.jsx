import React from 'react'
import LeftSideCardStyled from './styled/LeftSideCardStyled';

const LeftSideCard = () => {
    return (
        <LeftSideCardStyled>
            <h3>Your Result</h3>
            <div className="circle-container">
                <div className="circle">
                    <h1>76</h1>
                    <span className="subtitle">of 100</span>
                </div>
            </div>
            <h2>Great</h2>
            <p className="subtitle">You scored higher than 65% of the people who have taken these tests.</p>
        </LeftSideCardStyled>
    );
}

export default LeftSideCard