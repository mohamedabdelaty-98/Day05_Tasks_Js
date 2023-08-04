var input_txt = document.getElementById("input");
var div_red = document.getElementById("ready");
var div_steady = document.getElementById("steady");
var div_go = document.getElementById("go");
var div_ready_label = document.getElementById("ready_label");
var div_steady_label = document.getElementById("steady_label");
var div_go_label = document.getElementById("go_label");
function set_traffic() {
  setTimeout(function () {
    div_red.style.borderColor = "red";
    div_ready_label.style.opacity = 100;
    div_go.style.borderColor = "gray";
    div_go_label.style.opacity = 0;
  }, 500);
  setTimeout(function () {
    div_steady.style.borderColor = "yellow";
    div_steady_label.style.opacity = 100;
    div_red.style.borderColor = "gray";
    div_ready_label.style.opacity = 0;
  }, 1000);
  setTimeout(function () {
    div_go.style.borderColor = "green";
    div_go_label.style.opacity = 100;
    div_steady.style.borderColor = "gray";
    div_steady_label.style.opacity = 0;
  }, 1500);
}
setInterval(function () {
  set_traffic();
}, 1500);
