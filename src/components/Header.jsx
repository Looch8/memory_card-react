// Displays the game title and other relevent information.
import React from "react";

function Header({ currentScore, bestScore }) {
	return (
		<div>
			<h1>Cartoon Memory Card Game</h1>
			<div>
				<p>Current Score: {currentScore}</p>
				<p>Best Score: {bestScore}</p>
			</div>
		</div>
	);
}

export default Header;
