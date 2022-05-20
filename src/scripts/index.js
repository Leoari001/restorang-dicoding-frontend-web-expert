import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/utils.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from '../scripts/views/app';
import swRegister from './utils/sw-register';


const app = new App({
  button: document.querySelector('#hamburger-btn'),
  drawer: document.querySelector('#navigation'),
  content: document.querySelector('#main-content'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

