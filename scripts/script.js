const navToggle = document.querySelector('.nav_toggle');
const navSelection = document.querySelector('.global_nav_selection');

navToggle.addEventListener('click', () => {
  const isOpen = navSelection.classList.toggle('open');
  navToggle.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});