// Responsible for rendering the grid of memory cards. It maps over an array of cards, rendering a Card component for each one. It may also handle the click events on the cards.
import Card from "./Card";

import PropTypes from "prop-types";

function CardGrid({ cards }) {
	// prop is an array of cards to map over.

	return (
		<div className="card-grid">
			{cards.map((card, index) => (
				<Card key={index} card={card} />
			))}
		</div>
	);
}

CardGrid.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardGrid;
