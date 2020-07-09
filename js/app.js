"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var game_1 = require("./game");
var user_1 = require("./user");
var Helpers = require("./utility");
var personalDetails = new user_1.User();
var newGame;
document.getElementById('startGame').addEventListener('click', function () {
    var player = new player_1.Player();
    player.name = Helpers.getValue('playername');
    var problemCount = Number(Helpers.getValue('problemCount'));
    var factor = Number(Helpers.getValue('factor'));
    newGame = new game_1.Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('loadInfo').addEventListener('click', function () {
    var txtpwd = (document.getElementById('password')).value;
    var isPass = ValidatePassword(txtpwd);
    if (isPass) {
        if ((personalDetails.forename != null || personalDetails.forename != " ") && (personalDetails.surname != null || personalDetails.surname != " ") && (personalDetails.email != null || personalDetails.email != " ") && (personalDetails.password != null || personalDetails.password != " ")) {
            if (personalDetails.password != personalDetails.newPassword) {
                alert("Password do not match");
            }
            else {
                personalDetails.forename = Helpers.getValue('forename');
                personalDetails.nickname = Helpers.getValue('nickname');
                personalDetails.surname = Helpers.getValue('surname');
                personalDetails.email = Helpers.getValue('email');
            }
        }
        else {
            alert("Input field required");
        }
    }
});
document.getElementById('isLocked').addEventListener('click', function () {
    var element = document.getElementById("loadInfo");
    var checkBox = document.getElementById("isLocked");
    element.disabled = !checkBox.checked;
    checkBox.onclick = function () {
        element.disabled = !checkBox.checked;
    };
});
document.getElementById('calculate').addEventListener('click', function () {
    newGame.calculateScore();
});
document.getElementById('runArray').addEventListener('click', function () {
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
function ValidatePassword(password) {
    var pass = /^[A-Za-z]\w{4,14}$/;
    if (password.match(pass)) {
        return true;
    }
    else {
        alert('Incorect passwor! make sure you include special character,aphabet,numeric values and contain 4 to 14 characters');
        return false;
    }
}
var nums = [89, 5, 56, 102, 7];
function checkNum(num) {
    return num > 50;
}
function numAboveFifty() {
    console.log("Number greater than 50 in an array");
    console.log(nums.filter(checkNum));
}
var names = ["John", "Sarah", "Beth", "Adam", "Peter"];
function replaceName() {
    names.splice(2, 2, "Cindy", "Zoe");
    console.log("replace Beth and Adam ");
    console.log(names);
}
var names = ["John", "Sarah", "Beth", "Adam", "Peter"];
function removeAdam() {
    names.splice(3, 1);
    console.log("remove Adam from the array");
    console.log(names);
}
var removeLastNum = [89, 5, 56, 102, 7];
function removeLastNumber() {
    removeLastNum.pop();
    console.log(removeLastNum);
}
var names = ["John", "Sarah", "Beth", "Adam", "Peter"];
function myFunction() {
    names.splice(0, 5, "Sarah", "Beth", "Adam");
    console.log("remove last Number using pop");
    console.log(names);
}
var pushNum = [89, 5, 56, 102, 7];
function pushNumber() {
    pushNum.push(78);
    console.log(pushNum);
}
function myIndexOf() {
    var index = [89, 5, 56, 102, 7].indexOf(5);
    console.log("index is : " + index);
}
var addnum = [89, 5, 56, 102, 7];
function myUnshift() {
    addnum.unshift(14, 67);
    console.log(addnum);
}
function ConcatTwoArray() {
    var num = [1, 2, 3];
    var alpha = ["a", "b", "c"];
}
//# sourceMappingURL=app.js.map