const getElement = selector => {
  const element = document.getElementById(selector);
  if(element) return element;
  throw new Error(`Please check "${selector}", element not found`)
}

const menuBtn = getElement('menu-btn');
const menuModal = getElement('nav-bar-menu');

// Open menu modal
menuBtn.addEventListener('click', () => {
  menuModal.classList.toggle('show');
  console.log('click');
});