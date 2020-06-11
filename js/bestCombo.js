function bestCombo(cards) {
    let value = isAFull(cards);
    if(value){
        return {"type" : "full", "value": value }
    };

    value = isAFlush(cards);
    if(value){
        console.log('flush');
        return {"type" : "flush", "value": value }
    };
    
    value = isAFlush(cards);
    if(value){
        console.log('pair');
        return {"type" : "pair", "value": value }
    };
    
    value = isAHighest(cards)
    if(value){
        console.log('highest');
        return {"type" : "highest", "value": value }
    };
};