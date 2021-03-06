import React from 'react';
import {Input} from 'reactstrap';
import Autosuggest from 'react-autosuggest';

const displayStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    lineHeight: '25px',
    overflow: 'hidden',
    fontWeight: '400',
}

const inputStyle = {
    marginTop: '5px',
    fontSize: '100%',
    padding: '5px'
}

const toCurrency = (number) => {
    let res = number.toLocaleString('currency', {
        minimumFractionDigits:2,
        maximumFractionDigits:2
    })
    return res;
}

const titleStyle = (level=1) => {
    if (level === null){
        level = 3;
    }
    return {
        fontSize: `${100+(3 - level)*10}%`,
        fontWeight: 'bold'
    }
}

const dataStyle = (type='NORMAL') => {
    let color = {
        'WARN'   : '#ffc017',
        'ERROR'  : '#dc3545',
        'NORMAL' : '#f8f9fa'
    }[type];

    return {
        fontSize: '110%',
        borderRadius: '5px',
        textAlign: 'right',
        minWidth: '50px' ,
        padding: '0 5px',
        fontWeight: 'bold',
        fontFamily: 'Arial Narrow',
        background: color,
    };
}

export default class RefString extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            string: props.data.string,
            desc: props.data.desc,
            suggestions: [],
            fromInner: false
        }
    }

    static getDerivedStateFromProps(props, state){
        if (state.fromInner){
            console.log('yeah')
            return {...state, fromInner: false};
        } else {
            return {
                string: props.data.string,
                desc: props.data.desc,
                suggestions: []
            }
        }
    }

    getSuggestions = (value) => {

        let {paths} = this.props;

        if (value.match(/\/([^:]*):.*$/)){
            return [
                '借方', '贷方', '借方-贷方', '贷方-借方', '期初', '期末', '期初+借方-贷方', '期初+贷方-借方'
            ]
        } else if(value.match(/\/(.*)$/)){
            let path = value.split('/').slice(1),
                {list} = paths.findBy('ccode_name', path);

            let candidates = list.map(({cols:{ccode_name}}) => ccode_name.valueOf()),
                accurated = path.length === 0 ? [] : path[path.length - 1].split('').map(char => candidates.filter(e => e.includes(char))).flat();
            
            return accurated.length === 0 ? candidates : accurated;

        } else {
            return []
        }
    }

    renderSuggestion = (sugg) => <div>{sugg.toString()}</div>

    getSuggestionValue = (sugg) => sugg;

    onChange = (e, {newValue}) => {
        if(['click', 'keydown'].includes(e.type)){
            // preventing the options replaces all text during selecting
            // with up/down key;
            return;
        }
        this.props.data.string = newValue;
        this.setState({
            string: newValue,
            fromInner: true
        })
        console.log(this.props.data.string, 'onchange');
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value),
            fromInner: true
        });
    };
    
      // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
            fromInner: true
        });
    };

    onSuggestionSelected = (e, {suggestionValue}) => {
        console.log(this.props.data.string, suggestionValue, 'onselected')
        
        const truncString = this.props.data.string.replace(/(?<=[:/])([^:/]*)$/, suggestionValue);

        this.props.data.string = truncString;

        this.setState({
            string: truncString,
            fromInner: true
        });
    }
    render() {

        
        let {data, isRowEditing} = this.props;
        let {string, suggestions} = this.state;
        
        let res;
        if(!isRowEditing){

            let desc;
            if (data.desc){
                let match = data.desc.match(/#/g);
                desc = match
                ? <div style={titleStyle(match.length)}>{data.desc.replace(/#/g, '')}</div>
                : <div>{data.desc}</div>
            } else {
                desc = <div>{data.string}</div>
            }

            res = <div style={displayStyle} key={'disp'}>
                {desc}
                <div style={dataStyle(data.type)}>{!isNaN(data.value) && data.value != '' ? toCurrency(data.value): data.value}</div>
            </div>

        } else {

            let auto = <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                onSuggestionSelected={this.onSuggestionSelected}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={{
                    placeholder: '请按引用字串/表达式的约定格式进行修改',
                    onChange: this.onChange,
                    value: string
                }}
              />;

            let input = <Input
                style={inputStyle}
                value={this.state.desc}
                placeholder='给定此条目的说明。如果此处为空，则显示给定的表达式'
                onChange={(e) => {
                    let newValue = e.target.value;
                    this.props.data.desc = newValue;
                    this.setState({
                        desc: newValue,
                        fromInner: true
                    })        
                }}
            />

            res = <div style={{display: 'flex', flexDirection:'column'}}>
                {auto}
                {input}
            </div>
        }

        return res;
    }
}
