
let cnt;
let suitNum;
let rankWithinSuit;

for (cnt=2; cnt<54; cnt++) {

  console.log(cnt);
  console.log('RankWithinSuit:' + cnt % 13);
  
  switch (cnt % 13) {
    case 10:
      console.log('Ten');
    break;
    case 11:
      console.log('Jack');
    break;
    case 12:
        console.log('Queen');
    break;
    case 13:
        console.log('King');
    break;
    case 14:
        console.log('Ace');
    break;
  };

  console.log('test:' + Math.floor(cnt/13));
console.log(typeof(Math.floor(cnt/13)));

  switch (Math.floor(cnt/13)) {
    case 0: 
      console.log('Hearts'); 
      break;
    case 1: 
    console.log('Diamonds'); 
    break;

  };

};


