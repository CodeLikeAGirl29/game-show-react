import heartIcon from '../assets/liveHeart.png';
import lostHeartIcon from '../assets/lostHeart.png';

function Scoreboard({ missed }) {
	return (
		<div id='scoreboard' className='section'>
			<ol>
				{[...Array(5)].map((_, index) => (
					<li className='tries' key={index}>
						<img
							src={index < missed ? lostHeartIcon : heartIcon}
							alt='Heart Icon'
							height='35'
							width='30'
						/>
					</li>
				))}
			</ol>
		</div>
	);
}

export default Scoreboard;
