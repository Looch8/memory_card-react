import { useState, useEffect } from "react";
import CardGrid from "./CardGrid";
import { fetchRandomCartoon, shuffleArray } from "./utils";
import Scoreboard from "./Scoreboard";

function CardImages() {
	const [cards, setCards] = useState([]);
	const [isAllFlipped, setIsAllFlipped] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [clickedCards, setClickedCards] = useState([]);
	const [lossMessageVisible, setLossMessageVisible] = useState(false);
	const [isGameOver, setIsGameOver] = useState(false); // New state for game over

	const [currentScore, setCurrentScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

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
		if (!isAllFlipped && !isGameOver) {
			if (clickedCards.includes(cardId)) {
				setLossMessageVisible(true);
				setIsGameOver(true); // Set game over state
				if (currentScore >= highScore) {
					setHighScore(currentScore);
				}
			} else {
				const updatedClickedCards = [...clickedCards, cardId];
				setClickedCards(updatedClickedCards);
				setCurrentScore(currentScore + 1);

				setTimeout(() => {
					const updatedCards = cards.map((card) => ({
						...card,
						isFlipped: false,
					}));

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
				}, 1000);
			}
		}
	};

	const resetGame = () => {
		setCurrentScore(0);
		setClickedCards([]);
		setIsAllFlipped(false);
		setLossMessageVisible(false);
		setIsGameOver(false); // Reset game over state
	};

	return (
		<div className="App">
			<Scoreboard
				currentScore={currentScore}
				highScore={highScore}
				resetGame={resetGame}
			/>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<>
					{lossMessageVisible && (
						<div className="loss-message">
							<p>Game over!</p>
							<button onClick={resetGame}>Restart</button>
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
