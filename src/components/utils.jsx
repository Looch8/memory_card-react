// Utils functions
export async function fetchRandomCartoon() {
	try {
		const response = await fetch(
			"https://api.sampleapis.com/cartoons/cartoons2D"
		);
		if (!response.ok) {
			throw new Error("Failed to fetch data");
		}
		const data = await response.json();

		const cartoonCards = [];

		while (cartoonCards.length < 4 && data.length > 0) {
			const randomIndex = Math.floor(Math.random() * data.length);
			const cartoon = data[randomIndex];

			try {
				// Check if the image is not forbidden (403 status)
				const imageResponse = await fetch(cartoon.image);
				if (imageResponse.ok) {
					cartoonCards.push({
						id: cartoon.id,
						imageUrl: cartoon.image,
						isFlipped: false, // Initially, all cards are not flipped
					});
				} else {
					console.log(`Forbidden image: ${cartoon.image}`);
				}
			} catch (error) {
				console.error(`Error checking image: ${cartoon.image}`);
			}

			// Remove the cartoon from the data array
			data.splice(randomIndex, 1);
		}

		return cartoonCards;
	} catch (error) {
		console.log("Error fetching data: ", error);
		return [];
	}
}

export function shuffleArray(array) {
	const shuffledArray = [...array];
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledArray[i], shuffledArray[j]] = [
			shuffledArray[j],
			shuffledArray[i],
		];
	}
	return shuffledArray;
}
