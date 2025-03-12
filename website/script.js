window.addEventListener("load", sidenVises);

let minRand;
let point;
let life;
// let speed;
// document.querySelector("#life3").textContent = "Lives: " + life;

const bad1 = document.querySelector("#bad_container1");
const bad2 = document.querySelector("#bad_container2");
const bad3 = document.querySelector("#bad_container3");
const good1 = document.querySelector("#good_container1");
const good2 = document.querySelector("#good_container2");
const good3 = document.querySelector("#good_container3");

function sidenVises() {
  console.log("sidenVises");
// hide other screens
document.querySelector("#game_over").classList.add("hide");
document.querySelector("#level_complete").classList.add("hide");
document.querySelector("#game").classList.add("hide");
document.querySelector("#how_to_play").classList.add("hide");

// show start screen
document.querySelector("#start").classList.remove("hide");
// click on start button
document.querySelector("#start_button").addEventListener("click", startGame);
document.querySelector("#how_to_play_bttn").addEventListener("click", howToPlay);
}

function startGame() {
  console.log("startGame");
  
// hide all screens
document.querySelector("#game_over").classList.add("hide");
document.querySelector("#level_complete").classList.add("hide");
document.querySelector("#start").classList.add("hide");
document.querySelector("#how_to_play").classList.add("hide");
// shows game screen
document.querySelector("#game").classList.remove("hide");

// reset life  
life = 3;
document.querySelector("#life1").classList.remove("hide");
document.querySelector("#life2").classList.remove("hide");
document.querySelector("#life3").classList.remove("hide");
// reset points 
point = 0;
document.querySelector("#points").textContent = "Points: " + point;
//   document.querySelector("#life3").textContent = life;

// reset speed
// speed = 1;

// Add timer and stop game once the timer is done
    document.querySelector("#brain_fill").classList.remove("timer");
    document.querySelector("#brain_fill").classList.add("timer");
    document.querySelector("#time_board").addEventListener("animationend", stopGame);

// Bad 1
    bad1.classList.remove("hide");
  bad1.classList.add("pos" + newRand(8), "bad_fall", "delay" + newRand(4), "speed" + newRand(3));
  bad1.addEventListener("animationiteration", badFallReset);
  bad1.addEventListener("animationend", badFallReset);
  bad1.addEventListener("mousedown", clickBad);
// Bad 2
    bad2.classList.remove("hide");
  bad2.classList.add("pos" + newRand(8), "bad_fall", "delay" + newRand(4), "speed" + newRand(3));
  bad2.addEventListener("animationiteration", badFallReset);
  bad2.addEventListener("animationend", badFallReset);
  bad2.addEventListener("mousedown", clickBad);
// Bad 3
    bad3.classList.remove("hide");
  bad3.classList.add("pos" + newRand(8), "bad_fall", "delay" + newRand(4), "speed" + newRand(3));
  bad3.addEventListener("animationiteration", badFallReset);
  bad3.addEventListener("animationend", badFallReset);
  bad3.addEventListener("mousedown", clickBad);
// Good 1
    good1.classList.remove("hide");
  good1.classList.add("pos" + newRand(8), "fall", "delay" + newRand(4), "speed" + newRand(3));
  good1.addEventListener("animationiteration", resetGood);
  good1.addEventListener("animationend", resetGood);
  good1.addEventListener("mousedown", clickGood);
// Good 2
    good2.classList.remove("hide");
  good2.classList.add("pos" + newRand(8), "fall", "delay" + newRand(4), "speed" + newRand(3));
  good2.addEventListener("animationiteration", resetGood);
  good2.addEventListener("animationend", resetGood);
  good2.addEventListener("mousedown", clickGood);
// Good 3
    good3.classList.remove("hide");
  good3.classList.add("pos" + newRand(8), "fall", "delay" + newRand(4), "speed" + newRand(3));
  good3.addEventListener("animationiteration", resetGood);
  good3.addEventListener("animationend", resetGood);
  good3.addEventListener("mousedown", clickGood);
}

function clickBad() {
  console.log("clickBad");
// add 100 points and update score board when click on bad
// removes event listener from bad container
// adds vanish animation to bad container and sprite
// adds event listener for when animation is done
  point+=100;
  document.querySelector("#points").textContent = "Points: " + point;
  this.removeEventListener("animationiteration", badFallReset);
  this.removeEventListener("animationend", badFallReset);
  this.removeEventListener("mousedown", clickBad);
  this.classList.add("vanish");
  this.firstElementChild.classList.add("vanish");
  this.addEventListener("animationend", resetBad);

  document.querySelector("#sound_pop1").currentTime = 0;
  document.querySelector("#sound_pop1").play();
}

function resetBad() {
  console.log("resetBad");
// removes all classes from sprites
// resets ???
// gives bad elements random positions
// makes bad elements clickable again
  this.classList = "";
  this.firstElementChild.classList = "";
  this.offsetLeft;
  this.classList.add("pos" + newRand(8), "bad_fall", "delay" + newRand(4), "speed" + newRand(3));
  this.addEventListener("animationiteration", badFallReset);
  this.addEventListener("animationend", badFallReset);
  this.addEventListener("mousedown", clickBad);
}

function badFallReset() {
    console.log("badFallReset")
    
    this.classList = "";
    this.firstElementChild.classList = "";
    this.offsetLeft;
    this.classList.add("pos" + newRand(8), "bad_fall", "delay" + newRand(4), "speed" + newRand(3));
    this.addEventListener("mousedown", clickBad);

    document.querySelector("#life" + life).classList.add("hide");
    life--;
      if(life <=0){
        stopGame();
      }
    resetBad()
}

function clickGood() {
  console.log("clickGood");

  point-=50;
  document.querySelector("#points").textContent = "Points: " + point;

  this.removeEventListener("mousedown", clickGood);
  this.classList.add("vanish");
  this.firstElementChild.classList.add("vanish");
  this.addEventListener("animationend", resetGood);

  document.querySelector("#sound_punch1").currentTime = 0;
  document.querySelector("#sound_punch1").play();
  
  document.querySelector("#life" + life).classList.add("hide");
  life--;
  if(life <=0){
    stopGame();
  }
}

function resetGood() {
    console.log("resetGood");
// removes all classes from sprites
// resets ???
// gives bad elements random positions
// makes bad elements clickable again
    this.classList = "";
    this.firstElementChild.classList = "";
    this.offsetLeft;
    this.classList.add("pos" + newRand(8), "fall", "delay" + newRand(4), "speed" + newRand(3));
    this.addEventListener("mousedown", clickGood);
}

function stopGame(){
    console.log("Stop Game")

    // reset timer
    document.querySelector("#brain_fill").classList.remove("timer");
    document.querySelector("#time_board").removeEventListener("animationend", stopGame);
    // remove all animations and remove all eventListerners
    // bad1
    bad1.classList = "";
    bad1.firstElementChild.classList = "";
    bad1.removeEventListener("animationiteration", resetBad);
    bad1.removeEventListener("animationend", resetBad);
    bad1.removeEventListener("mousedown", clickBad);   
    // bad2
    bad2.classList = "";
    bad2.firstElementChild.classList = "";
    bad2.removeEventListener("animationiteration", resetBad);
    bad2.removeEventListener("animationend", resetBad);
    bad2.removeEventListener("mousedown", clickBad);   
    // bad3
    bad3.classList = "";
    bad3.firstElementChild.classList = "";
    bad3.removeEventListener("animationiteration", resetBad);
    bad3.removeEventListener("animationend", resetBad);
    bad3.removeEventListener("mousedown", clickBad);   
    // good1
    good1.classList ="";
    good1.firstElementChild.classList = "";
    good1.removeEventListener("animationiteration", resetGood);
    good1.removeEventListener("animationend", resetGood);
    good1.removeEventListener("mousedown", clickGood);
    // good2
    good2.classList ="";
    good2.firstElementChild.classList = "";
    good2.removeEventListener("animationiteration", resetGood);
    good2.removeEventListener("animationend", resetGood);
    good2.removeEventListener("mousedown", clickGood);
    // good3
    good3.classList ="";
    good3.firstElementChild.classList = "";
    good3.removeEventListener("animationiteration", resetGood);
    good3.removeEventListener("animationend", resetGood);
    good3.removeEventListener("mousedown", clickGood);
    
    bad1.classList.add("hide");
    bad2.classList.add("hide");
    bad3.classList.add("hide");
    good1.classList.add("hide");
    good2.classList.add("hide");
    good3.classList.add("hide");

    // functions to determine if game is won or lost
    if(life <= 0){
        gameOver();
      } else if (point >= 1000){
        levelCompete();
      } else {
        gameOver();
      }
    }
function gameOver(){
    console.log("gameOver")
      // show game over screen
    document.querySelector("#game_over").classList.remove("hide");
    document.querySelector("#game_over_header").textContent = "Game Over";
    document.querySelector("#game_over_text").textContent = "Score: " + point + " points";
     // click on try again
    document.querySelector("#try_again").addEventListener("click", startGame);
    document.querySelector("#quit_bttn1").addEventListener("click", sidenVises);
    }
    
function levelCompete(){
    console.log("levelComplete")
        // show Level Complete screen
    document.querySelector("#level_complete").classList.remove("hide");
    document.querySelector("#level_complete_header").textContent = "You have transcended!";
    document.querySelector("#level_complete_text").textContent = "Score: " + point + " points ";
        // Click on play again
    document.querySelector("#play_again").addEventListener("click", startGame);
    document.querySelector("#quit_bttn2").addEventListener("click", sidenVises);
    }

function howToPlay(){
    console.log("howToPlay")
        // show how to play screen
    document.querySelector("#how_to_play").classList.remove("hide");
        // Click on play again
    document.querySelector("#play_bttn").addEventListener("click", startGame);
    document.querySelector("#menu_bttn").addEventListener("click", sidenVises);
    }


//help functions
function newRand (max){
  // sends a random number between max and 1 back
  return Math.floor(Math.random() * max) + 1;
}


