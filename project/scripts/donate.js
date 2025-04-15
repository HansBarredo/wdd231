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