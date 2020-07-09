import {Player} from './player';
import { Game } from './game';
import { User } from './user';
import * as Helpers from './utility';

const  personalDetails:User=new User();
let newGame:Game;

//add click handle to the start game button
document.getElementById('startGame')!.addEventListener('click',()=>{
  const player:Player=new Player();
  player.name=Helpers.getValue('playername');

  const problemCount:number=Number(Helpers.getValue('problemCount'));
  const factor:number=Number(Helpers.getValue('factor'));
  newGame = new Game(player,problemCount,factor);
  newGame.displayGame();
 
});

document.getElementById('loadInfo')!.addEventListener('click', () => {

  if ((personalDetails.forename != null || personalDetails.forename != " ") &&(personalDetails.surname != null || personalDetails.surname != " ") &&(personalDetails.email != null || personalDetails.email != " ") &&(personalDetails.password != null || personalDetails.password != " "))
  {
          if (personalDetails.password !=personalDetails. newPassword){
            alert("Password do not match");
        }
        else {
          personalDetails.forename = Helpers.getValue('forename');
          personalDetails.nickname= Helpers.getValue('nickname');
          personalDetails.surname = Helpers.getValue('surname');
          personalDetails.email = Helpers.getValue('email');
        }
  }
  else {
    alert("Input field required");
  }
  
});


//add click handle to the start checkbox

document.getElementById('isLocked')!.addEventListener('click', () => {
  var element = <HTMLInputElement> document.getElementById("loadInfo");
  var checkBox = <HTMLInputElement>document.getElementById("isLocked");
  element.disabled = !checkBox.checked;
  checkBox.onclick = () => {
    element.disabled = !checkBox.checked;
  }
});

//add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click',() => {
  newGame.calculateScore();
});

//call all the array function
document.getElementById('runArray')!.addEventListener('click',() => {
  numAboveFifty();
  replaceName(); 
  removeAdam();
  removeLastNumber();
  myFunction();
  pushNumber();
  myIndexOf();
  myUnshift();
  ConcatTwoArray();
});

//display number greater than 50
var nums = [89, 5, 56, 102,7];
function checkNum(num:any) {
  return num > 50;
}

function numAboveFifty() {
  console.log("Number greater than 50 in an array");
  console.log(nums.filter(checkNum));
}

//replace Beth and Adam
var names = ["John", "Sarah", "Beth", "Adam","Peter"];

function replaceName() {
  names.splice(2, 2, "Cindy", "Zoe");
  console.log("replace Beth and Adam ");
  console.log(names);
}

//remove Adam from the array
var names = ["John", "Sarah", "Beth", "Adam","Peter"];

function removeAdam() {
  names.splice(3, 1);
  console.log("remove Adam from the array")
  console.log(names);
}

//remove last Number using pop
var removeLastNum = [89,5,56,102,7];

function removeLastNumber() {
  removeLastNum.pop();
  console.log(removeLastNum);
}

//slice method to create a new array
var names = ["John", "Sarah", "Beth", "Adam", "Peter"];

function myFunction() {
  names.splice(0, 5, "Sarah", "Beth", "Adam");
  console.log("remove last Number using pop");
  console.log(names);
}

//add 78 with push
var pushNum = [89,5,56,102,7];

function pushNumber() {
  pushNum.push(78);
  console.log(pushNum);
}

//indexOf 5
function myIndexOf() {
  var index = [89, 5, 56, 102, 7].indexOf(5); 
  console.log("index is : " + index );
  }

  //unshift method
  var addnum = [89, 5, 56, 102,7];

function myUnshift() {
  addnum.unshift(14, 67);
  console.log(addnum);
}

//Concat two string
function ConcatTwoArray() {
  var num = [1, 2,3];
  var alpha = ["a", "b", "c"];
  //var numABC = num.concat(alpha); 
 // console.log(numABC);
}


// function ValidateEmail(email:any)
// {
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(email.value.match(mailformat))
// {
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// email.focus();
// return false;
// }
// }