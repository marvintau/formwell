const {List, Group, Record, Header} = require('mutated');

export function drawList(list){
    return list[parseInt(Math.random()*list.length)];
}
function drawDict(dict){
    let key = drawList(Object.keys(list));
    return dict[key];
}

export function genLex(length){
    let alphabet = ['ci', 'ba', 'se', 'cu', 'la', 're', 'po', 'me', 'te', 'ra', 'qu'];
    let res = new List(drawList(alphabet));

    while (res.length < length){
        let selected = drawList(alphabet),
            existing = parseInt(Math.random() * res.length * 1.5);

        if (existing >= res.length){
            res.push(selected);
        } else {
            res.push(`${res[existing]}${selected}`);
        }

        res = new List(... new Set(res));
    }

    res.sort();

    return res.map(entry => new Record({entry}));
}

export function randRange(min, max){
    return min + Math.random()*(max - min);
}

export function extendEntries(lex, key, func){
    return lex.map(e => new Record({...e.cols, [key]: func(e)}));
}
