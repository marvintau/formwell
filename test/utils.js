function randomVowel(){
    const vowels = ['ch', 'ma', 'po', 're', 'ly', 'se', 'ta', 'ki', 'te', 'co', 'mu'];
    let index = (Math.random() * (vowels.length - 1)).toFixed(0);
    return vowels[index];
}

const gen = {
    String({length=20, newRate=1.8}){
        let dict = [];
    
        while(dict.length < length){
    
            let index = parseInt((Math.random() * dict.length * newRate).toFixed(0)),
                vowel = `${index < dict.length ? dict[index] : ''}${randomVowel()}`;

            if (dict.indexOf(vowel) === -1){
                dict.push(vowel);
            }
        }
        return dict;
    },
    
    Integer({length=20, range=[0, 100]}){
        let list = [];
        for (let i = 0; i < length; i++){
            list.push((range[0] + Math.random()*(range[1] - range[0])).toFixed(0));
        }
        return list;
    },
    
    Float({length=20, range=[0, 100]}){
        let list = [];
        for (let i = 0; i < length; i++){
            list.push((range[0] + Math.random()*(range[1] - range[0])));
        }
        return list;
    },
    
    Date({length=20}){
        return Array(length).fill(0).map(e => new Date(Math.random() * 2e5));
    },

    Interval({length=20}){
        return Array(length).fill(0).map(e => {
            let head = new Date(Math.random() * 2e5),
                tail = new Date(Math.random() * 2e5);
            return [head, tail];
        })
    },

    Path({length=20, cascadedOptions=[], optionKey='entry'}){
        let res = [];
        for (let i = 0; i < length; i++){
            let path = [0];

            let ref = cascadedOptions;
            while(ref.length !== 0){
                let index = (Math.random() * (ref.length-1)).toFixed(0);
                path.push(ref[index].get(optionKey).valueOf())
                ref = ref[index].heir;
            }

            res.push(path);
        }
        return res;
    }
}

export default function genCols(typeSpec, options, defVal={}){

    let {length=20} = options;

    let table = {};
    for (let key in typeSpec){
        let type = typeSpec[key];
        if(key in defVal){
            table[key] = Array(length).fill(defVal[key]);
        } else {
            table[key] = gen[type](options);
        }
    }
    return {length, table};
}