function countdown() {
    let startingNumber = parseInt(prompt("Enter a number to start the countdown:"));
    if (isNaN(startingNumber)) {
        alert("You must enter a number.");
        countdown();
    } else {
        for (let i = startingNumber; i >= 0; i--) {
            console.log(i);
        }
    }
}