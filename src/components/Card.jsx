import { useState } from "react";

function Card({ card }) {
	const [isFlipped, setIsFlipped] = useState(false); // Checks if the card is flipped or not.

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	}; // handle click event to toggle state of isFlipped.

	return (
		<div
			className={`card ${isFlipped ? "flipped" : ""}`}
			onClick={handleClick}
		>
			{isFlipped ? (
				<img src={card.imageUrl} alt="Card" />
			) : (
				<div className="card-back">Back of card.</div>
			)}
		</div>
	);
}

export default Card;
