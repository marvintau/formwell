import React from 'react';
import {render} from 'react-dom';

import Formwell from '../src/Formwell';
import {genLex, extendEntries, randRange} from './utils';

const {List, Group, Record, Header} = require('mutated');

let options = genLex(50)
    .cascade(
        rec=>rec.get('entry').length,
        (desc, ances) => {
            let descCode = desc.get('entry'),
                ancesCode = ances.get('entry');
            return descCode.slice(0, ancesCode.length).includes(ancesCode)
        }
    );

options.unshift(new Record({entry: 'None'}))

let lex = genLex(30);
let data = new List(0), annual, month;
for (let i = 0; i < 5; i++){
    annual = [];
    for (let j = 0; j < 12; j++){
        month = extendEntries(lex, 'accrual', () => randRange(10, 100));
        month = extendEntries(month, 'month', () => j);
        annual.push(...month);
    }
    annual = extendEntries(annual, 'year', () => i);
    data.push(...annual);
}

data = data
.grip(((e) => e.get('year')), '年')
.iter((k, v) => {
    return v
    .grip(((e) => e.get('month')), '月')
    .iter((k, v) => {
        return v.cascade(
            rec=>rec.get('entry').length,
            (desc, ances) => {
                let descCode = desc.get('entry'),
                    ancesCode = ances.get('entry');
                return descCode.slice(0, ancesCode.length).includes(ancesCode)
            }
        );
    })
})

console.log(data);

let colsAttr = new Header(
    {colKey: 'entry', colDesc: '条目编号', cellType:'Display', dataType:'String', expandControl: true},
    {colKey: 'accrual', colDesc: '发生额', cellType:'Display', dataType:'Number'},
    {colKey: 'corrCategory', colDesc: '条目类别', cellType: 'CascadeSelect', options: options, displayKey: 'entry'},
    {colKey: 'editControl', cellType: 'EditControl', border: 'right-hide'}
)

class App extends React.Component {

    render(){

        let tableAttr = {
            expandable: true,
            editable: true
        }

        let rowsProps = {
            data,
            colsAttr,
            tableAttr,
            displayType: 'tabs'
        }

        return (
            <div style={{flex: true}}>
                <table>
                    <tbody><Formwell.Tabs {...rowsProps}/></tbody>
                </table>
            </div>
        )
    }
}

render(<App/>, document.getElementById('root'));
