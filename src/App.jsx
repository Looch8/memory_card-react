import { useState } from "react";
import Card from "./components/Card";
import CardGrid from "./components/CardGrid";
import CardImages from "./components/CardImages";

function App() {
	//function to handle card click
	const handleCardClick = () => {
		//update the isAllFlipped
		const updatedCards = cards.map((card) => ({
			...card,
			isFlipped: !isAllFlipped,
		}));

		setCards(updatedCards);
		setIsAllFlipped(!isAllFlipped);
		//update the score
		//update the best score
		//update the cards
	};
	return (
		<div className="App">
			<CardImages />
		</div>
	);
}

export default App;
