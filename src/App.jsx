import { useState } from "react";
import Card from "./components/Card";
import CardGrid from "./components/CardGrid";
import CardImages from "./components/CardImages";

function App() {
	return (
		<div className="App">
			<h1>Memory Card Game</h1>
			<CardImages />
		</div>
	);
}

export default App;
