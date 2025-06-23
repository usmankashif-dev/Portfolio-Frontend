// Theme toggle logic for all pages
(function() {
  function setTheme(light) {
    const body = document.body;
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');
    if (light) {
      body.classList.add('light-mode');
      if(nav) nav.classList.add('light-mode');
      if(footer) footer.classList.add('light-mode');
    } else {
      body.classList.remove('light-mode');
      if(nav) nav.classList.remove('light-mode');
      if(footer) footer.classList.remove('light-mode');
    }
  }
  // On load, set theme from localStorage
  document.addEventListener('DOMContentLoaded', function() {
    setTheme(localStorage.getItem('theme') === 'light');
    // If toggle button exists, wire it up
    var themeToggle = document.getElementById('theme-toggle');
    if(themeToggle) {
      themeToggle.addEventListener('click', function() {
        const isLight = !document.body.classList.contains('light-mode');
        setTheme(isLight);
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        themeToggle.textContent = isLight ? '🌙' : '☀️';
      });
      // Set correct icon
      themeToggle.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
    }
  });
})();
