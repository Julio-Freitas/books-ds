import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DsButton, Thing } from '../.';

const App = () => {
  return (
    <div>
      <Thing />
      <DsButton />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

