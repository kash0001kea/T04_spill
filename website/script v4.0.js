window.addEventListener("load", sidenVises);

let minRand;
let point;
let life;
// document.querySelector("#life3").textContent = "Lives: " + life;

const bad1 = document.querySelector("#bad_container");
const good1 = document.querySelector("#good_container");

function sidenVises() {
  console.log("sidenVises");

  startGame();
}

function startGame() {
  console.log("startGame");
life = 3;
point = 0;
document.querySelector("#points").textContent = "Points: " + point;
//   document.querySelector("#life3").textContent = life;

// Bad
  bad1.classList.add("pos" + newRand(8), "fall", "delay" + newRand(4));
  bad1.addEventListener("animationiteration", resetBad);
  bad1.addEventListener("animationend", resetBad);
  bad1.addEventListener("mousedown", clickBad);
// Good
  good1.classList.add("pos" + newRand(8), "fall", "delay" + newRand(4));
  good1.addEventListener("animationiteration", resetGood);
  good1.addEventListener("animationend", resetGood);
  good1.addEventListener("mousedown", clickGood);
// Add function to stop game once the timer is done
  document.querySelector("#time_board").addEventListener("animationend", stopGame);
}

function clickBad() {
  console.log("clickBad");
// add 100 points and update score board when click on bad
// removes event listener from bad container
// adds vanish animation to bad container and sprite
// adds event listener for when animation is done
  point+=100;
  document.querySelector("#points").textContent = "Points: " + point;
  bad1.removeEventListener("mousedown", clickBad);
  bad1.classList.add("vanish");
  document.querySelector("#bad_sprite").classList.add("vanish");
  bad1.addEventListener("animationend", resetBad);
}

function resetBad() {
  console.log("resetBad");
// removes all classes from sprites
// resets ???
// gives bad elements random positions
// makes bad elements clickable again
  bad1.classList = "";
  document.querySelector("#bad_sprite").classList = "";
  bad1.offsetLeft;
  bad1.classList.add("pos" + newRand(8), "fall", "delay" + newRand(4));
  bad1.addEventListener("mousedown", clickBad);
}

function clickGood() {
  console.log("clickGood");

  point-=50;
  document.querySelector("#points").textContent = "Points: " + point;

  good1.removeEventListener("mousedown", clickGood);
  good1.classList.add("vanish");
  document.querySelector("#good_sprite").classList.add("vanish");
  good1.addEventListener("animationend", resetGood);
  
  document.querySelector("#life" + life).classList.add("hide");
  life--;
  if(life <=0){
    stopGame();
  }
}

function resetGood() {
    console.log("resetGood");
    
    good1.classList = "";
    document.querySelector("#good_sprite").classList = "";
    good1.offsetLeft;
    good1.classList.add("pos" + newRand(8), "fall", "delay" + newRand(4));
    good1.addEventListener("mousedown", clickGood);
}

function stopGame(){
    console.log("Stop Game")

    // reset timer
    document.querySelector("#brain_fill").classList.remove("timer");
    document.querySelector("#time_board").removeEventListener("animationend", stopGame);
    // remove all animations and remove all eventListerners
    bad1.classList = "";
    bad1.firstElementChild.classList = "";
    bad1.removeEventListener("animationiteration", resetBad);
    bad1.removeEventListener("animationend", resetBad);
    bad1.removeEventListener("mousedown", clickBad);   
    good1.classList ="";
    good1.firstElementChild.classList = "";
    good1.removeEventListener("animationiteration", resetGood);
    good1.removeEventListener("animationend", resetGood);
    good1.removeEventListener("mousedown", clickGood);
    
    bad1.classList.add("hide");
    good1.classList.add("hide");

    // functions to determine if game is won or lost
    if(life <= 0){
        gameOver();
      } else if (points >= 5){
        levelCompete();
      } else {
        gameOver();
      }
    }
function gameOver(){
    console.log("gameOver")
      // show game over screen
      // Click on restart1
    }
    
function levelCompete(){
    console.log("levelComplete")
        // show game level Complete screen
        // Click on restart1
    }


//help functions
function newRand (max){
  // sends a random number between max and 1 back
  return Math.floor(Math.random() * max) + 1;
}


