const cardsSortByHighest=['As', 'Ah', 'Ac', 'Ad', 'Ks', 'Kh', 'Kc', 'Kd', 'Qs', 'Qh', 'Qc', 'Qd', 'Js', 'Jh', 'Jc', 'Jd', '10s', '10h', '10c', '10d', '9s', '9h', '9c', '9d', '8s', '8h', '8c', '8d', '7s', '7h', '7c', '7d', '6s', '6h', '6c', '6d', '5s', '5h', '5c', '5d', '4s', '4h', '4c', '4d', '3s', '3h', '3c', '3d', '2s', '2h', '2c', '2d'];

function isAHighest(cards) {
    // console.log(cardsSortByHighest)
    cards.sort(
        function(a, b){
            let i=0;
            let j=0;
            while(cardsSortByHighest[i] !== a){
                i++;
            };
            while(cardsSortByHighest[j] !== b){
                j++;
            };
            if(i<j){
                return -1;
            }else{
                return 1;
            }
        }
    );
    // console.log(cards[0]);
    return getIndex(cards[0]);
}
