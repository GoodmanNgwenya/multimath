import {PersonalDetails} from './personalDetails';

export class Register{

  constructor(public personalDetails: PersonalDetails) {
  }

  
  populateInfo(): void {
   
  const register=< HTMLFormElement> document.querySelector('#registerform');
  const formData = new FormData(register);
  
  this.personalDetails.forename =  formData.get('forenames') as string;
  this.personalDetails.surname = formData.get('surname') as string;
  this.personalDetails.nickname = formData.get('nickname') as string;
  this.personalDetails.email = formData.get('email') as string;
  this.personalDetails.password = formData.get('password') as string;
  this.personalDetails.newPassword = formData.get('newpassword') as string;
  
     console.log("Forenames "+this.personalDetails.forename);
      console.log("Surname "+this.personalDetails.surname);
      console.log("Nickname "+this.personalDetails.nickname);
      console.log("Email "+this.personalDetails.email);
  }
  // const register: HTMLFormElement = document.querySelector('#registerform');
  // var element = <HTMLInputElement> document.getElementById("btnRegister");
  // var checkBox = <HTMLInputElement> document.getElementById("myCheck");
  
  // element.disabled = !checkBox.checked;
  // checkBox.onclick = () => {
  //    element.disabled = !checkBox.checked;
  // }
  // register.onsubmit = () => {

  // const formData = new FormData(register);
  // this.personalDetails.forename =  formData.get('forenames') as string;
  // this.personalDetails.surname = formData.get('surname') as string;
  // this.personalDetails.nickname = formData.get('nickname') as string;
  // this.personalDetails.email = formData.get('email') as string;
  // this.personalDetails.password = formData.get('password') as string;
  // this.personalDetails.newPassword = formData.get('newpassword') as string;
  
  //    console.log("Forenames "+personalDetails.forename);
  //     console.log("Surname "+personalDetails.surname);
  //     console.log("Nickname "+personalDetails.nickname);
  //     console.log("Email "+personalDetails.email);
  
  //   return false; 
  // };
}


