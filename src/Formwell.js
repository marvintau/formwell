import React from 'react';
import Tabs from './Group/Tabs'

export default function Formwell ({data, head, tableAttr}) {
    return <table>
        <tbody><Tabs data={data} head={head} tableAttr={tableAttr}/></tbody>
    </table>
}