import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';

test('renders Menu component', () => {
  const { getByText } = render(<Menu />);
  const linkElement = getByText(/Menu Component/i);
  expect(linkElement).toBeInTheDocument();
});
