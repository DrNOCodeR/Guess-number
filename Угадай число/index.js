const answer = Math.floor(Math.random() * 100)+1;
let tries = 0;

const guess = document.getElementById('guess');
const btn = document.getElementById('btn');
const hint = document.getElementById('hint');
const result = document.getElementById('result');
const reset = document.getElementById('reset');

btn.onclick = function(){
  a = Number(guess.value);
  if (a===answer){
    hint.textContent = 'Вы угадали!';
    result.textContent = `Вы угадали число с ${tries} раза`;
  }
  else if (a>answer){hint.textContent = 'Меньше';}
  else if (a<answer){hint.textContent = 'Больше';}
  tries+=1;

}

reset.onclick = function(){
  tries=0;
  hint.textContent = '';
  result.textContent = '';
  guess.value = '';
}