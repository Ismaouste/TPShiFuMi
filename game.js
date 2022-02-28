console.log("It's on !");

document.getElementById('root').innerHTML = 'Pick a move to start playing against Computer!';
document.getElementById("intro").style.display = "none";
document.getElementById("result").style.display = "none";

// var r = 'rock',
//     s = 'scissors',
//     p = 'paper';

function Store(val) {
    document.getElementById('root').innerHTML = 'Game recap :';
    document.getElementById("intro").style.display = "block";
    document.getElementById("result").style.display = "block";

    console.log("You chose '" + val + "'.");

    var ComputerMove = Math.floor(Math.random() * 3)
    var comMove = ''

    if (ComputerMove == 0) {
        comMove = "rock";
        document.getElementById('comMove').innerHTML = '🪨';
    } else if (ComputerMove == 1) {
        comMove = "paper";
        document.getElementById('comMove').innerHTML = '🧻';
    } else if (ComputerMove == 2) {
        comMove = "scissors";
        document.getElementById('comMove').innerHTML = '✂️';
    }
    console.log("Computer move is " + "'" + comMove + "'.");


    if (val == comMove) {
        console.log("It's a tie on '" + val + "'!");
        document.getElementById('result').innerHTML = 'Its a tie!';
    }
    if ((val == 'rock') && (comMove == 'scissors')) {
        console.log(val + " beats " + comMove + ". You win!");
        document.getElementById('result').innerHTML = 'You win with 🪨!';
    }
    if ((val == 'rock') && (comMove == 'paper')) {
        console.log(val + " looses against " + comMove + ". You loose!");
        document.getElementById('result').innerHTML = 'You win with 🪨!';
    }
    if ((val == 'paper') && (comMove == 'rock')) {
        console.log(val + " beats " + comMove + ". You win!");
        document.getElementById('result').innerHTML = 'You win with 🧻!';
    }
    if ((val == 'paper') && (comMove == 'scissors')) {
        console.log(val + " looses against " + comMove + ". You loose!");
        document.getElementById('result').innerHTML = 'You win with 🧻!';
    }
    if ((val == 'scissors') && (comMove == 'rock')) {
        console.log(val + " beats " + comMove + ". You win!");
        document.getElementById('result').innerHTML = 'You win with ✂️!';
    }
    if ((val == 'scissors') && (comMove == 'paper')) {
        console.log(val + " looses against " + comMove + ". You loose!");
        document.getElementById('result').innerHTML = 'You win with ✂️!';
    }

};