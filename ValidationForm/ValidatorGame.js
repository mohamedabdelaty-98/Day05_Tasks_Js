//UserNameValidation
var user_name = document.getElementById("username");
var P_user_valid = document.getElementById("P_User");
var regex_username = /^[a-zA-Z]{4,}$/;
function UserNameValidation() {
  if (regex_username.test(user_name.value)) {
    P_user_valid.classList.add("Display_None");
    return true;
  } else {
    P_user_valid.classList.remove("Display_None");
    return false;
  }
}

//EmailValidation
var Email_s = document.getElementById("email");
var P_Email_valid = document.getElementById("P_email");
var regx_Email = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
function EmailValidation() {
  if (regx_Email.test(Email_s.value)) {
    P_Email_valid.classList.add("Display_None");
    return true;
  } else {
    P_Email_valid.classList.remove("Display_None");
    return false;
  }
}

//PasswordValidation
var password_s = document.getElementById("password");
var P_password_valid = document.getElementById("P_password");
var regx_password = /^(?=.*\d).{9,}$/;
function PasswordValidation() {
  if (regx_password.test(password_s.value)) {
    P_password_valid.classList.add("Display_None");
    return true;
  } else {
    P_password_valid.classList.remove("Display_None");
    return false;
  }
}

//GenderValidation
var P_gender_valid = document.getElementById("P_gender");
function GenderValidation() {
  var Gender_s = document.getElementsByName("gender");
  for (var i = 0; i < Gender_s.length; i++) {
    if (Gender_s[i].checked) return true;
  }
  return false;
}
//CHeckBoxValidation
var checkbox_s_running = document.getElementById("running");
var checkbox_s_tennies = document.getElementById("tennies");
var checkbox_s_football = document.getElementById("football");
var P_checkbox_valid = document.getElementById("P_Sport");
function CHeckBoxValidation() {
  if (checkbox_s_running.checked) return true;
  if (checkbox_s_tennies.checked) return true;
  if (checkbox_s_football.checked) return true;
  return false;
}

//SelectorValidation
var slector_dd = document.querySelector("select");
var p_select_valid = document.getElementById("P_select");
function SelectorValidation() {
  if (slector_dd.value === "") return false;
  return true;
}
user_name.addEventListener("input", UserNameValidation);
Email_s.addEventListener("input", EmailValidation);
password_s.addEventListener("input", PasswordValidation);

var btn_submit = document.querySelector("input[type='submit']");
btn_submit.addEventListener("click", function (e) {
  e.preventDefault();
  UserNameValidation();
  EmailValidation();
  PasswordValidation();
  if (GenderValidation()) P_gender_valid.classList.add("Display_None");
  else P_gender_valid.classList.remove("Display_None");

  if (CHeckBoxValidation()) P_checkbox_valid.classList.add("Display_None");
  else P_checkbox_valid.classList.remove("Display_None");

  if (SelectorValidation()) p_select_valid.classList.add("Display_None");
  else p_select_valid.classList.remove("Display_None");

  console.log(SelectorValidation());
  if (
    UserNameValidation() &&
    EmailValidation() &&
    PasswordValidation() &&
    GenderValidation() &&
    CHeckBoxValidation() &&
    SelectorValidation()
  ) {
    alert("success");
  }
});

function Submit_s() {}
var btn_reset = document.querySelector("input[type='reset']");
btn_reset.addEventListener("click", function () {
  document.querySelector("form").reset();
});
