import { initNavigation } from './nav.js';

initNavigation();

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
        card.classList.add('campaign-card'); 
        card.innerHTML = `
            <h3>${membership.campaign}</h3>
            <button class="openButton"> More Information</button>
            <dialog class="dialogBox">
                <h3>${membership.campaign}</h3>
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

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("timestamp").value = new Date().toLocaleString();
});

const form = document.getElementById("form");
const fname_input = document.getElementById("fname");
const lname_input = document.getElementById("lname");
const orgTitle_input = document.getElementById("employment");
const email_input = document.getElementById("email");
const contact_input = document.getElementById("tel");
const campaign_input = document.getElementById("campaign-level");

const EmpRegEx = /^[A-Za-z\- ]{7,}$/;
const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,9}[-.\s]?\d{1,9}[-.\s]?\d{1,9}$/;

function validateField(input, condition) {
    if (condition) {
        input.classList.add('valid');
        input.classList.remove('incorrect');
    } else {
        input.classList.add('incorrect');
        input.classList.remove('valid');
    }
}


fname_input.addEventListener("input", () =>
    validateField(fname_input, fname_input.value.trim() !== "")
);
lname_input.addEventListener("input", () =>
    validateField(lname_input, lname_input.value.trim() !== "")
);
orgTitle_input.addEventListener("input", () =>
    validateField(orgTitle_input, OrgTitleRegEx.test(orgTitle_input.value.trim()))
);
email_input.addEventListener("input", () =>
    validateField(email_input, email_input.value.trim() !== "")
);
contact_input.addEventListener("input", () =>
    validateField(contact_input, phoneRegex.test(contact_input.value.trim()))
);
campaign_input.addEventListener("change", () =>
    validateField(campaign_input, campaign_input.value !== "")
);

function getSignupFormErrors() {
    let errors = [];

    const inputs = [
        fname_input,
        lname_input,
        orgTitle_input,
        email_input,
        contact_input,
        campaign_input
    ];
    inputs.forEach(input => input.classList.remove('incorrect'));

    if (fname_input.value.trim() === '') {
        errors.push('First name is required');
        fname_input.classList.add('incorrect');
    }

    if (lname_input.value.trim() === '') {
        errors.push('Last name is required');
        lname_input.classList.add('incorrect');
    }

    if (orgTitle_input.value.trim() === '' || !EmpRegEx.test(orgTitle_input.value.trim())) {
        errors.push('Employment title must be at least 7 characters long and only contain letters, hyphens, or spaces');
        orgTitle_input.classList.add('incorrect');
    }

    if (email_input.value.trim() === '') {
        errors.push('Email is required');
        email_input.classList.add('incorrect');
    }

    if (contact_input.value.trim() === '' || !phoneRegex.test(contact_input.value.trim())) {
        errors.push('Valid contact number is required');
        contact_input.classList.add('incorrect');
    }

    if (campaign_input.value === '') {
        errors.push('Campaign selection is required');
        campaign_input.classList.add('incorrect');
    }

    return errors;
}

// Only one submit handler
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let errors = getSignupFormErrors();

    if (errors.length === 0) {
        const formData = new FormData(this);
        const queryString = new URLSearchParams(formData).toString();
        window.location.href = `thankyou.html?${queryString}`;
    } else {
        console.log(errors); 
    }
});



let oLastModif = new Date(document.lastModified);

modified.innerHTML = `Last Modification: <span class="last-mod">${oLastModif.toLocaleString()}</span>`;

document.getElementById('copyright-year').textContent = new Date().getFullYear();


