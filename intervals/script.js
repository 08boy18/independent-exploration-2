// Number of seconds that have passed
let time = 0;
// Reference to the <span> containing the number
let counterElement = document.getElementById("time");
function updateCounter() {
    time++;
    counterElement.textContent = time;
}

setInterval(updateCounter, 1000);