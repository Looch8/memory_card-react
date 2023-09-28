import Card from "./components/Card";
import CardGrid from "./components/CardGrid";

function App() {
	return (
		<>
			<CardGrid /> <Card />
		</>
	);
}

export default App;

// Top level component. This is what holds the state for the game, including current score, and best score.
// It also manages the logic for shuffling and reseting the cards.
