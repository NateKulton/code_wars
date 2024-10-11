function past(h, m, s) {
let pileNumber = 0;

if (0 <= h <= 23) {
 pileNumber += (h * 3600000);
}

if (0 <= m <= 59) {
  pileNumber += (m * 60000);
}

if (0 <= s <= 59) {
  pileNumber += (s * 1000);
}
  return pileNumber;
 }

 console.log(past(1,0,1));


 /*
// This is a shorter way to do the same thing.

 function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}
*/
