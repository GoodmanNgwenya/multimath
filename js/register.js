"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
var Register = (function () {
    function Register(personalDetails) {
        this.personalDetails = personalDetails;
    }
    Register.prototype.populateInfo = function () {
        var register = document.querySelector('#registerform');
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
//# sourceMappingURL=register.js.map