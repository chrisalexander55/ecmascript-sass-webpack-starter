// global css
import '../../sass/main.scss';

// classes you want to use immediately
import {App} from './some-module/some-page-2';

/**
 * entrance code for SPA
 */
function main() {
  document.title = 'Loading Image...';

  const app = new App({
    dom: document.querySelector('.container')
  });

  app.writeToConsole();

  document.title = 'Some-Page-2';
}

document.addEventListener('DOMContentLoaded', main);
