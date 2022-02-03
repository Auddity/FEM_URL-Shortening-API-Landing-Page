const getElement = selector => {
  const element = document.getElementById(selector);
  if(element) return element;
  throw new Error(`Please check "${selector}", element not found`)
}

const menuBtn = getElement('menu-btn');
const menuModal = getElement('nav-bar-menu');
const startBtns = document.querySelectorAll('.btn-cta');
const form = getElement('form');
const inputText = getElement('input-text');
const inputEl = getElement('form-input');
const errP = getElement('err');
const displayCtnr = getElement('display-ctnr');
const infoEl = getElement('info');

const URL = `https://api.shrtco.de/v2/shorten?url=`;

const getData = url => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${url}${inputEl.value}`);
  xhr.onreadystatechange = () => {
    if(xhr.readyState !== 4) return;
    if(xhr.status === 201) {
      const data = JSON.parse(xhr.responseText);
      const shortRes = data.result.full_short_link2;
      const origRes = data.result.original_link;
      displayData(origRes, shortRes);
    } else {
      console.log(xhr.ok);
      console.log(xhr.error_code);
    };
  };
  xhr.send();
};

const displayData = (orig, short) => {
  const returnEl = document.createElement('div');
  const returnOrig = document.createElement('div');
  const returnShort = document.createElement('div');
  const origP = document.createElement('p');
  const shortenP = document.createElement('p');
  returnEl.classList.add('return');
  returnOrig.classList.add('return-url');
  returnShort.classList.add('return-shorten');
  origP.classList.add('return-url-display');
  shortenP.classList.add('return-shorten-display');
  displayCtnr.appendChild(returnEl);
  returnEl.appendChild(returnOrig);
  returnEl.appendChild(returnShort);
  returnOrig.appendChild(origP);
  returnShort.appendChild(shortenP);

  origP.textContent = orig;
  shortenP.textContent = short;

  const btnCtnr = document.createElement('div');
  const btn = document.createElement('button');
  btnCtnr.classList.add('return-btn-ctnr');
  btn.className = 'btn btn-square btn-copy';
  btn.setAttribute('type', 'button');
  btn.textContent = 'Copy';
  returnEl.appendChild(btnCtnr);
  btnCtnr.appendChild(btn);

  const copyBtn = btnCtnr.querySelector('.btn-copy');
  copyBtn.onclick = () => copyShortUrl(shortenP.textContent, copyBtn);
}

const copyShortUrl = (text, copyBtn) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      copyBtn.textContent = 'Copied!';
      copyBtn.style.background = 'hsl(257, 27%, 26%)';
    })
    .catch(err => {
      alert('Error in copying url: ', err);
    });
};

const inputError = (message) => {
  errP.textContent = message;
  inputEl.style.outlineColor = 'hsl(0, 87%, 57%)';
  inputEl.style.outlineStyle = 'solid';
  inputEl.style.outlineWidth = '1px';
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

// URL Submit
form.addEventListener('submit', e => {
  e.preventDefault();
  inputEl.value === '' ? inputError('Please add a link') : getData(URL);
  inputEl.value = '';
});

// Input Focus/Blur
inputEl.addEventListener('focus', () => {
  inputText.style.zIndex = '-1';
});
inputEl.addEventListener('blur', () => {
  inputText.style.zIndex = '0';
});