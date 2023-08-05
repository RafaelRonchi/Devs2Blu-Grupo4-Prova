// Fetch HTML content modules from local server (VSCode Live Server)
async function fetchModule(fPath, fName) {
  let htmlContent = '';
  try {
    const fModule = await fetch(`${fPath}${fName}.html`);
    if (fModule.status === 200) {
      htmlContent = await fModule.text();
      return htmlContent;
    } else {
      alert(`A requisição de busca para o aquivo "${fName} não pôde ser completada": status ${fModule.status}`);
    };
  } finally {
    const htmlModule = document.querySelector(`#${fName}`);
    htmlModule.innerHTML = htmlContent;

    // Smartphone hamburger menu functionality
    setTimeout(() => {
      const hamburger = document.querySelector('.hamburger');
      hamburger.addEventListener('click', () => {
        const navbar = document.querySelector('.sphone-navbar');
        const lines = document.querySelectorAll('.line');
        navbar.classList.toggle('navbar-active');
        lines.forEach(line => {
          line.classList.toggle('red');
        });
      });
    }, 250);
  };
};

// IIFE sequence
(function init() {
  const modules = document.querySelectorAll('.module');
  const path = `../../html/global/`;
  modules.forEach(el => {
    const id = el.id;
    fetchModule(path, id);
  });
})();