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
        let heroTypeIndex = Cards.COMBO_TYPE.indexOf(this.heroCombo.type)
        let vilainTypeIndex = Cards.COMBO_TYPE.indexOf(this.vilainCombo.type)
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