const getElement = selector => {
  const element = document.getElementById(selector);
  if(element) return element;
  throw new Error(`Please check "${selector}", element not found`)
}

const menuBtn = getElement('menu-btn');
const menuModal = getElement('nav-bar-menu');
const startBtns = document.querySelectorAll('.btn-cta');
const form = getElement('form');
const input = getElement('form-input').value;


form.addEventListener('submit', e => {
  e.preventDefault();
  
  getData();
});

const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.shrtco.de/v2/shorten?url=${input}`);
  console.log(xhr.response); // empty
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
      console.log('success');
    }
    console.log({
      status: xhr.status,
      text: xhr.statusText,
      state: xhr.readyState
    });
  }
  xhr.send();
}

const displayData = () => {

};

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
