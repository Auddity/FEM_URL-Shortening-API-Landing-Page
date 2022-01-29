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
const URL = `https://api.shrtco.de/v2/shorten?url=${input}`;

form.addEventListener('submit', e => {
  e.preventDefault();
  
  console.log(input);
  console.log(URL);
  getData(URL);
});

const getData = url => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onreadystatechange = () => {
    if(xhr.readyState !== 4) return;
    if(xhr.status === 201) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
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
