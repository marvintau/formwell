import React from 'react';
import {render} from 'react-dom';

import Formwell from '../src/Formwell';

import genCols from './utils';
const {List, Group, Record, Head} = require('persisted');

// ============================================================================

const optionTypes = {
    entry: 'String'
}

let optionHead = new Head(optionTypes),
    optionGenerated = genCols(optionTypes, {length: 40});

let options = optionHead.createTableFromColumnLists(optionGenerated);
console.log(options);

options = options.cascade(
        rec=>rec.get('entry').length,
        (desc, ances) => {
            let descCode = desc.get('entry'),
                ancesCode = ances.get('entry');
            return descCode.slice(0, ancesCode.length).includes(ancesCode)
        }
    );

console.log(optionGenerated, options);

// ============================================================================

const entryTypes = {
    entry: 'String',
    accrual: 'Float',
    corrCategory: 'Path',
    year: 'Integer',
    month: 'Integer',
}

let entryHead = new Head(entryTypes);

function entries(entryHead, year, month){
    let entryGenerated = genCols(entryTypes, {length: 80, cascadedOptions: options}, {year, month}),
        entries = entryHead.createTableFromColumnLists(entryGenerated);
    return entries;
}

let annualEntries = new List(0);
for (let year = 2001; year < 2010; year++){
    for (let month = 1; month <= 12; month++){
        annualEntries.push(...entries(entryHead, year, month));
    }
}

// ============================================================================

annualEntries = annualEntries
    .grip((e) => e.get('year'), {desc:'年', style: 'tabs'})
    .iter((k, v) => {
        return v
        .grip(((e) => e.get('month')), {desc:'月'})
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

    
entryHead.setColProp({colDesc: '索引', isExpandToggler: true}, 'entry');
entryHead.setColProp({colDesc: '年'}, 'year');
entryHead.setColProp({colDesc: '对应项', options, displayKey: 'entry'}, 'corrCategory');
entryHead.setColProp({colDesc: '月'}, 'month');
entryHead.setColProp({colDesc: '金额', editable: true}, 'accrual');

// ============================================================================

class App extends React.Component {

    render(){

        let tableAttr = {
            expandable: true,
            controllable: true,
            sortable: true,
            savable: true
        }

        let props = {
            data: annualEntries,
            head: entryHead,
            tableAttr
        }

        return (
            <div style={{flex: true}}>
                <Formwell {...props}/>
            </div>
        )
    }
}

render(<App/>, document.getElementById('root'));
