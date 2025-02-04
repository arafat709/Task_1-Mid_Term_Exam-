const digitalClk = document.getElementById("digitalClock");

function startTime() {
    digitalClock = setInterval(function () {
        digitalClk.innerHTML = new Date().toLocaleTimeString();
    }, 1000);
};
startTime();