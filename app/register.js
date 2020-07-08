"use strict";
exports.__esModule = true;
exports.Register = void 0;
var Register = /** @class */ (function () {
    function Register(personalDetails) {
        this.personalDetails = personalDetails;
    }
    // const register: HTMLFormElement = document.querySelector('#registerform');
    // var element = <HTMLInputElement> document.getElementById("btnRegister");
    // var checkBox = <HTMLInputElement> document.getElementById("myCheck");
    // element.disabled = !checkBox.checked;
    // checkBox.onclick = () => {
    //    element.disabled = !checkBox.checked;
    // }
    Register.prototype.DisplayUserDetails = function () {
        var register = document.querySelector('#registerform');
        var element = document.getElementById("btnRegister");
        var checkBox = document.getElementById("myCheck");
        element.disabled = !checkBox.checked;
        checkBox.onclick = function () {
            element.disabled = !checkBox.checked;
        };
        var formData = new FormData(register);
        this.personalDetails.forename = formData.get('forenames');
        this.personalDetails.surname = formData.get('surname');
        this.personalDetails.nickname = formData.get('nickname');
        this.personalDetails.email = formData.get('email');
        this.personalDetails.password = formData.get('password');
        this.personalDetails.newPassword = formData.get('newpassword');
        console.log("Forenames " + this.personalDetails.forename);
        console.log("Surname " + this.personalDetails.surname);
        console.log("Nickname " + this.personalDetails.nickname);
        console.log("Email " + this.personalDetails.email);
    };
    return Register;
}());
exports.Register = Register;
