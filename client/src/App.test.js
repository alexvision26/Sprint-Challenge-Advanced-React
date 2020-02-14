import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'mutationobserver-shim';
import { render } from '@testing-library/react';

test('app starts without crashing', () => {
  render(<App/>)
})
