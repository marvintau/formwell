import React from 'react';
import Row from './Row';

export default class Rows extends React.PureComponent {
    constructor(props){
        super(props);

        this.state = {
            data : props.data,
            expanded: []
        }
    }

    static getDerivedStateFromProps(props, state){
        if(!state.fromInside){
            if (props.data !== state.data){
                return {
                    data: props.data,
                    fromInside : false
                }
            }
        } else {
            return {...state, fromInside: false}
        }
        return state;
    }
    

    // a generic method of updating the data in in-place manner
    // and fire re-rendering. This method will be passed to Row
    // component and get called if necessary.

    // e.g. the operation fired by a Row, that modifies the order
    // of list, can be achieved by calling this function.

    // You might notice that Rows doesn't call an update method
    // of its parent. Because we only permit a Row calling its
    // parental Rows.

    updateRows = (operation, args) => {
        
        if (operation === 'insert') {
            args.push(this.props.colsAttr.makeRecord());
        }

        this.setState({
            data : this.state.data[operation](...args),
            fromInside: true
        })
    }

    updateExpanded = (rowIndex) => {

        let {expanded} = this.state;
        let newExpanded = expanded.filter(e => e !== rowIndex);
        if(newExpanded.length === expanded.length){
            newExpanded.push(rowIndex);
        }

        this.setState({expanded: newExpanded, fromInside: true});
    }

    render(){
        let {colsAttr, tableAttr, level} = this.props;
        let {data} = this.state;

        return data.map((entry, rowIndex) => {
            return <Row
                key={rowIndex}
                rowIndex={rowIndex}
                level={level}
                data={entry}
                tableAttr={tableAttr}
                colsAttr={colsAttr}
                updateRowExpanded={this.updateExpanded}
                updateRows={this.updateRows}
                rowsExpanded={this.state.expanded}
            />
        })

    }
}