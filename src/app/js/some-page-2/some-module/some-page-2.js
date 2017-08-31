export class App {

  constructor(options) {
    this.props = {
      dom: null,
      ...options // ES6: rest properties
    };

    this.props.dom.innerHTML = 'Loading from placehold.it...';

    setTimeout(() => {
      this.props.dom.innerHTML = '<img src="http://placehold.it/300x300" />';
    }, 500);
  }

  writeToConsole() {
    console.log('I am some-page-2');
  }

}
