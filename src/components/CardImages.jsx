import { useState, useEffect } from "react";
import Header from "./Header";
import CardGrid from "./CardGrid";
import { fetchRandomCartoon, shuffleArray } from "./utils";

function CardImages() {
	const [cards, setCards] = useState([]);
	const [currentScore, setCurrentScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [isAllFlipped, setIsAllFlipped] = useState(false);

	useEffect(() => {
		// Fetch random cartoon images when the component mounts
		fetchRandomCartoon().then((cartoonCards) => {
			const shuffledCards = shuffleArray(cartoonCards);
			setCards(shuffledCards);
		});
	}, []);

	const handleCardClick = () => {
		const updatedCards = cards.map((card) => ({
			...card,
			isFlipped: !isAllFlipped,
		}));
		setCards(updatedCards);
		setIsAllFlipped(!isAllFlipped);
	};

	return (
		<div className="App">
			<Header currentScore={currentScore} bestScore={bestScore} />
			<CardGrid
				cards={cards}
				onCardClick={handleCardClick}
				isAllFlipped={isAllFlipped}
			/>
		</div>
	);
}

export default CardImages;
