// Displays current score and best score, it receives these scores as props from the App component, and updates them when necessary (when a card is clicked).

function Scoreboard({ currentScore, highScore, resetGame }) {
	return (
		<div className="scoreboard">
			<div>
				<strong>Current Score:</strong> {currentScore}
			</div>
			<div>
				<strong>High Score:</strong> {highScore}
			</div>
			<button onClick={resetGame}>Reset</button>
		</div>
	);
}

export default Scoreboard;
