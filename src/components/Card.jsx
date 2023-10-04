function Card({ card, onCardClick, isAllFlipped }) {
	const handleClick = () => {
		if (!isAllFlipped) {
			onCardClick(card.id);
		}
	};

	console.log(`Card ${card.id} - isFlipped: ${isAllFlipped}`);

	return (
		<div
			className={`card ${isAllFlipped ? "flipped" : ""}`}
			onClick={handleClick}
		>
			{isAllFlipped ? (
				<img src="/path_to_back_of_card_image" alt={"card back"} />
			) : (
				<img src={card.imageUrl} alt={card.id} />
			)}
		</div>
	);
}

export default Card;
