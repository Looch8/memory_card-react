import { useState, useEffect } from "react";
import Header from "./Header";
import CardGrid from "./CardGrid";
import { fetchRandomCartoon, shuffleArray } from "./utils";

function CardImages() {
	const [cards, setCards] = useState([]);
	const [currentScore, setCurrentScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [isAllFlipped, setIsAllFlipped] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [clickedCards, setClickedCards] = useState([]); // Store clicked card IDs
	const [lossMessageVisible, setLossMessageVisible] = useState(false);

	useEffect(() => {
		// Fetch random cartoon images when the component mounts
		fetchRandomCartoon()
			.then((cartoonCards) => {
				const shuffledCards = shuffleArray(cartoonCards);
				setCards(shuffledCards);
				setIsLoading(false); // Set loading to false when data is loaded
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
				setIsLoading(false); // Set loading to false even on error
			});
	}, []); // Empty dependency array to ensure it runs only once

	const handleCardClick = (cardId) => {
		if (!isAllFlipped) {
			// Check if the card has been clicked before
			if (clickedCards.includes(cardId)) {
				// Display loss message
				setLossMessageVisible(true);
			} else {
				// Update the clicked cards
				const updatedClickedCards = [...clickedCards, cardId];
				setClickedCards(updatedClickedCards);

				// Flip the card back after a delay (2-3 seconds)
				setTimeout(() => {
					const updatedCards = cards.map((card) => ({
						...card,
						isFlipped: false,
					}));

					// Fetch new random cards and shuffle
					fetchRandomCartoon()
						.then((newCartoonCards) => {
							const shuffledNewCards =
								shuffleArray(newCartoonCards);
							setCards(shuffledNewCards);
						})
						.catch((error) => {
							console.error("Error fetching new data: ", error);
						});

					setCards(updatedCards);
					setIsAllFlipped(false);
				}, 1000); // Adjust the delay time as needed
			}
		}
	};

	const closeLossMessage = () => {
		// Reset game state and close the loss message
		setLossMessageVisible(false);
		setClickedCards([]);
		setCurrentScore(0);
		setIsAllFlipped(false);
	};

	// Render the cards and loss message
	return (
		<div className="App">
			<Header currentScore={currentScore} bestScore={bestScore} />
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<>
					{lossMessageVisible && (
						<div className="loss-message">
							<p>You lose!</p>
							<button onClick={closeLossMessage}>Close</button>
						</div>
					)}
					<CardGrid
						cards={cards}
						onCardClick={handleCardClick}
						isAllFlipped={isAllFlipped}
					/>
				</>
			)}
		</div>
	);
}

export default CardImages;
