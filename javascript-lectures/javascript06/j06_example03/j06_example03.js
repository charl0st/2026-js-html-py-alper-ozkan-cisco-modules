const targetNumber = Math.floor(Math.random() * 10) + 1; // Generate random number between 1 and 10

function checkGuess() {
    const guess = parseInt(document.getElementById("guess").value);

    if (isNaN(guess)) {
        document.getElementById("message").textContent = "Please enter a valid number.";
        return;
    }

    let attempts = 0;

    for (let i = 1; i <= 3; i++) {
        attempts++;
        switch (guess) {
            case targetNumber:
                document.getElementById("message").textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
                return;  // Exit the loop if guess is correct
            case lowerThan(guess):
                document.getElementById("message").textContent = "Your guess is too low. Try again.";
                break;
            case higherThan(guess):
                document.getElementById("message").textContent = "Your guess is too high. Try again.";
                break;
        }
    }

    document.getElementById("message").textContent = `Sorry, you ran out of guesses. The number was ${targetNumber}.`;
}

function lowerThan(number) {
    return number < targetNumber;
}

function higherThan(number) {
    return number > targetNumber;
}
