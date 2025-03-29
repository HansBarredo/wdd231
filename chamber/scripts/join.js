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
        hambutton.classList.toggle('show');
    }
})

document.addEventListener("DOMContentLoaded", () => {
    fetchMemberships();
});







async function fetchMemberships() {
    try {
        const response = await fetch('scripts/membership.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const memberships = await response.json();

        displayMembershipCards(memberships);
    } catch (error) {
        console.error('Error fetching memberships:', error);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    fetchMemberships();
});

function displayMembershipCards(memberships) {
    const container = document.getElementById('cards-container');
    if (!container) {
        console.error("Error: 'cards-container' element not found.");
        return;
    }

    container.innerHTML = '';

    memberships.forEach(membership => {
        const card = document.createElement('div');
        card.classList.add('membership-card'); 
        card.innerHTML = `
            <h3>${membership.level}</h3>
            <button class="openButton"> More Information</button>
            <dialog class="dialogBox">
                <h3>${membership.level}</h3>
                <p>${membership.description}</p>
                <button class="closeButton">Close</button>
            </dialog>
        `;
        container.appendChild(card);
    });

    document.querySelectorAll(".openButton").forEach(button => {
        button.addEventListener("click", (event) => {
            const dialog = event.target.nextElementSibling;
            if (dialog) dialog.showModal();
        });
    });

    document.querySelectorAll(".closeButton").forEach(button => {
        button.addEventListener("click", (event) => {
            const dialog = event.target.closest("dialog"); 
            if (dialog) dialog.close();
        });
    });
}

