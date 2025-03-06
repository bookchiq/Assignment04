function coinFlipRedux() {
    let coinFlip;
    let timesToFlip = prompt("Enter the number of times you want to flip the coin: ");
    
    if (isNaN(timesToFlip) || timesToFlip === "") {
        alert("Please enter a valid number.");
        coinFlipRedux();
    } else {
        for (let i = 0; i < timesToFlip; i++) {
            coinFlip = Math.round(Math.random());
            if (coinFlip === 0) {
                console.log("Heads");
            }
            else {
                console.log("Tails");
            }
        }
    }
}