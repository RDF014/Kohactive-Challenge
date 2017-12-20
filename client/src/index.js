import React, { Component } from 'react';
import { render } from 'react-dom';

import EmailForm from './components/EmailForm';

export default class App extends Component {
  render() {
    return (
      <div>
        <EmailForm />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
