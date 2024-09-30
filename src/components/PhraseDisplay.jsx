function PhraseDisplay({ activePhrase, lettersGuessed }) {
	if (!activePhrase) return null;

	const phraseLetters = activePhrase.split('');

	return (
		<div id='phrase' className='section'>
			<ul>
				{phraseLetters.map((letter, index) => (
					<li key={index} className={letter === ' ' ? 'space' : 'letter'}>
						{lettersGuessed.includes(letter.toLowerCase()) || letter === ' '
							? letter
							: '_'}
					</li>
				))}
			</ul>
		</div>
	);
}

export default PhraseDisplay;
