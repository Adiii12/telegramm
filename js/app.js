function hideLogin() {
  var home = document.getElementById("home");
  var signUp = document.getElementById("sign_up_by_number");
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  home.classList.add("hideHome");
  signUp.classList.add("signUpShow");
}
function hideSignUp() {
  var home = document.getElementById("home");
  var signUp = document.getElementById("sign_up_by_number");
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  home.classList.remove("hideHome");
  signUp.classList.remove("signUpShow");
}

// const selected_input = document.getElementById("selected__input").value;
const selected = document.querySelector("#sel");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

function dropdown() {
  optionsContainer.classList.toggle("active");
  document.body.scrollTop = 120; // For Safari
  document.documentElement.scrollTop = 120; // For Chrome, Firefox, IE and Opera
}

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    var selected_input = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    var text = o.querySelector(".code").innerHTML;

    document.getElementById("phone_2").value = text;
    document.getElementById("selected__input").value = selected_input.replace(
      /&amp;/g,
      "&"
    );
  });
});

function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("selected__input");
  filter = input.value.toUpperCase();
  ul = document.getElementById("optionContainer");
  li = ul.getElementsByClassName("option");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("span")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function redirect() {
  const text = "PLEASE WAIT";
  document.getElementById("next_btn").innerHTML = text;
  window.location.href = "http://127.0.0.1:5500/code.html";
  document.getElementsByClassName("next_btn").innerHTML = "";
}
