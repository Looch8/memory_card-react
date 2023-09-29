import { useState } from "react";

function Card({ card }) {
	const [isFlipped, setIsFlipped] = useState(true);

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<div
			className={`card ${isFlipped ? "flipped" : ""}`}
			onClick={handleClick}
		>
			{/* Use a conditional to render the front or back of the card */}
			{isFlipped ? (
				<img src={card.imageUrl} alt={`Cartoon ${card.id}`} />
			) : (
				<img src="/path_to_card_back_image.jpg" alt={`Card Back`} />
			)}
		</div>
	);
}

export default Card;
