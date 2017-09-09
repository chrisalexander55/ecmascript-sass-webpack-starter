// global css
import '../../sass/main.scss';

// classes you want to use immediately
import {App} from './some-module/some-page-1';
import {Http} from '../shared/rest/Http';

/**
 * entrance code for Some-Page-1 SPA
 */
function main() {
  document.title = 'Loading...';

  const app = new App({
    dom: document.querySelector('.container'),
    prop1: 'propA',
    prop2: 'propB',
    prop3: 'propC'
  });

  // we can make requests to multiple domains, check out app/modules/shared/proxy/config.js
  const http = new Http();

  // send request to npmjs.org
  http.get('/node-0/search/repositories?o=desc&q=angular6&s=stars&type=Repositories&utf8=✓').then((res) => {
    const data = JSON.parse(res);
    app.render(data);
    document.title = 'Some-Page-1';
  });
}

document.addEventListener('DOMContentLoaded', main);
