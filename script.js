// Function to fetch anime data from the JSON file
async function fetchAnimeData() {
    const response = await fetch('animeData.json'); // Fetch the JSON file
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json(); // Parse JSON data
}

// Function to create anime cards
async function createAnimeCards() {
    const container = document.getElementById('anime-container');
    try {
        const animeData = await fetchAnimeData(); // Fetch anime data

        animeData.forEach(anime => {
            const card = document.createElement('div');
            card.className = 'anime-card';

            card.innerHTML = `
                <div class="anime-info">
                    <h3>${anime.title}</h3>
                    <img src="${anime.image}" alt="${anime.title} Thumbnail">
                    <p><strong>Genres:</strong> ${anime.genre}</p>
                    <p><strong>Description</strong>: ${anime.description}</p>
                </div>
            `;

            container.appendChild(card); // Append the card to the container
        });
    } catch (error) {
        console.error('Error fetching anime data:', error);
        container.innerHTML = '<p>Error loading anime data. Please try again later.</p>';
    }
}

// Call the function to create the anime cards on page load
createAnimeCards();