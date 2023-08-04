var currentMarbelIndex = 0;
var allMarbels = document.querySelectorAll("#marbels img");
console.log(allMarbels);
var interval;
startSwitch();

function startSwitch() {
  interval = setInterval(function () {
    switchMarbel(
      allMarbels[currentMarbelIndex],
      allMarbels[currentMarbelIndex == 4 ? 0 : currentMarbelIndex + 1]
    );
    currentMarbelIndex = currentMarbelIndex == 4 ? 0 : currentMarbelIndex + 1;
  }, 500);
}
document.getElementById("marbels").onmouseenter = function (e) {
  clearInterval(interval);
};

document.getElementById("marbels").onmouseleave = function (e) {
  startSwitch();
};

function switchMarbel(marbel1, marbel2) {
  marbel1.src = "./images/marble1.jpg";
  marbel2.src = "./images/marble3.jpg";
}
