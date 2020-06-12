function isAPair(cards) {
    let isAPair = false;
    let tmpCards = Object.assign([], cards);
    while(tmpCards.length > 1){
        let firstCard = tmpCards.shift();
        tmpCards.forEach(card => {
            if (firstCard.slice(0, -1) === card.slice(0, -1)){
                // console.log([firstCard,card])
                isAPair = isAHighest([firstCard,card]);
                
            };
        });
    }
    return isAPair;
};