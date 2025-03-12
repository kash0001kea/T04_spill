window.addEventListener("load", sidenVises);

// opretter variabel minRand
let minRand;

// establishes point and sets it to 0
let point = 0
document.querySelector("#points").textContent = "Points: " + point;

// establishes point and sets it to 0
let life = 3
document.querySelector("#life").textContent = "Lives: " + life;

// opretter konstanter
const bad1 = document.querySelector("#bad_container");
const good1 = document.querySelector("#good_container");




function sidenVises() {
  console.log("sidenVises");
  startGame();
}

function startGame() {
  console.log("startGame");



  // Laver et nyt random tal, og giver en random position til container og start fall-animationer på alle elementer
  bad1.classList.add("pos" + newRand(8), "fall", "delay" + newRand(4));
//   makes bad guy dance
//   document.querySelector("#bad_sprite").classList.add("dance");
  
  //Lyt efter fall-animationer er færdig
  bad1.addEventListener("animationiteration", resetBad);
  bad1.addEventListener("animationend", resetBad);
  //Lyt efter klik på alle elementer
  bad1.addEventListener("mousedown", clickBad);

  // Laver et nyt random tal, og giver en random position til container og start fall-animationer på alle elementer
  // minRand = Math.floor(Math.random() * 8) + 1;
  good1.classList.add("pos" + newRand(8), "fall", "delay" + newRand(4));
  //Lyt efter fall-animationer er færdig
  good1.addEventListener("animationiteration", resetGood);
  good1.addEventListener("animationend", resetGood);
  //Lyt efter klik på alle elementer
  good1.addEventListener("mousedown", clickGood);

  document.querySelector("#container").addEventListener("animationend", stopGame);
}

function clickBad() {
  console.log("clickBad");
  
  point+=100;
  // writes points on screen (HTML)
    document.querySelector("#points").textContent = "points: " + point;
  
  //ryd op, så man ikke kan kilkke på den samme flere gange
  bad1.removeEventListener("mousedown", clickBad);

  //frys (pause), fall-animationen
  bad1.classList.add("vanish");

  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  document.querySelector("#bad_sprite").classList.add("vanish");

  //Lyt efter fall-animationer er færdig
  bad1.addEventListener("animationend", resetBad);
}

function resetBad() {
  console.log("resetBad");
  //ryd op, fjern alt er på container og sprite
  bad1.classList = "";
  document.querySelector("#bad_sprite").classList = "";
  //For at kunne genstarte fall animationen, da vi fjener og tilføjer den i samme function
  bad1.offsetLeft;
  //Giv en position til container og start fall-animationer på element
  // minRand = Math.floor(Math.random() * 8) + 1;
  bad1.classList.add("pos" + newRand(8), "fall", "delay" + newRand(4));
  //Lyt efter klik på element
  bad1.addEventListener("mousedown", clickBad);
}

function clickGood() {
  console.log("clickGood");

  point-=50;
  // writes points on screen (HTML)
    document.querySelector("#points").textContent = "points: " + point;

    life--;
  // writes points on screen (HTML)
    document.querySelector("#life").textContent = "Lives: " + life;

  //ryd op, så man ikke kan kilkke på den samme flere gange
  good1.removeEventListener("mousedown", clickBad);
  //frys (pause), fall-animationen
  good1.classList.add("vanish");
  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  document.querySelector("#good_sprite").classList.add("vanish");
  //Lyt efter fall-animationer er færdig
  good1.addEventListener("animationend", resetGood);
}

function resetGood() {
  console.log("resetGood");
  //ryd op, fjern alt er på container og sprite
  good1.classList = "";
  document.querySelector("#good_sprite").classList = "";
  //For at kunne genstarte fall animationen, da vi fjener og tilføjer den i samme function
  good1.offsetLeft;
  //Giv en position til container og start fall-animationer på element
  // minRand = Math.floor(Math.random() * 8) + 1;
  good1.classList.add("pos" + newRand(8), "fall", "delay" + newRand(4));
  //Lyt efter klik på element
  good1.addEventListener("mousedown", clickBad);
}


function newRand (max){
  // sends a random number between max and 1 back
  return Math.floor(Math.random() * max) + 1;
}


function stopGame(){
    console.log("Stop Game")

    good1.classList = "";
    document.querySelector("#good_sprite").classList = "";

    bad1.classList = "";
    document.querySelector("#bad_sprite").classList = "";
}