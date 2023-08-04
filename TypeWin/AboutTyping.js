var str_p = document.getElementById("str");
console.log(str_p);
var str_inside_p = "Hello Every body my names Mohamed Abdelaty";
var counter = 0;
function Write_message() {
  if (counter < str_inside_p.length) {
    str_p.innerHTML += str_inside_p.charAt(counter);
    counter++;
    setTimeout(Write_message, 500);
  }
}
Write_message();
