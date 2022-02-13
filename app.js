// Elements:
const btns = document.querySelectorAll('.btn');
const gameResults = document.querySelector('.anouncement');
const userResults = document.querySelector('.user');
const computerResults = document.querySelector('.computer');

const rock = '✊';
const paper = '🖐';
const scissors = '✌';

// Functions:
const getComputerChoice = () => {
	const options = [rock, paper, scissors];
	const i = Math.floor(Math.random() * 3);
	return options[i]; // random answer
};
const determineWinner = (userChoice, computerChoice) => {
	let results;
	if (userChoice === computerChoice) {
		results = "It's a tie!";
	} else if (userChoice === rock) {
		computerChoice === scissors
			? (results = 'you win!')
			: (results = 'you lose!');
	} else if (userChoice === paper) {
		computerChoice === rock
			? (results = 'you win!')
			: (results = 'you lose!');
	} else if (userChoice === scissors) {
		computerChoice === paper
			? (results = 'you win!')
			: (results = 'you lose!');
	}
	switch (results) {
		case 'you win!':
			gameResults.style.color = 'rgb(0, 200, 50)';
			break;
		case 'you lose!':
			gameResults.style.color = 'rgb(200, 50, 0)';
			break;
		default:
			gameResults.style.color = 'rgb(200, 200, 0)';
			break;
	}
	return results;
};
const getResults = (userChoice, computerChoice) => {
	userResults.innerText = `
	 you played: 

	 ${userChoice}
	`;
	computerResults.innerText = `
	 computer played: 

	 ${computerChoice}
	`;
	gameResults.innerText = determineWinner(userChoice, computerChoice);
};
const handleClick = e => getResults(e.target.innerText, getComputerChoice());

// Event listeners:
btns.forEach(btn => btn.addEventListener('click', handleClick));