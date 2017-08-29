import './some-page-1.scss';

export class App {

  constructor(options) {
    this.props = {
      dom: null,
      ...options
    };
    console.log(this.props);

    this.props.dom.innerHTML = 'some-page-1-content';
  }

  dog() {
    console.log('some-page-1');
  }

}
