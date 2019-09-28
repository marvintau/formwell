import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    min-width: 100px;
    display: flex;
    flex-direction: column;

    & > div {
        margin: 2px 0px;
    }
`

const Select = styled.select`
    width: 100%;
    min-width: 50px;
    border: 1px solid black;
    outline: none;
`

function SingleSelect (props){

    let {data, options, displayKey, update, path} = props;

    let optionsElems = options.map((data, index)=>{
        return <option key={index}>{data.get(displayKey)}</option>;
    })

    // 之所以要在这里使用data-path是因为，事件触发update方法的时候，
    // 我们可以直接从DOM中得到path。

    return <Wrapper>
        <Select
            data-path={path.join('->')}
            value={data}
            onFocus={update}
            onChange={update}
            >{optionsElems}
        </Select>
    </Wrapper>

}

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
        return state;
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
        if(options.length === 0){
            return [];
        }

        // for the case there is possibly leaves, but not yet selected.
        pastPath = pastPath.concat(curr); 
        let props = {
                key: `${pastPath.length}-${curr}`,
                data: curr,
                options,
                displayKey,
                path: pastPath,
                update: this.update
            };

        if(restPath.length === 0){
            return [<SingleSelect {...props} />];
        } else {
            let selected = restPath[0],
                selectedOption = options.find(e => e.get(displayKey) === selected) || options[0],
                nextLevelOptions = selectedOption.subs;

            Object.assign(props, {data: selected})

            return [<SingleSelect {...props} />,
                ...this.renderSelect(pastPath, restPath, nextLevelOptions, displayKey)
            ]
        }
    }


    render(){
        let {options, displayKey} = this.props,
            {data} = this.state;

        let selects = this.renderSelect([], data.split('->'), options, displayKey);

        return <Wrapper>{selects}</Wrapper>
    }

}