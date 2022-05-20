import UrlParser from '../routes/url-parser';
import routes from '../routes/router';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ button, drawer, content }) {
    this.button = button;
    this.drawer = drawer;
    this.content = content;

    this.initialAppShell();
  }

  initialAppShell() {
    DrawerInitiator.init({
      button: this.button,
      drawer: this.drawer,
      content: this.content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.content.innerHTML = await page.render();
    await page.afterRender();
    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click',(event)=>{
      event.preventDefault();
      document.querySelector('#main-content').focus();
    })
  }
}
export default App;
