function startGame(){
    cards = dealer();
    showCards();
    let heroHand = cards[0].concat(cards[2]).flat();
    let vilainHand = cards[1].concat(cards[2]).flat();

    maindetest = [
        '3h',
        'Qh',
        '9h',
        '8h',
        'Kc',
        '5h'
    ];
    let testCombo = bestCombo(maindetest);
    let testCombo2 = {"value":'R', "type":'pair'}
    console.log(testCombo.type)
    console.log(testCombo2)
    let winner = compareCombo(testCombo, testCombo2);
    showWinner(winner);


    // let heroCombo = bestCombo(heroHand);
    // let vilainCombo = bestCombo(vilainHand);
    // let winner = compareCombo(heroCombo, vilainCombo);
    // ShowWinner(winner);
};

function showWinner(winner){
    if(winner === "hero"){
        winner = 'Le Hero';
    }else if(winner = hero){
        winner = 'Le vilain';
    }
    document.getElementById('winner').innerHTML = "Le Gagnant est : "+winner;
};


function showCards(){
    let cardShowing = document.getElementsByClassName('aCard');
    cardShowing[0].setAttribute("src", "/assets/cards/"+cards[0][0]+'.png')
    cardShowing[1].setAttribute("src", "/assets/cards/"+cards[0][1]+'.png')
    cardShowing[2].setAttribute("src", "/assets/cards/"+cards[1][0]+'.png')
    cardShowing[3].setAttribute("src", "/assets/cards/"+cards[1][1]+'.png')
    cardShowing[4].setAttribute("src", "/assets/cards/"+cards[2][0]+'.png')
    cardShowing[5].setAttribute("src", "/assets/cards/"+cards[2][1]+'.png')
    cardShowing[6].setAttribute("src", "/assets/cards/"+cards[2][2]+'.png')
    cardShowing[7].setAttribute("src", "/assets/cards/"+cards[2][3]+'.png')
    cardShowing[8].setAttribute("src", "/assets/cards/"+cards[2][4]+'.png')
};