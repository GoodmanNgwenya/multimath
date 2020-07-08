import {Player} from './player';
import {Game}from './game';
import * as Helpers from './utility';
// import { Register } from './register';
import { PersonalDetails } from './personalDetails';

let newGame:Game;
let personalDetails: PersonalDetails;
//add click handle to the start game button
document.getElementById('startGame')!.addEventListener('click',()=>{
  const player:Player=new Player();
  player.name=Helpers.getValue('playername');

  const problemCount:number=Number(Helpers.getValue('problemCount'));
  const factor:number=Number(Helpers.getValue('factor'));
  newGame = new Game(player,problemCount,factor);
  newGame.displayGame();
 
});

//add click handle to the start checkbox
document.getElementById('myCheck')!.addEventListener('click', () => {

  var element = <HTMLInputElement> document.getElementById("btnRegister");
  var checkBox = <HTMLInputElement>document.getElementById("myCheck");
  
  element.disabled = !checkBox.checked;
  checkBox.onclick = () => {
     element.disabled = !checkBox.checked;
  }

  // personalDetails.surname = formData.get('surname') as string;
  // personalDetails.nickname = formData.get('nickname') as string;
  // personalDetails.email = formData.get('email') as string;
  // personalDetails.password = formData.get('password') as string;
  // personalDetails.newPassword = formData.get('newpassword') as string;
    //  console.log("Forenames "+personalDetails.forename);
    //   console.log("Surname "+personalDetails.surname);
    //   console.log("Nickname "+personalDetails.nickname);
    //   console.log("Email "+personalDetails.email);
}); 

document.getElementById('btnRegister')!.addEventListener('click', () => {

  const register = <HTMLFormElement>document.querySelector('#registerform');
  const formData = new FormData(register);
  const forename = formData.get('forenames') as string;
  const surname = formData.get('surname') as string;
  const nickname = formData.get('nickname') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const newPassword = formData.get('newpassword') as string;

  if ((forename != null || forename != " ") &&(surname != null || surname != " ") &&(email != null || email != " ") &&(password != null || password != " "))
  {
          if (password != newPassword){
            alert("Password do not match");
        }
        else {
            console.log("Forenames " + forename);
            console.log("Surname " + surname);
            console.log("Nickname " + nickname);
            console.log("Email " + email);
        }
  }
  else {
    alert("Input field required");
  }
});

// const inputElement: HTMLInputElement = document.getElementById('myCheck') as HTMLInputElement;
// inputElement.addEventListener("checked", () => {
//   alert("checked");
// });

//add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click',() => {
  newGame.calculateScore();
});

//call all the array function
function runArrayMethod()
{
  numAboveFifty();
  replaceName(); 
  removeAdam();
  removeLastNumber();
  myFunction();
  pushNumber();
  myIndexOf();
  myUnshift();
  ConcatTwoArray();
}

//display number greater than 50
var nums = [89, 5, 56, 102,7];
function checkNum(num:any) {
  return num > 50;
}

function numAboveFifty() {
  console.log(nums.filter(checkNum));
}

//replace Beth and Adam
var names = ["John", "Sarah", "Beth", "Adam","Peter"];

function replaceName() {
  names.splice(2, 2, "Cindy", "Zoe");
  console.log(names);
}

//remove Adam from the array
var names = ["John", "Sarah", "Beth", "Adam","Peter"];

function removeAdam() {
  names.splice(3,1);
  console.log(names);
}

//remove last Number using pop
var removeLastNum = [89,5,56,102,7];

function removeLastNumber() {
  removeLastNum.pop();
  alert(removeLastNum);
}

//slice method to create a new array
var names = ["John", "Sarah", "Beth", "Adam", "Peter"];

function myFunction() {
  names.splice(0,5,"Sarah", "Beth", "Adam");
  console.log(names);
}

//add 78 with push
var pushNum = [89,5,56,102,7];

function pushNumber() {
  pushNum.push(78);
  alert(pushNum);
}

//indexOf 5
function myIndexOf() {
  var index = [89,5,56,102,7].indexOf(5); 
  alert("index is : " + index );
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