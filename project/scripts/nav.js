export function initNavigation() {
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
  }
  