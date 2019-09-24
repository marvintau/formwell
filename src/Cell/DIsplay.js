import React from 'react';

import styled from 'styled-components';

const Number = styled.div`
    text-align: right;
    padding-right: 5px;
    font-size: 90%;
    font-weight: bold;
    letter-spacing: -0.07em;
    font-family: 'Consolas', 'Inconsolata', 'TheSansMono Office', 'Menlo', monospace;
    min-width: 100px;
`

const String = styled.div`
    padding: 0px 0px 1px;
    font-weight: 300;
    font-family: 'Helvetica Neue', 'Pingfang SC', sans-serif;
    min-width: 100px;
`

export default function Display (props){

    let {data, colAttr} = props;

    switch(colAttr.dataType){
        case 'Number':
            let displayedNumber = parseFloat(data).toFixed(2);
            return <Number>{displayedNumber}</Number>;
        case 'String':
        default:
            return <String>{data}</String>;
    }
}