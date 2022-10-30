var readlineSync = require('readline-sync');
var userName = readlineSync.question("Hey! , What's your name ?\n");

var Score = 0;

console.log("Welcome " + userName + " Do you know AYUSH??? ");
// play function

function playQNA(question, answer) {
	var userAnswer = readlineSync.question(question);

	if (userAnswer.toUpperCase() === answer.toUpperCase()) {
		console.log("Yay!! You're Right");
		Score++;
	}
	else {
		console.log("Oops, You are Wrong :(");
	}
	console.log("The Score is = ", Score);
	console.log("---------------------- \n")

}

var questions = [{
	question: "\nWhat do I do for a living?\n",
	answer: "Job"
}, {
	question: "What is your favourite anime ?\n",
	answer: "Death Note"
}, {
	question: "What do I fear the most?\n",
	answer: "Spiders"
}, {
	question: "What was the place where I was born at\n",
	answer: "Tanakpur"
}, {
	question: "What is my dream destination?\n",
	answer: "Tokyo"
}]

var leaderboard = [{ //for listing the player with scores
	name: "Ayush",
	score: 5
}, {
	name: "Rakshit",
	score: 3
}, {
	name: "Darshan",
	score: 2
}
]

// LOOP

for (var i = 0; i < questions.length; i++) {

	var currentQues = questions[i];
	playQNA(currentQues.question, currentQues.answer)
}

console.log("Alright !" + userName + " ,you are done and your final score is : " + Score)

function Leaderboard() {
	console.log("High Score is : ")
	for (var i = 0; i < leaderboard.length; i++) {
		console.log(leaderboard[i].name, leaderboard[i].score)
	}
}

Leaderboard(); //function call for leaderboard.