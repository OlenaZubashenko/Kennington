let upgradeTime = 461501;
let seconds = upgradeTime;
function timer() {
    let days = Math.floor(seconds / 24 / 60 / 60);
    let hoursLeft = Math.floor((seconds) - (days * 86400));
    let hours = Math.floor(hoursLeft / 3600);
    let minutesLeft = Math.floor((hoursLeft) - (hours * 3600));
    let minutes = Math.floor(minutesLeft / 60);
    let remainingSeconds = seconds % 60;
    function pad(n) {
        return (n < 10 ? "0" + n : n);
    }
    document.getElementById('days').innerHTML = pad(days) + " : ";
    document.getElementById('hrs').innerHTML = pad(hours) + " : ";
    document.getElementById('min').innerHTML = pad(minutes) + " : ";
    document.getElementById('sec').innerHTML = pad(remainingSeconds);

    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = "Completed";
    } else {
        seconds--;
    }
}
let countdownTimer = setInterval('timer()', 1000);
