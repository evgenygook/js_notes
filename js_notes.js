
//дата сегодня
let today = ()=> { 
  
var d = new Date();
var curr_date = d.getDate();
var curr_month = d.getMonth() + 1;
var curr_year = d.getFullYear();

  tdy = curr_year + "-" + curr_month + "-" + curr_date
  return tdy;
}

//


//генератор слов

function getWord () {
 let words = [
  'go', 'fokk', 'yourself', 'normies', 'bitards',
  'kenny', '2ch', 'loli', 'anime', 'bokunopiko',
  'iway', 'love', 'like', 'hate', 'people',
  'pornhub', 'twitter', 'rofl', 'sorry', 'dont',
  'speak', 'human', 'life', 'is', 'bautiful',
  'end', 'dead', 'poop', 'restapi', 'shit', 'rocketbank', 'shitpost',
  'party','suicide', 'javaScript','iwau', 'reckt', 
  'nottrue','but','for','you'
 ];

let result = words[Math.floor(Math.random()*words.length)];
   return result;
}