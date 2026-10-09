const langButtons = document.querySelectorAll('.lang');
const translated = document.querySelectorAll('[data-en][data-sw]');
function setLanguage(language) {
  document.documentElement.lang = language === 'sw' ? 'sw' : 'en';
  translated.forEach((element) => {
    const value = element.dataset[language];
    if (value !== undefined) element.innerHTML = value;
  });
  langButtons.forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}
langButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
