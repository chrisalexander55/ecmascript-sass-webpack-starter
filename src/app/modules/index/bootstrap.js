// global css
import '../../sass/main.scss';

// classes you want to use immediately
import {App} from './some-module/start';
import {Http} from '../shared/rest/Http';

/**
 * entrance code for Index SPA
 */
function main() {
  document.title = 'Loading...';

  const app = new App({
    dom: document.querySelector('.tbl-cntr'),
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: 'prop3'
  });

  // we can make requests to multiple domains, check out app/modules/shared/proxy/config.js
  const http = new Http();

  // send request to github.com
  http.get('/node-0/search/repositories?o=desc&q=es6&s=stars&type=Repositories&utf8=✓').then((res) => {
    const data = JSON.parse(res);
    app.render(data);
    document.title = 'Index Page';
  });
}

document.addEventListener('DOMContentLoaded', main);
