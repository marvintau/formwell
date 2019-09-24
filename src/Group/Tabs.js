import React from 'react';
import styled from 'styled-components';

import Rows from '../Table/Rows';
import Head from '../Table/Head';
import {List, Group} from 'mutated';


const TabTR = styled.tr`
    border-top: 1px solid black !important;
    width: 100%;
    font-family: 'Optima';
    font-weight: 300;
`

const TabTD = styled.div`

    display: flex;
    justify-content: space-between;

    & div {
        text-align: center;
        padding: 10px;
    }
`

const Button = styled.div`
    &:hover {
        background-color: #DEF9F3;
        cursor: pointer;
    }
`

export default class Tabs extends React.Component {

    constructor(props){
        super(props);
        console.log(props);
        let currKey = props.data.constructor === Group ? props.data.keys()[0] : undefined;

        this.state = {
            currKey
        }
    }

    static getDerivedStateFromProps(props, state){
        if(!state.fromInside){
            if (props.data !== state.data){
                return {
                    currKey: props.data.keys()[0],
                    fromInside : false
                }
            }
        } else {
            return {...state, fromInside: false}
        }
        return state;
    }

    setCurrKey = (currKey) => {
        console.log(currKey, 'setCurrKey')
        this.setState({
            currKey,
            fromInside: true
        })
    }

    prevKey = () => {
        let keys = this.props.data.keys(),
            {currKey} = this.state,
            currKeyIndex = keys.indexOf(currKey),
            prevKey = keys[currKeyIndex === 0 ? 0 : currKeyIndex - 1];

        this.setState({
            currKey: prevKey,
            fromInside: true
        })
    }

    nextKey = () => {
        let keys = this.props.data.keys(),
            {currKey} = this.state,
            currKeyIndex = keys.indexOf(currKey),
            nextKey = keys[currKeyIndex === keys.length - 1 ? keys.length - 1 : currKeyIndex + 1];
        this.setState({
            currKey: nextKey,
            fromInside: true
        })
    }

    render(){

        let {data, colsAttr, tableAttr} = this.props;
        
        if (data.constructor === List){
            return [<Head {...this.props} key={'head'}/>, <Rows {...this.props} key={'table'}/>]
        }

        let colsLength = colsAttr.filter(e => e.cellStyle === 'display').length;

        let tabStyle = data.tabStyle ? data.tabStyle : 'paginator';

        let controller;
        if(tabStyle === 'paginator'){
            controller = <TabTR key={'ctrl'}><td colSpan={colsLength}><TabTD>
                <Button onClick={() => this.prevKey()}>前一{data.desc}</Button>
                <div>当前第{this.state.currKey}{data.desc}</div>
                <Button onClick={() => this.nextKey()}>后一{data.desc}</Button>
            </TabTD></td></TabTR>
        } else if (tabStyle === 'tabs') {

            let keys = data.keys().map((e, i) => {
                let displayed = e === this.state.currKey ? <b>{e}</b> : e;
                return <Button key={i} onClick={() => this.setCurrKey(e)}>{displayed}</Button>
            })

            controller = <TabTR key={'ctrl'}><td colSpan={colsLength}><TabTD>
                <Button onClick={() => this.prevKey()}>前一{data.desc}</Button>
                {keys}
                <Button onClick={() => this.nextKey()}>后一{data.desc}</Button>
            </TabTD></td></TabTR>
        }

        let content = data.get(this.state.currKey);

        let props = {
            level: 0,
            data: content,
            colsAttr,
            tableAttr
        }
    
        let subLevel;
        if (content.constructor === List){
            subLevel = [<Head {...props} key={'head'}/>, <Rows {...props} key={'table'}/>]
        } else if (content.constructor === Group){
            subLevel = <Tabs {...props} key={`group-${content.desc}`}/>
        }

        return [controller, subLevel]

    }

}