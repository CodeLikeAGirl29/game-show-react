function Keyboard({ handleKeyPress, lettersGuessed }) {
	const keys = [
		['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
		['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
		['z', 'x', 'c', 'v', 'b', 'n', 'm'],
	];

	return (
		<div id='qwerty' className='section'>
			{keys.map((row, index) => (
				<div className='keyrow' key={index}>
					{row.map((key) => (
						<button
							key={key}
							className={`key ${
								lettersGuessed.includes(key) ? 'disabled' : ''
							}`}
							onClick={() => handleKeyPress(key)}
							disabled={lettersGuessed.includes(key)}
						>
							{key}
						</button>
					))}
				</div>
			))}
		</div>
	);
}

export default Keyboard;
