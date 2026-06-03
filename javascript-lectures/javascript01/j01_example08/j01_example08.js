function changeText() {
    const mySpan = document.getElementById("myDiv");
    mySpan.textContent = "Hello World!";
}

function getNameAndWriteIntoDiv() {
    const myName = document.getElementById("myName");
    const myNameValue = myName.value;
    const myNameDiv = document.getElementById("myNameDiv");
    myNameDiv.textContent = myNameValue;
}

function validateAge() {
    console.log("function validateAge()")
    const myAge = document.getElementById("myAge");
    const myAgeValue = myAge.value;
    const ERROR_AGE_MSG = "Age should be less than 130 years and greater than 0 years";
    if (myAgeValue < 0 || myAgeValue > 130) {
        console.log(ERROR_AGE_MSG)
        // alert(ERROR_AGE_MSG);
        const myAgeErrorDiv = document.getElementById("myAgeErrorDiv");
        myAgeErrorDiv.textContent = ERROR_AGE_MSG;
    }
    else {
        myAgeErrorDiv.textContent = "";
    }
}

function getAgeAndWriteIntoDiv() {
    const myAge = document.getElementById("myAge");
    const myAgeValue = myAge.value;
    const myAgeDiv = document.getElementById("myAgeDiv");
    if (myAgeValue < 50) {
        myAgeDiv.textContent = "You are young";
    }
    else {
        myAgeDiv.textContent = "You are old";
    }
}
