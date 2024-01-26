function ShowPass() {
    if (pass.type === "password") {
      pass.type = "text";
    } 
    else {
      pass.type = "password";
    }
  }

  const btnsubmit = document.getElementById("LoginForm");
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("pass");
 
  function submit(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("User not found");
    } else {
      if (
        user.email === inputEmail.value &&
        user.password === inputPassword.value
      ) {
        window.location.href = "../../../Home.html";
      } else {
        console.log("error");
      }
    }
  }


  const url = 'https://hotels4.p.rapidapi.com/v2/get-meta-data';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bc22d1a301msh02bda9ce4070b01p183f48jsn1091b356f4e2',
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    }
  };
  
  const getData = async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

  getData();
btnsubmit.addEventListener("submit", submit);
