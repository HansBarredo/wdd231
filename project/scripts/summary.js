import { initNavigation } from './nav.js';

initNavigation();

const myInfo = new URLSearchParams(window.location.search);
const firstName = myInfo.get('fname') || 'Valued Member';
const lastName = myInfo.get('lname') || '';
const organization = myInfo.get('organization') || 'our community';

document.querySelector("#summary").innerHTML = `
<p><strong style="color:var(--secondary-color);">Firstname:</strong> ${firstName}</p>
<p><strong style="color:var(--secondary-color);">Lastname:</strong> ${lastName}</p>
<p><strong style="color:var(--secondary-color);">Organization Title:</strong> ${myInfo.get('organization-title')}</p>
<p><strong style="color:var(--secondary-color);">Email:</strong> ${myInfo.get('email')}</p>
<p><strong style="color:var(--secondary-color);">Contact:</strong> ${myInfo.get('tel')}</p>
<p><strong style="color:var(--secondary-color);">Organization:</strong> ${organization}</p>
<p><strong style="color:var(--secondary-color);">Time submitted:</strong> ${myInfo.get('timestamp')}</p>
<p>Thank you, Mr./Ms. ${lastName}, for you desire to volunteer. We are excited to have you as part of our growing community!</p>
`;

let oLastModif = new Date(document.lastModified);

modified.innerHTML = `Last Modification: <span class="last-mod">${oLastModif.toLocaleString()}</span>`;

document.getElementById('copyright-year').textContent = new Date().getFullYear();
