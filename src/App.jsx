import { useState } from 'react';
import Overlay from './components/Overlay';
import Keyboard from './components/Keyboard';
import PhraseDisplay from './components/PhraseDisplay';
import Scoreboard from './components/Scoreboard';

import './App.css';

function App() {
	const [gameStarted, setGameStarted] = useState(false);
	const [missed, setMissed] = useState(0);
	const [activePhrase, setActivePhrase] = useState(null);
	const [lettersGuessed, setLettersGuessed] = useState([]);
	const [won, setWon] = useState(false);

	const phrases = [
		'Pocahontas',
		'Lilo and Stitch',
		'Cinderella',
		'Dumbo',
		'Buzz Lightyear',
		'Aladdin',
		'Anastasia',
		'Flounder',
	];

	const startGame = () => {
		const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
		setGameStarted(true);
		setActivePhrase(randomPhrase);
		setMissed(0);
		setLettersGuessed([]);
		setWon(false);
	};

	const handleKeyPress = (letter) => {
		if (lettersGuessed.includes(letter) || !gameStarted) return;

		const updatedLettersGuessed = [...lettersGuessed, letter];
		setLettersGuessed(updatedLettersGuessed);

		if (!activePhrase.toLowerCase().includes(letter)) {
			setMissed((prevMissed) => prevMissed + 1);
		} else {
			// Check if the player has won the game
			const allLettersGuessed = activePhrase
				.toLowerCase()
				.split('')
				.every(
					(char) =>
						char === ' ' || updatedLettersGuessed.includes(char.toLowerCase())
				);
			if (allLettersGuessed) {
				setWon(true);
				setGameStarted(false);
			}
		}

		// If all lives are lost, end game
		if (missed >= 4) {
			setGameStarted(false);
			setWon(false);
		}
	};

	return (
		<div className='main-container scrollbar' id='scrollbar1'>
			{!gameStarted && (
				<Overlay startGame={startGame} gameWon={won} gameLost={missed >= 5} />
			)}
			<header>
				<h2 className='header'>Hangman</h2>
			</header>
			<PhraseDisplay
				activePhrase={activePhrase}
				lettersGuessed={lettersGuessed}
			/>
			<Keyboard
				handleKeyPress={handleKeyPress}
				lettersGuessed={lettersGuessed}
			/>
			<Scoreboard missed={missed} />
		</div>
	);
}

export default App;
