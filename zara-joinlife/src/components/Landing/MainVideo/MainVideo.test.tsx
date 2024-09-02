import React from 'react';
import { render } from '@testing-library/react';
import MainVideo from './MainVideo';

test('renders MainVideo component', () => {
  const { getByText } = render(<MainVideo />);
  const linkElement = getByText(/MainVideo Component/i);
  expect(linkElement).toBeInTheDocument();
});
