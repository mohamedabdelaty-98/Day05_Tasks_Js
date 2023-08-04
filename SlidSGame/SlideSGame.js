var img = document.images[0];
var count = 1;
function set_interval() {
  var img = document.images[0];
  img.setAttribute("src", "./Images/" + count + ".jpg");
  count++;
  if (count == 6) {
    count = 1;
  }
}
var myInterval;
function Start_btn() {
  myInterval = setInterval(set_interval, 1000);
}

function Stop_btn() {
  setTimeout(function () {
    clearInterval(myInterval);
  });
  console.log("done");
}
