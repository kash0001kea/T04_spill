window.addEventListener("load", sidenVises);
//creates a variable named "points"
// let point = 0;
// let myRan
function sidenVises() {
    console.log("sidenVises");
    // reset point til 0
    // point = 0
    // document.querySelector("#points").textContent = "Points: " + point;

    // start 
    // New random number between 1 and 4
    // myRan = Math.floor(Math.random() * 4 + 1);
    // console.log(myRan);
    // document.querySelector("#red_container").classList.add("flyv" , "pos" + myRan);
    // New random number between 1 and 4
//     myRan = Math.floor(Math.random() * 4 + 1);
    document.querySelector("#good_container").classList.add("fall");
    document.querySelector("#good_sprite").classList.add("spin");
    // document.querySelector("#good_container").classList.add("fall" , "pos" + myRan);

    document.querySelector("#bad_container").classList.add("fall");
    document.querySelector("#bad_sprite").classList.add("dance");

    document.querySelector("#good_container").addEventListener("mousedown", clickGoodHandler);
    document.querySelector("#bad_container").addEventListener("mousedown", clickBadHandler);

    document.querySelector("#good_container").addEventListener("animationiteration", goodReset);
//  document.querySelector("#blue_container").addEventListener("mousedown", clickBlueHandler);
}

// // ---------------- good functions ------------------

//function for when you click on good
function clickGoodHandler(){
    console.log("clickGoodHandler");
    // makes it so you can only click once
    document.querySelector("#good_container").removeEventListener("mousedown", clickGoodHandler);

    // document.querySelector("#good_container").classList.add("frys");
    document.querySelector("#good_sprite").classList.remove("spin");
    document.querySelector("#good_sprite").classList.add("vanish");

//     // gives +1 point
//     point++;
//     // console.log is optional here
//     console.log(point);
//     // writes points on screen (HTML)
//     document.querySelector("#points").textContent = "points: " + point;
//     // creates a new function to reset red 
    document.querySelector("#good_container").addEventListener("animationiteration", goodReset);

}
// reset good
function goodReset(){
    console.log("goodReset");
//     // makes it so you can only click once
    document.querySelector("#good_container").addEventListener("mousedown", clickGoodHandler);

    document.querySelector("#good_container").classList = "";
    document.querySelector("#good_sprite").classList = "";
    
    // document.querySelector("#good_container").classList.remove("fall");
    document.querySelector("#good_container").offsetLeft;
//     // New random number between 1 and 4
//     myRan = Math.floor(Math.random() * 4 + 1);
//     document.querySelector("#red_container").classList.add("flyv" , "pos" + myRan);
    document.querySelector("#good_container").classList.add("fall");
    document.querySelector("#good_sprite").classList.add("spin");

}
// // ----------------- bad guy functions -----------------------

// // function for when you click on bad
function clickBadHandler(){
    console.log("clickBadHandler");
    document.querySelector("#bad_container").removeEventListener("mousedown", clickBadHandler);

    document.querySelector("#bad_container").classList.remove("fall");
    document.querySelector("#bad_sprite").classList.add("vanish");

//     point--;
//     // (test)point-=100;
//     console.log(point);
//     // write on screen
//     document.querySelector("#points").textContent = "points: " + point;
//     // creates a new function to reset blue 
    document.querySelector("#bad_container").addEventListener("animationend", badReset);
}

// // reset blue
function badReset(){
    console.log("badReset");
    document.querySelector("#bad_container").classList = "";
    document.querySelector("#bad_sprite").classList = "";
    
    document.querySelector("#bad_container").offsetLeft;
//     // New random number between 1 and 4
//     myRan = Math.floor(Math.random() * 4 + 1);
    document.querySelector("#bad_container").classList.add("fall");
//     document.querySelector("#bad_container").classList.add("fall" , "pos" + myRan);
}