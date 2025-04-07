const mainnav = document.querySelector('#navigation');
const hambutton = document.querySelector('#menu');
const navList = document.querySelector('#nav-list')

document.addEventListener("DOMContentLoaded", () => {
    mainnav.classList.remove("show");
    hambutton.classList.remove("show");
});

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    navList.classList.remove('hide');
});

document.addEventListener('click', e => {
    if (!mainnav.contains(e.target) && e.target !== hambutton) {
        mainnav.classList.remove('show'),
            navList.classList.add('hide')
        hambutton.classList.remove('show');
    }
})


async function fetchPlaces() {
    try {
        const response = await fetch('scripts/places.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        console.log('Fetched Places:', data); 

        displayPlacesCards(data.places);

    } catch (error) {
        console.error('Error fetching places:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchPlaces);


function displayPlacesCards(places) {
    const container = document.querySelector('.discover-container');
    container.innerHTML = '';
    
    places.forEach(place => {
        const placeCard = document.createElement('div');
        placeCard.classList.add('place-card');
        
        placeCard.innerHTML = `
            <img src="images/${place.image_url}" alt="${place.name} logo" class="place-image">
            <h3 id="place-name">${place.name}</h3>
            <p id="place-address">${place.address}</p>
            <p id="place-description">${place.description || 'N/A'}</p>
            <p id="place-cost"><strong>Cost:</strong> ${place.cost || 'N/A'}</p>
            <button class="openButton"> Learn More </button>
        `;
        
        container.appendChild(placeCard);
    });
}