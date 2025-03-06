function coinFlipStreak() {
    let coinFlip;

    do {
        coinFlip = Math.round(Math.random());
        if (coinFlip === 0) {
            console.log("Heads");
        } else {
            console.log("Tails");
        }
    } while (1 !== coinFlip);
}