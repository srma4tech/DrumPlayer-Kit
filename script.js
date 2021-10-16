var x = document.querySelectorAll(".drum").length;
for (var i = 0; i < x; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var btnInnerHTML = this.innerHTML;
    //this.style.color = "white";
    makeSound(btnInnerHTML);
    btnAnimation(btnInnerHTML);
  });
}
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  btnAnimation(event.key);
});
function makeSound(sound) {

      switch (sound) {
        case "w":
          var audio = new Audio('sounds/tom-1.mp3');
          audio.play();
          break;
        case "a":
          var audio = new Audio('sounds/tom-2.mp3');
          audio.play();
          break;
        case "s":
          var audio = new Audio('sounds/tom-3.mp3');
          audio.play();
          break;
        case "d":
          var audio = new Audio('sounds/tom-4.mp3');
          audio.play();
          break;
        case "j":
          var audio = new Audio('sounds/snare.mp3');
          audio.play();
          break;
        case "k":
          var audio = new Audio('sounds/crash.mp3');
          audio.play();
          break;
        case "l":
          var audio = new Audio('sounds/kick-bass.mp3');
          audio.play();
          break;
        default:
          connsole.log(event.key);
  }
}
 function btnAnimation(currentKey) {
   var actBtn = document.querySelector("." + currentKey);
   actBtn.classList.add("pressed");
   setTimeout(function(){
     actBtn.classList.remove("pressed");
   }, 100);
 }
