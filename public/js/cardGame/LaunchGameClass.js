class LaunchGame{
    constructor(){
        this.deck = new Dealer();
        this.cards = this.deck.deal(2, 5);
    
        this.showCards();
        this.heroHand = [];
        this.heroHand.push(this.cards[0]);
        this.heroHand.push(this.cards[2]);
        
        this.vilainHand = [];
        this.vilainHand.push(this.cards[1]);
        this.vilainHand.push(this.cards[2]);
        
        this.heroCombo = new Combo(this.heroHand);
        this.vilainCombo = new Combo(this.vilainHand);
        this.comparator = new CompareCombo(this.heroCombo.bestCombo(), this.vilainCombo.bestCombo());
        this.winner = this.comparator.winnerIs()
        this.showWinner();
        this.addRewardButton();
    }

    showWinner(){
        let text;
        if(this.winner === "hero"){
            text = 'Le Hero';
        }else if(this.winner === "vilain"){
            text = 'Le Vilain';
        }else{
            text = 'Personne car il y a égalité';
        }
        document.getElementById('winner').innerHTML = "Le Gagnant est : "+ text;
    }

    addRewardButton(){
        document.getElementById('reward').style.display = "block"
    }

    showCards(){
        let cardShowing = document.getElementsByClassName('aCard');
        cardShowing[0].setAttribute("src", "/images/cards/"+this.cards[0][0]+'.png')
        cardShowing[1].setAttribute("src", "/images/cards/"+this.cards[0][1]+'.png')
        cardShowing[2].setAttribute("src", "/images/cards/"+this.cards[1][0]+'.png')
        cardShowing[3].setAttribute("src", "/images/cards/"+this.cards[1][1]+'.png')
        cardShowing[4].setAttribute("src", "/images/cards/"+this.cards[2][0]+'.png')
        cardShowing[5].setAttribute("src", "/images/cards/"+this.cards[2][1]+'.png')
        cardShowing[6].setAttribute("src", "/images/cards/"+this.cards[2][2]+'.png')
        cardShowing[7].setAttribute("src", "/images/cards/"+this.cards[2][3]+'.png')
        cardShowing[8].setAttribute("src", "/images/cards/"+this.cards[2][4]+'.png')
    }
}