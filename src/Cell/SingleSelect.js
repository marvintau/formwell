import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
`

const Select = styled.select`
    width: 100%;
    min-width: 50px;
    border: 1px solid black;
    outline: none;
`

export default function SingleSelect (props){

    let {options, displayKey, update, path} = props,
        {data=0} = props;

    let optionsElems = options.map((data, value)=>{
        return <option key={value} value={value}>{data.get(displayKey)}</option>;
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