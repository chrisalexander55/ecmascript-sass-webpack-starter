// global css
import '../../sass/main.scss';

// classes you want to use immediately
import {App} from './some-module/some-page-1';

/**
 * entrance code for SPA
 */
function main() {
  const app = new App({
    dom: document.querySelector('.container')
  });
  app.dog();

  document.title = 'Some-Page-1';
}

document.addEventListener('DOMContentLoaded', main);
