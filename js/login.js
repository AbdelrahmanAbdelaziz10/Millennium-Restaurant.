// =========  Log IN ========
let userEmail = document.querySelector("#log_email");
let userPassword = document.querySelector("#log_password");
let loginBtn = document.querySelector(".log_btn");

let emailValue = userEmail.value.trim();
let passwordValue = userPassword.value.trim();

let users = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let setError = (element, massage) => {
    let inputControl = element.parentElement;
    let logErrorMassage = inputControl.querySelector(".log_error");
    logErrorMassage.innerHTML = massage;
    inputControl.classList.add("log_error");
  };
  let validaionLogIn = () => {
    let data = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    let emailExit;
    let passwordExit;
    data.forEach((el) => {
      if (el.name == emailValue || el.email == emailValue) {
        passwordExit = el.password;
      }
    });

    if (emailValue === "") {
      setError(userEmail, "Please Enter Email");
    } else if (emailValue) {
      if (!isValidEmail(emailValue)) {
        setError(userEmail, "Please Enter Valid Email");
      } else if (isValidEmail(emailValue)){
        setError(userEmail , "");
      }
    } 

    if (passwordValue === "") {
      setError(userPassword, "Please Enter Password");
    } else if (passwordValue !== passwordExit) {
      setError(userPassword, "Password Is Wrong Tray again");
    } else if (passwordValue === passwordExit){
      setError(userPassword , "");
    } 
    if (emailValue && passwordValue) {
      let form = document.querySelector(".log_form");
      form.submit();
    }
  };

  if (userEmail.value !== "" || userPassword.value !== "") {
    users.forEach((u) => {
      if (
        userEmail.value.trim() === u.email ||
        userEmail.value.trim() === u.name
      ) {
        setError(userEmail , "");
        if (userPassword.value.trim() === u.password) {
          console.log(u.email);
          console.log(u.password);
          setTimeout(() => {
            window.location.href = "../pages/home2.html";
          }, 1000);
        } else {
          validaionLogIn();
        }
      } else {
        validaionLogIn();
      }
    });
  }
});
