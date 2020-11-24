// Code your solutions in this file
function writeCards(name, occasion) {
    let thankYouCardArray = [];
    for(let i = 0; i < name.length; i++) {
        thankYouCardArray.push(`Thank you, ${name[i]}, for the wonderful ${occasion} gift!`);
    };
    return thankYouCardArray;
}

function countDown(i) {
    while(i>=0){
        console.log(i);
        i--;
    }
}