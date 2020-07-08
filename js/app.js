"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var game_1 = require("./game");
var Helpers = require("./utility");
var newGame;
var personalDetails;
document.getElementById('startGame').addEventListener('click', function () {
    var player = new player_1.Player();
    player.name = Helpers.getValue('playername');
    var problemCount = Number(Helpers.getValue('problemCount'));
    var factor = Number(Helpers.getValue('factor'));
    newGame = new game_1.Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('myCheck').addEventListener('click', function () {
    var element = document.getElementById("btnRegister");
    var checkBox = document.getElementById("myCheck");
    element.disabled = !checkBox.checked;
    checkBox.onclick = function () {
        element.disabled = !checkBox.checked;
    };
});
document.getElementById('btnRegister').addEventListener('click', function () {
    var register = document.querySelector('#registerform');
    var formData = new FormData(register);
    var forename = formData.get('forenames');
    var surname = formData.get('surname');
    var nickname = formData.get('nickname');
    var email = formData.get('email');
    var password = formData.get('password');
    var newPassword = formData.get('newpassword');
    console.log("Forenames " + forename);
    console.log("Surname " + surname);
    console.log("Nickname " + nickname);
    console.log("Email " + email);
});
document.getElementById('calculate').addEventListener('click', function () {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map