function roll() {

    var dice1 = document.querySelector(".img1") //First dice image 
    var dice2 = document.querySelector(".img2") //Second dice image

    var randomNumber1 = Math.ceil(Math.random() * 6); //Generating a random number between 1 and 6
    var randomNumber2 = Math.ceil(Math.random() * 6); //Generating a random number between 1 and 6

    var newDice1 = "images/dice" + randomNumber1 + ".png"; //Choosing a random new dice image between 1 and 6
    var newDice2 = "images/dice" + randomNumber2 + ".png"; //Choosing a random new dice image between 1 and 6 

    dice1.setAttribute("src", newDice1); //Changing the first dice image to a random dice image
    dice2.setAttribute("src", newDice2); //Changing the second dice image to a random dice image

    title = document.querySelector("h1"); //Making a variable for the H1 title
    
    if (randomNumber1 === randomNumber2) { //Changing the H1 title if there is a draw / player 1 wins / player 2 wins
        title.innerHTML = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        title.innerHTML = "🚩 Player 1 wins!";
    } else {
        title.innerHTML = "🚩 Player 2 wins!";
    }
}

window.onload = roll(); //Calling the function when the window is loaded 
