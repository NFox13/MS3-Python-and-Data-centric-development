//DOM Elements
const time = document.getElementById("time"),
    greeting = document.getElementById("greeting");

//Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //Set AM or PM
    const ampm = hour >= 12 ? "pm" : "am";

    //12hr Format
    hour = hour % 12 || 12;

    //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span> </span>${ampm}`;

    setTimeout(showTime, 1000);
}

//Add Zero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//Set Greeting
function setGreet() {
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12) {
        greeting.textContent = "Good Morning";
    } else if(hour < 18) {
        greeting.textContent = "Good Afternoon";
    } else {
        greeting.textContent = "Good Evening";
    }
}

//Run
showTime();
setGreet();