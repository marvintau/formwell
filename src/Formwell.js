import React from 'react';
import Tabs from './Group/Tabs'
import styled from 'styled-components';

const Table = styled.table`
    width: 90%;
    border-collapse: collapse;
    position: relative;
`

const TableWrapper = styled.div`
    background-color: #FAFCFE;
    height: ${({height=600})=>height}px;
    overflow-y: scroll;
`

export default function Formwell ({data, head, tableAttr}) {

    if (head.some(e => e.cellType === undefined)){
        throw Error('Apparently you forgot to specify the cell type in the header.');
    }

    return <TableWrapper height={tableAttr.height}><Table>
        <tbody><Tabs data={data} head={head} tableAttr={tableAttr}/></tbody>
    </Table></TableWrapper>
}