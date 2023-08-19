import React, { useEffect, useState } from 'react'
import RightSideCardStyled from './styled/RightSideCardStyled';
import ButtonStyled from './styled/ButtonStyled';
import Row from './Row';
import Loader from './Loader';

const RightSideCard = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(window.location.origin + '/data.json')
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    let rowsComps = [];
    if (data.length > 0) {
        
        rowsComps = [];
        for (var i = 0; i < data.length; i++) {

            let categoryslug = data[i].category.toLowerCase();
            let eachRowComp = (<Row key={i} rowtype={data[i].category}>
                <div className={"component component-" + categoryslug}>
                    <div className={"icon icon-" + categoryslug}></div>
                    <span>{data[i].category}</span>
                </div>
                <div className="states">
                    <span className="mark">{data[i].score}</span> <span className="max-mark">/ 100</span>
                </div>
            </Row>);

            rowsComps.push(eachRowComp);
        }
    } else {

        rowsComps = <Loader />
    }

    return (
        <RightSideCardStyled>
            <h3>
                Summary
            </h3>

            {rowsComps}

            <ButtonStyled>
                Continue
            </ButtonStyled>
        </RightSideCardStyled>
    );
}

export default RightSideCard