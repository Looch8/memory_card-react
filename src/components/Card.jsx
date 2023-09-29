import { useState, useEffect } from "react";

function Card({ card, onCardClick, isAllFlipped }) {
	const [isFlipped, setIsFlipped] = useState(true); // Initially, all cards face up

	useEffect(() => {
		setIsFlipped(isAllFlipped);
	}, [isAllFlipped]);

	const handleClick = () => {
		if (!isAllFlipped) {
			setIsFlipped(!isFlipped);
			onCardClick(card.id);
		}
	};

	console.log(`Card ${card.id} - isFlipped: ${isFlipped}`);

	return (
		<div
			className={`card ${isFlipped ? "" : "flipped"}`} // Reversed class names
			onClick={handleClick}
		>
			{isFlipped ? (
				<img src="/path_to_card_back_image.jpg" alt={`Card Back`} />
			) : (
				<img src={card.imageUrl} alt={`Cartoon ${card.id}`} />
			)}
		</div>
	);
}

export default Card;
