function bestCombo(cards) {
    let playerCards = cards[0].flat();
    cards = cards[0].concat(cards[1]).flat();

    let value;
    // value = isAFull(cards);
    // if(value){
    //     console.log('full');
    //     return {"type" : "full", "value": value }
    // };

    value = isAFlush(cards);
    if(value){
        console.log('flush');
        return {"type" : "flush", "value": value }
    };
    
    value = isAPair(cards);
    if(value){
        console.log('pair');
        return {"type" : "pair", "value": value }
    };   
    value = isAHighest(playerCards);
    if(typeof(value)== 'number'){
        console.log('full');
        return {"type" : "highest", "value": value }
    };
};