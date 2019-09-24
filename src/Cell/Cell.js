import React from 'react';
import CellComponent from './CellComponent';

import styled from 'styled-components';

const TD = styled.td`
    padding: 6px 5px 4px;
    min-width: 25px;
    height: 28px;
    vertical-align: middle;
    line-height: 1.5em;
    ${({border='full'}) => ({
        'left-hide' : 'border-right: 1px solid black;',
        'right-hide' : 'border-left: 1px solid black;',
        'full': 'border: 1px solid black;'
    }[border])}
    
    ${({border='full', hovered}) => {
        if (border==='full'){
            return hovered ? `background: #E3C08E;` : '';
        } else if (border==='right-hide') {
            return hovered ? '' : '& *{opacity: 0;}'
        }
    }}
`

const Indenter = styled.div`
    height: 28px;
    width: ${({expandControl, level}) => {
        return expandControl ? `${level*5}px` : '0px'
    }};
`

const TDWrapper = styled.div`
    display: flex;
`

import RightArrowIcon from './icons/right-arrow.png';
import DownArrowIcon from './icons/down-arrow.png';

const Control = styled.div`
    width: 25px;
    height: 25px;
    margin-right: 5px;
    cursor: pointer;
    opacity: 1;
`

const Img = styled.img`
    width: 25px;
    height: 25px;
    opacity: 1 !important;
`


export default function Cell(props){

    let {tableAttr, recAttr, colAttr, toggleExpand, level} = props;

    let cellProp = {...tableAttr, ...recAttr, ...colAttr};
    
    let expandControl;
    if (colAttr.expandControl){
        if (tableAttr.expandable){
            let right = <Img src={RightArrowIcon} />,
                down  = <Img src={DownArrowIcon} />;
            expandControl = <Control onClick={toggleExpand}>
                {recAttr.expanded ? down : right}
            </Control>
        } else {
            expandControl = <Control />
        }
    } else {
        expandControl = [];
    }

    if(cellProp.disabled){
        return <TD {...cellProp} />
    } else {
        let CellComp = CellComponent[cellProp.cellType];
        return <TD {...cellProp}>
            <TDWrapper>
                {expandControl}
                <Indenter expandControl={cellProp.expandControl} level={level} />
                <CellComp {...props}/>
            </TDWrapper>
        </TD>
    }
}