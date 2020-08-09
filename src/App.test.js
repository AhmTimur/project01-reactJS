import React from 'react';
import { render } from '@testing-library/react';
import AppContainerWrap from './App';
import {unmountComponentAtNode} from "react-dom";

// test('renders learn react link', () => {
//   const { getByText } = render(<AppContainerWrap/>);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// //
test('render without crashing', () => {
  const div = document.createElement('div');
  render(<AppContainerWrap/>, div)
  unmountComponentAtNode(div)
})