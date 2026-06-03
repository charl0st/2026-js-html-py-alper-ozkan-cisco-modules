let secondsRemaining = 5;

function updateTimer() {
    secondsRemaining--;

    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    let formattedTime = minutes + ":" + seconds;

    // Add leading zeros if necessary (using conditional statements)
    if (minutes < 10) {
        formattedTime = "0" + formattedTime;
    }
    if (seconds < 10 && seconds >= 0) {
        formattedTime = formattedTime.slice(0, -1) + "0" + formattedTime.slice(-1);
    }

    document.getElementById("timer").textContent = formattedTime;

    if (secondsRemaining === 0) {
        document.getElementById("timer").textContent = "Finished!";
        return;  // Stop the timer when it reaches 0
    }

    setTimeout(updateTimer, 1000);  // Schedule the next update after 1 second
}

function startCountdown() {
    secondsRemaining = 5;  // Reset the timer for each start
    updateTimer();
}
