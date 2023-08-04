var success = document.getElementsByClassName("Succes")[0];
var error = document.getElementsByClassName("Error")[0];
var btn_success = document.querySelectorAll("button")[0];
var btn_error = document.querySelectorAll("button")[1];
console.log(btn_success);
console.log(btn_error);

btn_success.addEventListener("click", function () {
  success.classList.remove("Display_none");
  error.classList.add("Display_none");
});
btn_error.addEventListener("click", function () {
  error.classList.remove("Display_none");
  success.classList.add("Display_none");
});
