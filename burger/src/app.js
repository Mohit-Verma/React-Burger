import React, { Component } from 'react';
import { layout as Layout } from './components/layout/layout';
import BurgerBuilder from './containers/burgerbuilder/burgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
