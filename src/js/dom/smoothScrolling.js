export function smoothScrolling() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

const buttonToTop = document.querySelector('.scroll-to-top');

buttonToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.onscroll = () => changeScrollButtonVisibility();

export function changeScrollButtonVisibility() {
  const button = document.querySelector('.scroll-to-top');
  const offsetTrigger = 60;
  const pageOffset = window.pageYOffset;

  if (pageOffset > offsetTrigger) {
    button.classList.remove('js-transparent');
  } else {
    button.classList.add('js-transparent');
  }
}
