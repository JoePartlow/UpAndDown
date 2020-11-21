// alert('Hello World')


const num1 = 100;
const num2 = 50;

const suits = [1,2,3,4];
//const deck = range(1,52);
//var deck = range(1,52);

var deck = [for (i of Array(100).keys()) i];

let val;

val = num1 + num2;

//Math Object
val = Math.PI;

val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.4);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8,2);
val = Math.min(2,3,4,5,20);
val = Math.max(2,3,4,5,20);

val = Math.random() * 52;
val = Math.random() * 53;

val = Math.floor(Math.random() * 52 + 1);

//Deal a random card that has not yet been dealt.


console.log(val);
console.log(deck);
