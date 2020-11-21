const player = {
    firstName: 'Joe',
    lastName: 'Partlow'
}

let players = [
    {name: "Joe",
    id: 1,
    position: 2}
    ,
    {name: "Tara",
    id: 2,
    position: 1}
];

let cards = [
    {id: 1,
    suitId: 1,
    index: 1,
    name: "Ace"
    }
    ,
    {id: 2,
        suitId: 1,
        index: 2,
        name: "Two"

        }
        
];



// switch/case logic
// Use for assigning suits
let suit = 1;
let suitText = '';

switch(suit){
    case 1:
        let suitText='Hearts';
        break;
    case 2:
        let suitText = 'Diamonds';
        break;
    case 3:
        let suitText = 'Clubs';
        break;
    case 4:
        let suitText = 'Spades';
        break;
}
console.log (suitText);


console.log("cnt is: " cnt);

console.log(player.firstName);
console.log(player.lastName);
console.log(players);
console.log(cards);
