import React from 'react';
import styled from 'styled-components';

import UpArrowIcon from './icons/up-arrow.png';
import DownArrowIcon from './icons/down-arrow.png';
import CreateRecordIcon from './icons/create-record.png';
import DeleteRecordIcon from './icons/cross.png';

const Control = styled.div`
    min-width: 25px;
    display: flex;
`

const Icon = styled.img`
    width: 25px;
    height: 25px;
    margin: 0px 2px;
    cursor: pointer;
    opacity: 0.4;

    &:hover {
        opacity: 1;
    }
`

export default class EditControl extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            expanded : false
        }
    }

    moveUp = () => {
        let {update, rowIndex} = this.props;
        update('list', 'swap', [rowIndex, -1]);
    }

    moveDown = () => {
        let {update, rowIndex} = this.props;
        update('list', 'swap', [rowIndex, 1]);
    }

    remove = () => {
        console.log('remove')
        let {update, rowIndex} = this.props;
        update('list', 'remove', [rowIndex]);
    }

    insert = () => {
        let {update, rowIndex} = this.props;
        update('list', 'insert', [rowIndex]);
    }

    render(){
        let {tableAttr, recAttr} = this.props,
            {editable} = tableAttr,
            {expanded, rowsExpanded} = recAttr;

        let move = [
            <Icon key={'create'} src={CreateRecordIcon} onClick={this.insert}/>,
            <Icon key={'rem'} src={DeleteRecordIcon} onClick={this.remove}/>,
        ]

        if (rowsExpanded.length === 0){
            move.unshift(
                <Icon key={'up'} src={UpArrowIcon} onClick={this.moveUp} />,
                <Icon key={'down'} src={DownArrowIcon} onClick={this.moveDown} />
            )
        }

        if(!editable || expanded){
            return <Control/>
        } else {
            return <Control>
                {move}
            </Control>
        }
    }
}