function ShowPass() {
    if (pass.type === "password") {
      pass.type = "text";
    } 
    else {
      pass.type = "password";
    }
  }


const email = document.getElementById("email");
const password = document.getElementById("pass");
const btnsubmit = document.getElementById("RegisterForm");


function submit(e) {
  e.preventDefault();
  const user = {
    email: e.target[0].value,
    password: e.target[1].value,
  };
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "../login/login.html";
  alert("Registration suceed")
}

btnsubmit.addEventListener("submit", submit);


