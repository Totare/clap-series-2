class CompareCombo{
    constructor(heroCombo, vilainCombo){
        this.heroCombo = heroCombo;
        this.vilainCombo =  vilainCombo;
    }
    winnerIs(){
        if(this.heroCombo.type == this.vilainCombo.type){
            return this.compareIndex(this.heroCombo.value, this.vilainCombo.value);
        }else{
            return this.compareComboType();
        };
    }

    compareComboType(){
        let heroTypeIndex;
        let vilainTypeIndex;
        for (let i = 0; i < Cards.COMBO_TYPE.length; i++) {
            if(this.heroCombo.type === Cards.COMBO_TYPE[i]){
                heroTypeIndex = i;
            };
            if(this.vilainCombo.type === Cards.COMBO_TYPE[i]){
                vilainTypeIndex = i;
            };
        }
        return this.compareIndex(heroTypeIndex, vilainTypeIndex);
    }

    compareIndex(heroIndex, vilainIndex){
        if(heroIndex < vilainIndex){
            return 'hero';
        }else if(heroIndex > vilainIndex){
            return 'vilain';
        }else{
            return 'equality';
        }
    }
}