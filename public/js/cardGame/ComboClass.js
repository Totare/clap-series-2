class Combo{
    constructor(cards){
        this.playerCards = cards[0].flat();
        this.cards = cards[0].concat(cards[1]).flat();
    }

    bestCombo() {
        let value;
        value = this.isAFull();
        if(value){
            console.log('full' );
            return {"type" : "full", "value": value }
        };
        value = this.isAFlush(this.cards);
        if(value){
            console.log('flush');
            return {"type" : "flush", "value": value }
        };
        
        value = this.isAPair();
        if(value){
            console.log('pair');
            return {"type" : "pair", "value": value }
        };   
        value = this.isAHighest(this.playerCards);
        if(typeof(value)== 'number'){
            console.log('higest : ' + value);
            return {"type" : "highest", "value": value }
        };
    }

    isAFull(){
        // TO DO
        return false;
    }
    
    isAFlush() {
        let isAFull = false;
        let colorOcc = this.colorOccurences();
        for(var [key, value] of Object.entries(colorOcc)){
            if( value > 4){
                return true;
            };
        };
        return isAFull;
    };

    isAPair() {
        let isAPair = false;
        let tmpCards = Object.assign([], this.cards);
        while(tmpCards.length > 1){
            let firstCard = tmpCards.shift();
            tmpCards.forEach(card => {
                if (firstCard.slice(0, -1) === card.slice(0, -1)){
                    isAPair = this.isAHighest([firstCard,card]);  
                };
            });
        }
        return isAPair;
    }

    isAHighest(cards) {
        cards.sort(
            function(a, b){
                return Cards.CARDSSORTBYHIGHEST.indexOf(a) < Cards.CARDSSORTBYHIGHEST.indexOf(b)?-1:1
            }
        );
        return Cards.CARDSSORTBYHIGHEST.indexOf(this.cards[0]);
    }

    colorOccurences() {
        let occurences = {};
        for(var [key, value] of Object.entries(Cards.COLORS)){
            let countCard = 0;
            this.cards.forEach(card=>{
                let formatedCard = card[card.length - 1];
                let formatedCARD = value;
                if(formatedCard  === formatedCARD){
                countCard++;
                };
            });
            if(countCard != 0){
                occurences[key] = countCard;
            };
        };
        return occurences;
    }
}