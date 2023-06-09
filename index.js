function party() {
  var buttonInnerHtml = this.innerHTML;
  makesound(buttonInnerHtml);
  button_Animation(buttonInnerHtml);
}

// detecting buttons press
let numofbutt = document.querySelectorAll(".drum").length;

for (i = 0; i < numofbutt; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", party);
}
//detecting keyboard press
document.addEventListener("keypress", function (event) {
  makesound(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var tom1 = new Audio("./sounds/snare.mp3");
      tom1.play();
      break;
    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttoninnerHtml);
      break;
  }
  button_Animation(key);
}
function button_Animation(currentkey) {
  var activebutton = document.querySelector("." + currentkey);
  activebutton.classList.add("pressed");

  setTimeout(function()  {
  activebutton.classList.remove("pressed");
    
  }, 100);
}
