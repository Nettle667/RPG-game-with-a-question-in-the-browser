// Variables for registring character
const divRegister = document.getElementById('register');
const submitCharacter = document.getElementById('submit-register-character');
const inputNameCharacter = document.getElementById('input-name-character');
const inputGenderCharacter = document.getElementsByName(
	'input-gender-character'
);
const inputClassCharacter = document.getElementsByName('input-class-character');

// Variables for character
const imgCharacter = document.getElementsByClassName('img-for-all-character');
const nameCharacter = document.getElementsByClassName('name-for-all-character');
let genderCharacter = null;
const healthCharacter = document.getElementsByClassName(
	'health-for-all-character'
);
let currentHealthCharacter = 100;

// Registring character
const registerCharacter = () => {
	// Give the name and health of the characters
	for (let i = 0; i < nameCharacter.length; i++) {
		nameCharacter[i].innerText = inputNameCharacter.value;
		healthCharacter[i].innerText = 100;
	}

	// Gender the characters
	for (let i = 0; i < inputGenderCharacter.length; i++) {
		if (inputGenderCharacter[i].checked) {
			genderCharacter = inputGenderCharacter[i].value;
		}
	}

	// Give a class to characters
	for (let i = 0; i < inputClassCharacter.length; i++) {
		if (inputClassCharacter[i].checked) {
			for (let j = 0; j < imgCharacter.length; j++) {
				if (inputClassCharacter[i].value === 'warrior') {
					imgCharacter[j].src = 'img/dark_genji.png';
				} else if (inputClassCharacter[i].value === 'magician') {
					imgCharacter[j].src = 'img/mercy.png';
				} else {
					imgCharacter[j].src = 'img/hanzo.png';
				}
			}
		}
	}

	divRegister.classList.remove('register');
	divRegister.classList.add('hide-object');
	divFightWithEnemy.classList.remove('hide-object');
	divFightWithEnemy.classList.add('fight-with-enemy');
	alert(
		'Добро пожаловать, вы зарегистрировались в игре. Игра представляет собой мини RPG игру/текстовая игра. Вам будет необходимо победить несколько врагов, а также ответить на вопросы. Желаю вам успеха!'
	);
};

// Ckecking button event for registring character
submitCharacter.addEventListener('click', registerCharacter);

// Variables for figth with enemy and for enemy
const divFightWithEnemy = document.getElementById('figth-with-enemy');
const btnAttackEnemy = document.getElementById('btn-attack-enemy');
const btnsTreatmentCharacter = document.getElementsByClassName(
	'btn-treatment-character'
);
const healthEnemy = document.getElementById('health-enemy');
let currentHealthEnemy = 200;
healthEnemy.innerText = currentHealthEnemy;

// Function for generate random value
const randomValue = (minValue, maxValue) => {
	return Math.floor(Math.random() * (maxValue - minValue) + minValue);
};

// Function for attack enemy
const attackEnemy = () => {
	currentHealthEnemy -= randomValue(5, 11);
	currentHealthCharacter -= randomValue(10, 16);
	healthEnemy.innerText = currentHealthEnemy;
	healthCharacter[0].innerText = currentHealthCharacter;

	if (
		(currentHealthCharacter <= 0) &
		(currentHealthCharacter < currentHealthEnemy)
	) {
		alert(
			'К сожалению, вы не смогли убить врага, но ничего страшного, у вас есть шанс победить слабого врага. Вперед...'
		);
		divFightWithEnemy.classList.remove('fight-with-enemy');
		divFightWithEnemy.classList.add('hide-object');
		divLostToTheEnemy.classList.remove('hide-object');
		divLostToTheEnemy.classList.add('lost-to-the-enemy');
		currentHealthCharacter = 100;
	} else if (
		(currentHealthEnemy <= 0) &
		(currentHealthCharacter > currentHealthEnemy)
	) {
		alert(
			'Ура, вы победили врага. Теперь вы можете попытаться решить задачу и получить бонус :)'
		);
		divFightWithEnemy.classList.remove('fight-with-enemy');
		divFightWithEnemy.classList.add('hide-object');
		divHealthBoosterPuzzle.classList.remove('hide-object');
		divHealthBoosterPuzzle.classList.add('health-booster-puzzle');
		currentHealthCharacter = 100;
	}
};

// Function for treatment character
const treatmentCharacter = i => {
	currentHealthCharacter += 5;
	healthCharacter[i].innerText = currentHealthCharacter;
};

// Checking button events for attack enemy and treatment character
btnAttackEnemy.addEventListener('click', attackEnemy);
btnsTreatmentCharacter[0].addEventListener('click', () =>
	treatmentCharacter(0)
);

// Variables lost to the enemy
const divLostToTheEnemy = document.getElementById('lost-to-the-enemy');
const btnAttackWeakEnemy = document.getElementById('btn-attack-weak-enemy');

// Variables for fight with weak enemy and weak enemy
const healthWeakEnemy = document.getElementById('health-weak-enemy');
let currentHealthWeakEnemy = 150;
healthWeakEnemy.innerText = currentHealthWeakEnemy;

// Function for attack weak enemy
const attackWeakEnemy = () => {
	currentHealthWeakEnemy -= randomValue(10, 16);
	currentHealthCharacter -= randomValue(5, 11);
	healthWeakEnemy.innerText = currentHealthWeakEnemy;
	healthCharacter[1].innerText = currentHealthCharacter;

	if (
		(currentHealthCharacter <= 0) &
		(currentHealthCharacter < currentHealthWeakEnemy)
	) {
		alert('Не сдавайтесь, я уверен, вы победите! YOU SHOULD WIN!!!');
	} else if (
		(currentHealthWeakEnemy <= 0) &
		(currentHealthCharacter > currentHealthWeakEnemy)
	) {
		alert(
			'Хорошо, вы убили слабого врага! Теперь вы можете перейти к следующему уровню.'
		);
		divLostToTheEnemy.classList.remove('lost-to-the-enemy');
		divLostToTheEnemy.classList.add('hide-object');
		divDefeatedTheAneEnemy.classList.remove('hide-object');
		divDefeatedTheAneEnemy.classList.add('defeated-the-any-enemy');
		currentHealthCharacter = 100;
	}
};

// Checking button events for attack enemy and treatment character
btnAttackWeakEnemy.addEventListener('click', attackWeakEnemy);
btnsTreatmentCharacter[1].addEventListener('click', () =>
	treatmentCharacter(1)
);

// Variables health booster puzzle
const divHealthBoosterPuzzle = document.getElementById('health-booster-puzzle');
const imgAlexandrTheFirst = document.getElementById('alexandr-fhe-first');
const imgNapoleonTheFirst = document.getElementById('napoleon-fhe-first');
const answerPuzzle = document.getElementById('answer-puzzle');

// Function for correct choice in health booster puzzle
const correctChoice = () => {
	divHealthBoosterPuzzle.classList.remove('health-booster-puzzle');
	divHealthBoosterPuzzle.classList.add('hide-object');
	divDefeatedTheAneEnemy.classList.remove('hide-object');
	divDefeatedTheAneEnemy.classList.add('defeated-the-any-enemy');
	alert('Правильный ответ! Ура, вы получили бонус +100hp!');
	currentHealthCharacter += 100;
	healthCharacter[2].innerText = currentHealthCharacter;
};

// Function for incorrect choice in health booster puzzle
const incorrectChoice = () => {
	divHealthBoosterPuzzle.classList.remove('health-booster-puzzle');
	divHealthBoosterPuzzle.classList.add('hide-object');
	divDefeatedTheAneEnemy.classList.remove('hide-object');
	divDefeatedTheAneEnemy.classList.add('defeated-the-any-enemy');
	alert('Не правильный ответ! К сожалению, вы не получаете бонус :(');
};

// Checking button events for health booster puzzle
imgAlexandrTheFirst.addEventListener('click', correctChoice);
imgNapoleonTheFirst.addEventListener('click', incorrectChoice);

// Variables defeated the any enemy / mysterious way
const divDefeatedTheAneEnemy = document.getElementById(
	'defeated-the-any-enemy'
);
const btnStartMysteriousWay = document.getElementById(
	'btn-start-mysterious-way'
);
const mysteriousEventOne = document.getElementById('mysterious-event-one');
const mysteriousEventTwo = document.getElementById('mysterious-event-two');
const mysteriousEventThree = document.getElementById('mysterious-event-three');
const btnsAnswerMysteriousQuestionOne = document.getElementsByClassName(
	'btn-answer-mysterious-question-one'
);
const btnsAnswerMysteriousQuestionTwo = document.getElementsByClassName(
	'btn-answer-mysterious-question-two'
);
const btnsAnswerMysteriousQuestionThree = document.getElementsByClassName(
	'btn-answer-mysterious-question-three'
);

// Function start mysterious way
const startMysteriousWay = () => {
	btnStartMysteriousWay.classList.add('hide-object');
	alert(
		'Добро пожаловать, странник! Ты в таверне "Времени", будь добр, ответь на несколько вопросов...'
	);
	mysteriousEventOne.classList.remove('hide-object');
	mysteriousEventOne.classList.add('mysterious-event-one');
};

// Function for chcking mysterious question one
const answerMysteriousQuestionOne = i => {
	if (
		btnsAnswerMysteriousQuestionOne[i].value === 'Я не знаю, кто я такой...'
	) {
		alert(
			`Ухты, ответ: "${btnsAnswerMysteriousQuestionOne[i].value}", верный! Ведь ты не из этой вселенной. Тебя ждёт сложная дорога! Так что, если ты ответишь на следующий вопрос верно, то я дам тебе бонус! Давай, вперёд...`
		);
		mysteriousEventOne.classList.remove('mysterious-event-one');
		mysteriousEventOne.classList.add('hide-object');
		mysteriousEventTwo.classList.remove('hide-object');
		mysteriousEventTwo.classList.add('mysterious-event-two');
	} else {
		alert(
			`К сожалению, ты не: "${btnsAnswerMysteriousQuestionOne[i].value}"!`
		);
	}
};

// Function for chcking mysterious question two
const answerMysteriousQuestionTwo = i => {
	if (btnsAnswerMysteriousQuestionTwo[i].value === 'Убить тебя') {
		alert(
			'Ох-ха-ха-ха ^) А ты очень интересный! Смог же, увидеть во мне ЗЛО. Так давай же попробуй убить меня...'
		);
		divDefeatedTheAneEnemy.classList.remove('defeated-the-any-enemy');
		divDefeatedTheAneEnemy.classList.add('hide-object');
		divFightWithIceBoss.classList.remove('hide-object');
		divFightWithIceBoss.classList.add('figth-with-ice-boss');
	} else {
		alert(
			`Отличная цель: "${btnsAnswerMysteriousQuestionTwo[i].value}". Я уверен, у тебя всё получиться ^) Ты интересно ответил на мой вопрос, так что держи зелье для увеличения урона. Оно понадобиться тебе в будущем, хех) Выпей же его!`
		);
		mysteriousEventTwo.classList.remove('mysterious-event-two');
		mysteriousEventTwo.classList.add('hide-object');
		mysteriousEventThree.classList.remove('hide-object');
		mysteriousEventThree.classList.add('mysterious-event-three');
	}
};

// Function for chcking mysterious question three
const answerMysteriousQuestionThree = i => {
	if (btnsAnswerMysteriousQuestionThree[i].value === 'Выпить...') {
		alert(
			`Ах-ха-ха-ха, ты такой глупец! Довольно сильное существо из другой вселенной, но всё равно не смогло увидеть во мне ЗЛО! Здесь ты и умрёшь...`
		);
		currentHealthCharacter -= 50;
		healthCharacter[2].innerText = currentHealthCharacter;
	} else {
		alert(
			`Ахты, подлец! В последний момент успел сохранить здоровье. Ну ничего, всё равно ты здесь и умрёшь...`
		);
	}
	divDefeatedTheAneEnemy.classList.remove('defeated-the-any-enemy');
	divDefeatedTheAneEnemy.classList.add('hide-object');
	divFightWithIceBoss.classList.remove('hide-object');
	divFightWithIceBoss.classList.add('figth-with-ice-boss');
};

// Checking button events for mysterious questions
btnStartMysteriousWay.addEventListener('click', startMysteriousWay);
btnsAnswerMysteriousQuestionOne[0].addEventListener('click', () => {
	answerMysteriousQuestionOne(0);
});
btnsAnswerMysteriousQuestionOne[1].addEventListener('click', () => {
	answerMysteriousQuestionOne(1);
});
btnsAnswerMysteriousQuestionOne[2].addEventListener('click', () => {
	answerMysteriousQuestionOne(2);
});
btnsAnswerMysteriousQuestionOne[3].addEventListener('click', () => {
	answerMysteriousQuestionOne(3);
});
btnsAnswerMysteriousQuestionTwo[0].addEventListener('click', () => {
	answerMysteriousQuestionTwo(0);
});
btnsAnswerMysteriousQuestionTwo[1].addEventListener('click', () => {
	answerMysteriousQuestionTwo(1);
});
btnsAnswerMysteriousQuestionTwo[2].addEventListener('click', () => {
	answerMysteriousQuestionTwo(2);
});
btnsAnswerMysteriousQuestionTwo[3].addEventListener('click', () => {
	answerMysteriousQuestionTwo(3);
});
btnsAnswerMysteriousQuestionThree[0].addEventListener('click', () => {
	answerMysteriousQuestionThree(0);
});
btnsAnswerMysteriousQuestionThree[1].addEventListener('click', () => {
	answerMysteriousQuestionThree(1);
});

// Figth with ice boss
const divFightWithIceBoss = document.getElementById('figth-with-ice-boss');
const btnAttackIceBoss = document.getElementById('btn-attack-ice-boss');
const healthIceBoss = document.getElementById('health-ice-boss');
let currentHealthIceBoss = 300;
healthIceBoss.innerText = currentHealthIceBoss;

// Function for attack ice boss
const attackIceBoss = () => {
	currentHealthCharacter -= randomValue(15, 21);
	currentHealthIceBoss -= randomValue(10, 16);
	healthCharacter[2].innerText = currentHealthCharacter;
	healthIceBoss.innerText = currentHealthIceBoss;

	if (
		(currentHealthCharacter <= 0) &
		(currentHealthCharacter < currentHealthIceBoss)
	) {
		alert(
			'Ха-ха-ха-ха-ха, ты не смог победить меня. Я думал ты достойный соперник, но оказалось наоборот. Слабое существо из другой вселенной, умри же!'
		);
		divFightWithIceBoss.classList.remove('figth-with-ice-boss');
		divFightWithIceBoss.classList.add('hide-object');
		divLostToTheIceBoss.classList.remove('hide-object');
		divLostToTheIceBoss.classList.add('lost-to-the-ice-boss');
	} else if (
		(currentHealthIceBoss <= 0) &
		(currentHealthCharacter > currentHealthIceBoss)
	) {
		alert(
			'Ах-ах, ты достойный соперник. Сильный и не слепой, как никто другой до тебя. Ладно, моё время подошло к концу, так что прошай...'
		);
		divFightWithIceBoss.classList.remove('figth-with-ice-boss');
		divFightWithIceBoss.classList.add('hide-object');
		divPrizeGame.classList.remove('hide-object');
		divPrizeGame.classList.add('prize-game');
	}
};

// Checking button events for attack ice boss
btnAttackIceBoss.addEventListener('click', attackIceBoss);
btnsTreatmentCharacter[2].addEventListener('click', () =>
	treatmentCharacter(2)
);

// Prize Game
const divPrizeGame = document.getElementById('prize-game');

// Lost to the ice boss
const divLostToTheIceBoss = document.getElementById('lost-to-the-ice-boss');
