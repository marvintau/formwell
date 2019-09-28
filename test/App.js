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

let head = new Header(
    {colKey: 'entry', colDesc: '条目编号', cellType:'Display', dataType:'String', expandControl: true, cellStyle: 'display'},
    {colKey: 'accrual', colDesc: '发生额', cellType:'Display', dataType:'Number', cellStyle: 'display'},
    {colKey: 'corrCategory', colDesc: '条目类别', cellType: 'CascadeSelect', options: options, displayKey: 'entry', cellStyle: 'display'},
    {colKey: 'editControl', cellType: 'EditControl', cellStyle: 'control'}
)


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

let subData = data.slice(0, 10);

for (let i = 0; i < data.length; i++){
    data[i].tabs = {
        head,
        data: subData,
        tableAttr: {},
    }
}

data = data
.grip(((e) => e.get('year')), '年', 'tabs')
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

class App extends React.Component {

    render(){

        let tableAttr = {
            expandable: true,
            editable: true
        }

        let props = {
            data,
            head,
            tableAttr,
        }

        let stringify = (data) => {
            let res = data;
            if (res.constructor.name === 'Group'){
                res = res.vals().map(e => stringify(e))
                res = res.flat();
            } else if (res.constructor.name === 'List'){
                res = res.map(e => stringify(e));
                res = res.flat();
                // res = Object.values(data.cols).join(' ');
            } else if (res.constructor.name === 'Record'){
                res = Object.values(res.cols).join(' ')
            }
            return res;
        }

        return (
            <div style={{flex: true}}>
                <Formwell {...props}/>
                <button onClick={() => console.log(stringify(data).join('\n'))}>export</button>
            </div>
        )
    }
}

render(<App/>, document.getElementById('root'));
