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
      navList.classList.add('none'); 
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

const visitDialog = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = new Date();
    let message = "";
  
    if (!lastVisit) {
      message = "Welcome! Ready to make a donation?";
    } else {
      const previous = new Date(lastVisit);
      const diffTime = now - previous;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
      if (diffDays === 0) {
        message = "Back so soon! Awesome!";
      } else if (diffDays === 1) {
        message = "You last visited 1 day ago.";
      } else {
        message = `You last visited ${diffDays} days ago.`;
      }
    }
  
    visitDialog.textContent = message;
    visitDialog.showModal();
  

    visitDialog.addEventListener("click", () => {
      visitDialog.close();
    });

    localStorage.setItem("lastVisit", now.toISOString());

    let oLastModif = new Date(document.lastModified);

modified.innerHTML = `Last Modification: <span class="last-mod">${oLastModif.toLocaleString()}</span>`;

document.getElementById('copyright-year').textContent = new Date().getFullYear();
