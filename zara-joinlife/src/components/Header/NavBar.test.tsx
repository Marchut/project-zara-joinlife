import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar';

test('renders NavBar component', () => {
  const { getByText } = render(<NavBar />);
  const linkElement = getByText(/NavBar Component/i);
  expect(linkElement).toBeInTheDocument();
});
