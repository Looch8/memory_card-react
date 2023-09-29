import { useState, useEffect } from "react";
import Card from "./components/Card";
import CardGrid from "./components/CardGrid";

function App() {
	// Define initialCards with some initial data or remove it if fetching dynamically
	const initialCards = [];

	const [cards, setCards] = useState(initialCards); // Array of cards
	const [currentScore, setCurrentScore] = useState(0); // Keeping track of the score
	const [bestScore, setBestScore] = useState(0);

	// Function to fetch random cartoon images
	const fetchRandomCartoon = async () => {
		try {
			const response = await fetch(
				"https://api.sampleapis.com/cartoons/cartoons2D"
			);
			if (!response.ok) {
				throw new Error("Failed to fetch data");
			}
			const data = await response.json();

			const cartoonCards = [];
			let fetchedCount = 0;

			while (fetchedCount < 4 && data.length > 0) {
				const randomIndex = Math.floor(Math.random() * data.length);
				const cartoon = data.splice(randomIndex, 1)[0];

				if (cartoon) {
					// Check if the image is not forbidden (403 status)
					const imageResponse = await fetch(cartoon.imageUrl);
					if (imageResponse.ok) {
						cartoonCards.push({
							id: cartoon.id,
							imageUrl: cartoon.image,
						});
						fetchedCount++;
					}
				}
			}

			// Shuffle the cartoon cards
			const shuffledCards = shuffleArray(cartoonCards);

			// Set the cards state with the shuffled cartoon cards
			setCards(shuffledCards);
		} catch (error) {
			console.log("Error fetching data: ", error);
		}
	};

	// Function to shuffle an array
	const shuffleArray = (array) => {
		const shuffledArray = [...array];
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			];
		}
		return shuffledArray;
	};

	useEffect(() => {
		// Fetch random cartoon images when the component mounts
		fetchRandomCartoon();
	}, []);

	// Determine when cards are matched

	return (
		<div className="App">
			{/* Render game components */}
			<h1>Cartoon Memory Card Game</h1>
			<div>
				<p>Current Score: {currentScore}</p>
				<p>Best Score: {bestScore}</p>
			</div>
			<CardGrid cards={cards} />
		</div>
	);
}

export default App;
