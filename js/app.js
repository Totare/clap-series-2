// const DECK = 

function StartGame(){
    cards = dealer();
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
    WinnerIs(1);
};

function WinnerIs(number){
    if(number==1){
        winner = 'Le Hero';
    }else{
        winner = 'Le Vilain';
    }
    document.getElementById('winner').innerHTML = "Le Gagnant est : "+winner;
}


