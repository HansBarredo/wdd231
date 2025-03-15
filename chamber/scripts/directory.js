async function fetchBusinesses() {
    try {
        const response = await fetch('scripts/businesses.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const businesses = await response.json();
        
        console.log('Fetched Businesses:', businesses); // Print the JSON data to the console

        displayBusinessesCard(businesses);
        displayBusinessesTable(businesses);
    } catch (error) {
        console.error('Error fetching businesses:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchBusinesses);


function displayBusinessesCard(businesses) {
    const container = document.getElementById('business-list-card');
    container.innerHTML = '';
    
    businesses.forEach(business => {
        const businessCard = document.createElement('div');
        businessCard.classList.add('business-card');
        
        businessCard.innerHTML = `
            <img src="images/${business.image_file_name}" alt="${business.name}" class="business-image">
            <h3>${business.name}</h3>
            <p><strong>Address:</strong> ${business.address}</p>
            <p><strong>Phone:</strong> ${business.phone_number || 'N/A'}</p>
            <p><a href="${business.website_url}" target="_blank">Visit Website</a></p>
            <p><strong>Membership Level:</strong> ${business.membership_level}</p>
        `;
        
        container.appendChild(businessCard);
    });
}

function displayBusinessesTable(businesses) {
    const container = document.getElementById('business-list-table');
    container.innerHTML = '';
    
    businesses.forEach(business => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${business.name}</td>
            <td>${business.address}</td>
            <td>${business.phone_number || 'N/A'}</td>
            <td><a href="${business.website_url}" target="_blank">Visit Website</a></td>
            <td>${business.membership_level}</td>
        `;
        
        container.appendChild(row);
    });
}




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

document.addEventListener('click', e =>{
    if (!mainnav.contains(e.target) && e.target !==hambutton){
        mainnav.classList.remove('show'),
        navList.classList.add('hide')
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");
    const cardButton = document.getElementById("card-button");
    const listButton = document.getElementById("list-button");

    let previousButton = cardButton; 

    cardButton.classList.add("selected");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (previousButton && previousButton !== button) {
                previousButton.classList.remove("selected");
            }

            button.classList.add("selected");
            previousButton = button;
        });
    });
});

const cardButton = document.getElementById("card-button");
const listButton = document.getElementById("list-button");
const businessCards = document.getElementById("business-list-card")
const businessList = document.getElementById("business-list-table")

cardButton.addEventListener('click', () =>{
    businessCards.classList.add('show');
    businessList.classList.remove('show');
})

listButton.addEventListener('click', () =>{
    businessCards.classList.remove('show');
    businessList.classList.add('show');
})

document.addEventListener("DOMContentLoaded", () => {
    businessCards.classList.add("show");
  });

  
const modified = document.querySelector("#modified");

let oLastModif = new Date(document.lastModified);

modified.innerHTML = `Last Modification: <span class="last-mod">${oLastModif.toLocaleString()}</span>`;

document.getElementById('copyright-year').textContent = new Date().getFullYear();