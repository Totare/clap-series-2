const COMBO_TYPE = [
    'full',
    'flush',
    'pair',
    'highest',
];


function compareCombo(heroCombo, vilainCombo){
    if(heroCombo.type == vilainCombo.type){
        return compareIndex(heroCombo.value, vilainCombo.value);
    }else{
        return compareComboType(heroCombo.type, vilainCombo.type);
    }
};


function compareComboType(hero, vilain){
    let heroTypeIndex;
    let vilainTypeIndex;
    for (let i = 0; i < COMBO_TYPE.length; i++) {
        if(hero === COMBO_TYPE[i]){
            heroTypeIndex = i;
        };
        if(vilain === COMBO_TYPE[i]){
            vilainTypeIndex = i;
        };
    }
    return compareIndex(heroTypeIndex, vilainTypeIndex)
};

function compareIndex(heroIndex, vilainIndex){
    if(heroIndex < vilainIndex){
    return 'hero';
}else if(heroIndex > vilainIndex){
    return 'vilain';
}else{
    return 'equality';
}
};
