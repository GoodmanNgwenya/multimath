const form: HTMLFormElement = document.querySelector('#myform');

form.onsubmit = () => {
  const formData = new FormData(form);

  console.log(formData);
  const firstname = formData.get('forenames') as string;
 const surname = formData.get('lastname') as string;
 const nickname = formData.get('nickname') as string;
 const email = formData.get('email') as string;
 const password = formData.get('password') as string;
 const newpassword = formData.get('newpassword') as string;
 console.log(firstname);
console.log(surname);
console.log(nickname);
 console.log(email);
  return false; 
};

  const checkbox = <HTMLInputElement>document.getElementById('checkboxId');
    if(checkbox.checked){
      var element = <HTMLInputElement> document.getElementById("btnRegister");
      element.disabled = false;
        } else{
          var element = <HTMLInputElement> document.getElementById("btnRegister");
          element.disabled = true;
        }
