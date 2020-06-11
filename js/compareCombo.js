const COMBO_TYPE = [
    'full',
    'flush',
    'pair',
    'highest',
];
const COMBO_VALUE = [
    'A',
    'K',
    'Q',
    'J',
    '10',
    '9',
    '8',
    '7',
    '6',
    '5',
    '4',
    '3',
    '2',
];

function compareCombo(heroCombo, vilainCombo){
    if(heroCombo.type == vilainCombo.type){
        return compareComboIndex(heroCombo.value, vilainCombo.value, COMBO_VALUE);
    }else{
        return compareComboIndex(heroCombo.type, vilainCombo.type, COMBO_TYPE);
    }
};

function compareComboIndex(heroInfo, vilainInfo, COMBO){
    let heroIndex = getIndex(heroInfo, COMBO);
    let vilainIndex = getIndex(vilainInfo, COMBO);
    if(heroIndex < vilainIndex){
        return 'hero';
    }else if(heroIndex > vilainIndex){
        return 'vilain';
    }else{
        return 'equality';
    }
};

function getIndex(joueurInfo, COMBO){
    for (let i = 0; i < COMBO.length; i++) {
        if(joueurInfo === COMBO[i]){
          return i;
        };
    }
};