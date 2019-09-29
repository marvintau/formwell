import React from 'react';
import Tabs from './Group/Tabs'
import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    position: relative;
`

const TableWrapper = styled.div`
    background-color: #FAFCFE;
    height: ${({height=600})=>height}px;
    overflow-y: scroll;
`

const SaveButton = styled.div`
    text-align: center;
    float: left;
    width: 150px;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid black;
    
    &:hover {
        cursor: pointer;
        background-color: #D8D8D8;
    }

    &: active {
        background-color: #8D8D8D;
    }
`

export default function Formwell ({saveRemote, data, head, tableAttr, exportProc}) {

    let save = () => {
        saveRemote(exportProc(data));
    }

    if (head.some(e => e.cellType === undefined)){
        throw Error('Apparently you forgot to specify the cell type in the header.');
    }

    let saveButton = [];
    if(tableAttr.savable){
        saveButton = <SaveButton onClick={save}>保存</SaveButton>
    }

    return <div><TableWrapper height={tableAttr.height}><Table>
        <tbody><Tabs data={data} head={head} tableAttr={tableAttr}/></tbody>
    </Table></TableWrapper>
    {saveButton}
    </div>
}