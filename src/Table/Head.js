import React from 'react';
import styled from 'styled-components';

const TH = styled.th`
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
    position:sticky;
    top: -1px;
`


export default class Head extends React.Component{

    render(){
        let {head} = this.props;

        let headElem = head.filter(e => e.cellStyle === 'display').map(({colDesc}, index) => {
            return <TH key={index}>{colDesc}</TH>
        })

        return <tr>{headElem}</tr>
    }

}