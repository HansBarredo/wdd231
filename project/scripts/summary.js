const mainnav = document.querySelector('#navigation');
const hambutton = document.querySelector('#hamburger');
const navList = document.querySelector('#nav-list');

document.addEventListener("DOMContentLoaded", () => {
  mainnav.classList.remove("show");
  hambutton.classList.remove("show", "hide");
  navList.classList.add("hide");
});


hambutton.addEventListener('click', () => {
  const isShown = mainnav.classList.contains('show');

  if (isShown) {
    mainnav.classList.remove('show');
    hambutton.classList.remove('show');
    hambutton.classList.add('hide');
    navList.classList.add('hide');
  } else {
    mainnav.classList.add('show');
    hambutton.classList.remove('hide');
    hambutton.classList.add('show');
    navList.classList.remove('hide');
    setTimeout(() => {
      navList.classList.add = ('none'); 
    }, 3000);
  }
});

document.addEventListener('click', e => {
  if (!mainnav.contains(e.target) && e.target !== hambutton) {
    mainnav.classList.remove('show');
    hambutton.classList.remove('show');
    hambutton.classList.add('hide');
    navList.classList.add('hide');
  }
});

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
<p>Thank you, Mr./Ms. ${lastName}, for joining the Antipolo Chamber of Commerce. We are excited to have <strong>${organization}</strong> as part of our growing business community!</p>
`;

let oLastModif = new Date(document.lastModified);

modified.innerHTML = `Last Modification: <span class="last-mod">${oLastModif.toLocaleString()}</span>`;

document.getElementById('copyright-year').textContent = new Date().getFullYear();
