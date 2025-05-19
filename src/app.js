import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'Bobby'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRandomNumber(a, b){
  return Math.floor(Math.random()*(b-a)+a)
}

function getRandom(anyArray){
  let max = anyArray.length -1;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

window.onload = function () {
  const excuseElement = document.querySelector('#excuse');
  //write your code here
  console.log("Hello Rigo from the console!");
    excuseElement.innerHTML = `<h1>${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)}</h1>`;
};

