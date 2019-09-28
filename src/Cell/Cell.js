import React from 'react';
import CellComponent from './CellComponent';

import styled from 'styled-components';

const TD = styled.td`
    padding: 6px 5px 4px;
    min-width: 25px;
    height: 25px;
    white-space: nowrap;
    ${({cellStyle='display'}) => ({
        'control' : 'border-left: 1px solid black;',
        'display': 'border: 1px solid black;'
    }[cellStyle])}
    
    ${({cellStyle='display', hovered}) => ({
        display: hovered ? `background: #E3C08E;` : '',
        control: hovered ? '' : '& *{opacity: 0;}'
    }[cellStyle])}
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

    let {rowIndex, data, tableAttr, recAttr, colAttr, level, colSpan, toggleExpand, update} = props;

    let cellProp = {rowIndex, data, ...tableAttr, ...recAttr, ...colAttr, colSpan, update};

    let expandControlElem;

    if (cellProp.expandControl){
        if (tableAttr.expandable){
            let right = <Img src={RightArrowIcon} />,
                down  = <Img src={DownArrowIcon} />;
            expandControlElem = <Control onClick={toggleExpand}>
                {recAttr.expanded ? down : right}
            </Control>
        } else {
            expandControlElem = <Control />
        }
    } else {
        expandControlElem = [];
    }

    if(cellProp.disabled){
        return <TD {...cellProp} />
    } else {

        if (cellProp.cellType === undefined){
            throw Error('You must specify the cell type in table header');
        }

        let CellComp = CellComponent[cellProp.cellType];
        return <TD {...cellProp}>
            <TDWrapper>
                {expandControlElem}
                <Indenter expandControl={cellProp.expandControl} level={level} />
                <CellComp {...cellProp}/>
            </TDWrapper>
        </TD>
    }
}