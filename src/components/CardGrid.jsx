// Responsible for rendering the grid of memory cards. It maps over an array of cards, rendering a Card component for each one. It may also handle the click events on the cards.
import Card from "./Card";

function CardGrid({ cards, onCardClick, isAllFlipped }) {
	// Check if 'cards' is an array before mapping over it
	if (!Array.isArray(cards)) {
		return <div className="card-grid">No cards to display</div>;
	}

	return (
		<div className="card-grid">
			{cards.map((card, index) => (
				<Card
					key={index}
					card={card}
					onCardClick={onCardClick} // Pass the onCardClick function to the Card component
					isAllFlipped={isAllFlipped}
				/>
			))}
		</div>
	);
}

export default CardGrid;
