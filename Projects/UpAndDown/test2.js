
let cnt;
let suitNum;
let rankWithinSuit;

for (cnt=1; cnt<53; cnt++) {

  console.log(cnt);
  console.log('RankWithinSuit:' + cnt % 13);
  
  switch (cnt % 13) {
    case 8:
      console.log('Ten');
    break;
    case 9:
      console.log('Jack');
    break;
    case 10:
      console.log('Queen');
    break;
    case 11:
      console.log('King');
    break;
    case 12:
        console.log('Ace');
        
  }

};


