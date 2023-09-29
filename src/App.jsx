import { useState, useEffect } from "react";
import Card from "./components/Card";
import CardGrid from "./components/CardGrid";

function App() {
	// Define initial array of cards
	const initialCards = [
		{ id: 1, name: "card1" },
		{ id: 2, name: "card2" },
	];

	const [cards, setCards] = useState(initialCards); // array of cards
	const [currentScore, setCurrentScore] = useState(0); // keeping track of score
	const [bestScore, setBestScore] = useState(0);

	// Function to shuffle cards
	const shuffleCards = () => {
		// card shuffling logic

		// Update the 'cards' state with the shuffled cards array
		setCards();
	};

	useEffect(() => {
		shuffleCards();
	}, []);

	// determine when cards are matched
	return (
		<div className="App">
			{/* Render game components */}
			<h1> Overwatch Memory Card Game</h1>
			<div>
				<p>Current Score: {currentScore}</p>
				<p>Best Score: {bestScore}</p>
			</div>
			<CardGrid cards={cards} />
		</div>
	);
}

export default App;

// Top level component. This is what holds the state for the game, including current score, and best score.
// It also manages the logic for shuffling and reseting the cards.
