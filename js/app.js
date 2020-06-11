function startGame(){
    cards = dealer();
    showCards();
    let heroHand = [];
    heroHand.push(cards[0]);
    heroHand.push(cards[2]);
    
    let vilainHand = [];
    vilainHand.push(cards[1]);
    vilainHand.push(cards[2]);

    let heroCombo = bestCombo(heroHand);
    let vilainCombo = bestCombo(vilainHand);
    let winner = compareCombo(heroCombo, vilainCombo);
    showWinner(winner);
};

function showWinner(winner){
    if(winner === "hero"){
        winner = 'Le Hero';
    }else if(winner === "vilain"){
        winner = 'Le Vilain';
    }else{
        winner = 'Personne car il y a égalité';
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