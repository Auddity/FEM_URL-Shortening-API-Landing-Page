# Frontend Mentor - Shortly URL shortening API Challenge solution

My solution to the [Shortly URL shortening API Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G)

## Overview
- Responsive site
- Any valid URL can be shortened
- Display's List of shortened URL's
  - Can copy shortened URL
- Empty input field error

## Links
Code Git: [Github Auddity](https://github.com/Auddity/FEM_URL-Shortening-API-Landing-Page)
Live Site: [Shortly URL Landing Page](https://fem-url-shortening-api-landing-page.vercel.app/)

## Built with
- Semantic HTML5
- Sass (scss)
- Flexbox
- Mobile-first
- Javasctipt 
  - HTTP Request

## Newly Learned

### Clipboard API
This project introduced me to the Clipboard API
```js
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
```
## Author
 - Portfolio Site: [Auddity Webdev Site](https://auddity.netlify.app/)
 - Frontend Mentor: [Auddity](https://www.frontendmentor.io/profile/Auddity)
 - I use to do sound design too: [Auddity LLC](https://www.auddityllc.com/)