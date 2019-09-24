import React from 'react';
import styled from 'styled-components';

import SingleSelect from './SingleSelect';

const Wrapper = styled.div`
    min-width: 100px;
    display: flex;
    flex-direction: column;

    & > div {
        margin-bottom: 2px;
    }
`

export default class CascadeSelect extends React.Component {

    constructor(props, context){
        super(props, context);

        this.state={
            data: props.data ? props.data : "0->0"
        }
    }

    static getDerivedStateFromProps(props, state){
        if (props.data !== state.data){
            return { data : props.data === undefined ? '0->0' : props.data}
        }
        return null;
    }


    update = (e) => {
        let val = e.target.value,
            path = e.target.dataset.path,
            newPath = `${path}->${val}`;
        let {colKey} = this.props;

        // this will call the parent method to change Record value
        this.props.update('self', 'set', [colKey, newPath]);

        this.setState({
            data: newPath
        })
    }

    renderSelect(pastPath, [curr, ...restPath], options, displayKey){

        // if reached the end (leaf) of the tree, return nothing.
        if(options === undefined || Object.keys(options).length === 0){
            return [];
        }

        // for the case there is possibly leaves, but not yet selected.
        pastPath = pastPath.concat(curr); 
        let props = {
                key: `${pastPath.length}-${curr}`,
                options,
                displayKey,
                path: pastPath,
                update: this.update
            };

        if(restPath.length === 0){
            return [<SingleSelect {...props} />];
        } else {
            let selected = restPath[0],
                nextLevelOptions = options[selected].subs;

            Object.assign(props, {data: selected})

            return [<SingleSelect {...props} />,
                ...this.renderSelect(pastPath, restPath, nextLevelOptions, displayKey)
            ]
        }
    }


    render(){
        let {colAttr} = this.props,
            {options, displayKey} = colAttr,
            {data} = this.state;

        let selects = this.renderSelect([], data.split('->'), options, displayKey);

        return <Wrapper>{selects}</Wrapper>
    }

}