const navButton =
  document.querySelector('#nav-button');

const navBar =
  document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {

  navButton.classList.toggle('show');
  navBar.classList.toggle('show');

  const isOpen =
    navBar.classList.contains('show');

  navButton.setAttribute(
    'aria-expanded',
    isOpen
  );
});