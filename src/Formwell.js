import React from 'react';
import Tabs from './Group/Tabs'

export default function Formwell ({data, tableAttr, colsAttr}) {
    return <table>
        <tbody><Tabs data={data} tableAttr={tableAttr} colsAttr={colsAttr}/></tbody>
    </table>
}