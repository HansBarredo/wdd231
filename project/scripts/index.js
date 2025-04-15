import { initNavigation } from './navToggle.js';

initNavigation();

document.addEventListener('click', e => {
  if (!mainnav.contains(e.target) && e.target !== hambutton) {
    mainnav.classList.remove('show');
    hambutton.classList.remove('show');
    hambutton.classList.add('hide');
    navList.classList.add('hide');
  }
});
async function fetchArticles() {
  try {
    const response = await fetch('scripts/articles.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();

    console.log('Fetched Articles:', data);
    displayArticlesCards(data.articles);

  } catch (error) {
    console.error('Error fetching articles:', error);
  }
}

fetchArticles();

function displayArticlesCards(articles) {
  const container = document.querySelector('.articles-container');
  container.innerHTML = '';

  const shuffledArticles = articles.sort(() => 0.5 - Math.random());

  const selectedArticles = shuffledArticles.slice(0, 4);

  selectedArticles.forEach(article => {
    const articleCard = document.createElement('div');
    articleCard.classList.add('article-card');

    articleCard.innerHTML = `
      <h3 id="article-title">${article.title}</h3>
      <p id="article-author">${article.author}</p>
      <p id="article-description">${article.preview_description || 'N/A'}</p>
      <hr>
      <p id="article-date">${article.date_posted || 'N/A'}</p>
      <a href="#">Read More...</a>
    `;

    container.appendChild(articleCard);
  });

  
}



const counters = document.querySelectorAll('#counter-container span');
const container = document.querySelector('#counter-container');
let activated = false;

window.addEventListener("scroll", () => {
  const containerTop = container.offsetTop;
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition > containerTop + 100 && !activated) {
    counters.forEach(counter => {
      counter.innerText = "0";
      let count = 0;
      const target = parseInt(counter.dataset.count);
      const duration = 5000;
      const increment = Math.ceil(target / (duration / 16));
      const addPlus = target === 100000 || target === 30; 

      function updateCount() {
        count += increment;
        if (count < target) {
          counter.innerText = count.toLocaleString() + (addPlus ? "+" : "");
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target.toLocaleString() + (addPlus ? "+" : "");
        }
      }

      updateCount();
    });

    activated = true;
  }
});

let oLastModif = new Date(document.lastModified);

modified.innerHTML = `Last Modification: <span class="last-mod">${oLastModif.toLocaleString()}</span>`;

document.getElementById('copyright-year').textContent = new Date().getFullYear();
