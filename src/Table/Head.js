import React from 'react';
import styled from 'styled-components';

const TD = styled.td`
    padding: 6px 5px 4px;
    min-width: 25px;
    height: 28px;
    vertical-align: middle;
    text-align: center;
    line-height: 1.5em;
    border: 1px solid black;
    background-color: #555555;
    color: #FEFEFE;
    font-family: 'Pingfang SC', 'Microsoft Yahei';
    font-weight: bold;
`


export default class Head extends React.Component{

    render(){
        let {colsAttr} = this.props;

        let headElem = colsAttr.filter(e => e.cellStyle === 'display').map(({colDesc}, index) => {
            return <TD key={index}>{colDesc}</TD>
        })

        return <tr>{headElem}</tr>
    }

}