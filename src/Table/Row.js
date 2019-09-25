import React from 'react';
import styled from 'styled-components';

import Cell from '../Cell/Cell';
import Rows from './Rows';
import Formwell from '../Formwell';

const TR = styled.tr`
`

const TDTab = styled.td`
    margin: 10px;
`

export default class Row extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
            hovered: false,
            expanded: false,
        };
    }

    static getDerivedStateFromProps(props, state){
        if (props.data !== state.data){
            return {...state, data: props.data}
        }
        return state;
    }

    update = (type, method, args) => {

        if (type === 'list') {
            this.props.updateRows(method, args);
        } else if (type === 'self'){
            let {data} = this.state;
            data[method](...args);
        }
    }

    toggleExpand = () => {
        let {updateRowExpanded, rowIndex} = this.props;
        updateRowExpanded(rowIndex);

        this.setState({
            expanded : !this.state.expanded
        })
    }

    onMouseEnter = ()=>{
        this.setState({hovered: true});
    }

    onMouseLeave = ()=>{
        this.setState({hovered: false});
    }

    render(){

        let {rowIndex, level, head, tableAttr={}, rowsExpanded} = this.props;
        
        let {data, hovered, expanded} = this.state,
            {expandable} = tableAttr;

        expandable = expandable && (data.subs.length || data.tabs !== undefined) > 0;

        let cols = head.map((colAttr, colIndex) => {
            let {colKey} = colAttr;
            return <Cell
                key={colIndex}
                level={level}
                colAttr={colAttr}
                recAttr={{...data.attr[colKey], hovered, expanded, rowsExpanded}}
                tableAttr={{...tableAttr, expandable}}
                colKey={colKey}
                rowIndex = {rowIndex}
                data={data.get(colKey)}
                update={this.update}
                toggleExpand={this.toggleExpand}
            />
        });
        
        let subs = [];
        if(expanded){
            if(data.subs.length > 0){
                subs = <Rows key={'rest'}
                    level={level+1}
                    data={data.subs}
                    head={head}
                    tableAttr={tableAttr}
                />
            } else if (data.tabs !== undefined){

                let colsWidth = head.filter(e => e.cellStyle === 'display').length;

                subs = <TR key={'rest'}>
                    <TDTab colSpan={colsWidth}><Formwell {...data.tabs} /></TDTab>
                </TR>
            }
        }

        let tr = <TR key={'first'}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
        >{cols}</TR>

        return [tr, subs]

    }
}