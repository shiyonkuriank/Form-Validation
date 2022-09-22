import './index.css';

(function (w) {
  let details = [];
  let regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  let emailEl = document.querySelector('#email-el');
  let passwordEl = document.querySelector('#password-el');
  let confirmPasswordEl = document.querySelector('#confirm-password-el');
  let signUpEl = document.querySelector('#sign-up-el');
  let errorEl = document.querySelector('#error-el');

  let email = emailEl.value;
  let pass1 = passwordEl.value;
  let pass2 = confirmPasswordEl.value;

  signUpEl.addEventListener('click', function () {
    if (pass1 === pass2) {
      if (!regularExpression.test(pass1)) {
        errorEl.textContent =
          'password should contain atleast one number and one special character';
        return false;
      } else {
        details.push(email, pass1);
      }

      // console.log(details);
    } else {
      errorEl.textContent = "Password Doesn't match";
    }
  });
  console.log(details);
})(window);
