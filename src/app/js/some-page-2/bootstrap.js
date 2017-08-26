// global css
import '../../sass/main.scss';

// classes you want to use immediately
import {App} from './some-module/some-page-2';
import {Http} from '../shared/rest/Http';

/**
 * entrance code for SPA
 */
function main() {
  document.title = 'Loading...';

  const app = new App({
    dom: document.querySelector('.container'),
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: 'prop3'
  });

  // we can make requests to multiple domains, check out app/xhr/config.js
  const http = new Http();

  // send request to github.com
  http.get('/node-0/search/repositories?o=desc&q=es6&s=stars&type=Repositories&utf8=✓').then((res) => {
    const data = JSON.parse(res);
    app.render(data);
    document.title = 'Some-Page-2';
  });

  // send request to npmjs.org
  http.get('/node-1').then((json) => console.log('From npmjs.org: ', json));

  console.log([1, 2, 3, 4].includes(1)); // ES7: Array.prototype.includes
}

document.addEventListener('DOMContentLoaded', main);
