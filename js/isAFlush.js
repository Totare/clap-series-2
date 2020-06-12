function isAFlush(cards) {
    // console.log(cards);
    let isAFull = false;
    let colorOcc = colorOccurences(cards);
    // console.log(colorOcc);
    for(var [key, value] of Object.entries(colorOcc)){
        if( value > 4){
            return true;
        };
    };
    // console.log(isAFull);
    return isAFull;
};

const COLORS = {
    diamond: "d",
    club: "c",
    heart: "h",
    spade: "s"
}

function colorOccurences(cards) {
    var occurences = {};
    for(var [key, value] of Object.entries(COLORS)){
        let countCard = 0;
        cards.forEach(card=>{
            // console.log(card);
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