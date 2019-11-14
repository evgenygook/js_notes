
//дата сегодня
let today = ()=> { 
  
var d = new Date();
var curr_date = d.getDate();
var curr_month = d.getMonth() + 1;
var curr_year = d.getFullYear();
  
  tdy = curr_year + "-" + curr_month + "-" + curr_date
  return tdy;
}

//генератор слов

function getWord (id) {
 var words = [
  'rock', 'paper', 'scissors', 'megaerror', 'escapology',
  'brightwork', 'verkrampte', 'protectrix', 'nudibranch', 'grandchild',
  'newfangled', 'flugelhorn', 'mythologer', 'pluperfect', 'jellygraph',
  'quickthorn', 'rottweiler', 'technician', 'cowpuncher', 'middlebrow',
  'jackhammer', 'triphthong', 'wunderkind', 'dazzlement', 'jabberwock',
  'witchcraft', 'pawnbroker', 'thumbprint', 'motorcycle', 'cryptogram'
 ];

let result = words[Math.floor(Math.random()*words.length)];
   return result;
}