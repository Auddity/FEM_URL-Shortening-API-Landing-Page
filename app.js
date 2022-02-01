const getElement = selector => {
  const element = document.getElementById(selector);
  if(element) return element;
  throw new Error(`Please check "${selector}", element not found`)
}

const menuBtn = getElement('menu-btn');
const menuModal = getElement('nav-bar-menu');
const startBtns = document.querySelectorAll('.btn-cta');
const form = getElement('form');
const inputEl = getElement('form-input');
const urlDisplay = getElement('url-display');
const urlShort = getElement('url-short');

const URL = `https://api.shrtco.de/v2/shorten?url=`;

// URL Submit
form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(inputEl.value);
  getData(URL);
  // inputEl.value = '';
  // displayData()
});

const getData = url => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${url}${inputEl.value}`);
  xhr.onreadystatechange = () => {
    if(xhr.readyState !== 4) return;
    if(xhr.status === 201) {
      const data = JSON.parse(xhr.responseText);
      const shortRes = data.result.full_short_link2;
      const origRes = data.result.original_link;
      displayData(origRes, shortRes)
    } else {
      console.log(xhr.ok);
      console.log(xhr.error_code);
    }
    console.log({
      status: xhr.status,
      text: xhr.statusText,
      state: xhr.readyState
    });
  };
  xhr.send();
};

const displayData = (orig, short) => {
  urlDisplay.textContent = orig;
  urlShort.textContent = short;
};
// Open Menu Modal
menuBtn.addEventListener('click', () => {
  menuModal.classList.toggle('show');
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
