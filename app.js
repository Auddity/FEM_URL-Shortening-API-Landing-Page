const getElement = selector => {
  const element = document.getElementById(selector);
  if(element) return element;
  throw new Error(`Please check "${selector}", element not found`)
}

const menuBtn = getElement('menu-btn');
const menuModal = getElement('nav-bar-menu');
const startBtns = document.querySelectorAll('.btn-cta');
const form = getElement('form');

// Open Menu Modal
menuBtn.addEventListener('click', () => {
  menuModal.classList.toggle('show');
  console.log('click');
});

// Scroll to Form
startBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    let formTop = form.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: formTop,
      left: 0
    });
  });
});
