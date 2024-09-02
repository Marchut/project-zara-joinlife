import React from 'react';
import { render } from '@testing-library/react';
import Intro from './Intro';

test('renders Intro component', () => {
  const { getByText } = render(<Intro />);
  const linkElement = getByText(/Intro Component/i);
  expect(linkElement).toBeInTheDocument();
});
