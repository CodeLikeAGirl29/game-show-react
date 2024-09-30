function Overlay({ startGame, gameWon, gameLost }) {
	let message;
	if (gameWon) {
		message = '🥳 You Win! 🎉';
	} else if (gameLost) {
		message = 'You Lose! Sorry, Better Luck Next Time 😔';
	} else {
		message = '';
	}

	return (
		<div id='overlay' className='start'>
			<h2 className='title'>Phrase Hunter</h2>
			<h1 id='game-over-message'>{message}</h1>
			<button id='btn__reset' onClick={startGame}>
				Start Game
			</button>
		</div>
	);
}

export default Overlay;
