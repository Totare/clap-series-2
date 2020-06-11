function getIndex(card){
    let i=0;
    while(card !== cardsSortByHighest[i]){
        i++;
    };
    return i
}