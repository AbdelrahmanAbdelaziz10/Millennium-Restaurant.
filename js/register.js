let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#Confirm_password");
let submit = document.querySelector(".btt .submit");

let users = [];

if (localStorage.getItem("users")) {
  users = JSON.parse(localStorage.getItem("users"));
}

// =========  Register ========

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    userName.value !== "" &&
    email.value !== "" &&
    password.value !== "" &&
    confirmPassword.value !== ""
  ) {
    if (password.value === confirmPassword.value) {
      if (password.value.trim().length >= "8") {
        let user = {
          name: userName.value,
          email: email.value,
          password: password.value.trim(),
        };
        users.push(user);
        addUserToLocal(users);
        window.location.href = "login.html";
      }
    } else {
      validdataInputs();
    }
  } else {
    validdataInputs();
  }
});

let setError = (element, massage) => {
  let inputControl = element.parentElement;
  let errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerHTML = massage;
  inputControl.classList.add("error");
};

let isValidEmail = (email) => {
  let emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
};

let validdataInputs = () => {
  let usernameValue = userName.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let confirmPasswordValue = confirmPassword.value.trim();

  let data = [];
  if (localStorage.getItem("users")) {
    data = JSON.parse(localStorage.getItem("users"));
  }
  let alreadyUserExit;
  data.forEach((el) => {
    if (el.name == usernameValue) {
      alreadyUserExit = el.name;
    }
  });

  //   console.log(data);

  if (usernameValue === "") {
    setError(userName, "Please Enter Name");
  } else if (usernameValue === alreadyUserExit) {
    setError(userName, "This Name Is Already Exit");
  } else{
    setError(userName, "");
  }
  if (emailValue === "") {
    setError(email, "Please Enter Email");
  } else if (emailValue) {
    if (!isValidEmail(emailValue)) {
      setError(email, "Please Enter Valid Email");
    } else{
      setError(email, "");
    }
  }else{
    setError(email, "");
  }
  
  if (passwordValue === "") {
    setError(password, "Please Enter Password");
  } else if (passwordValue.length < 8) {
    setError(password, "Password Must Be At Least 8 Characters");
  }else{
    setError(password, "");
  }

  if (confirmPasswordValue === "") {
    setError(confirmPassword, "Please Enter Confirm Password");
  } else if (confirmPasswordValue !== passwordValue) {
    setError(confirmPassword, "Password And Confirm Password Must Be Same");
  } else{
    setError(confirmPassword, "");
  }
};

function addUserToLocal(arr) {
  localStorage.setItem("users", JSON.stringify(arr));
}
