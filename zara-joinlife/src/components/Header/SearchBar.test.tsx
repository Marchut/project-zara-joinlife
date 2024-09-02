import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders SearchBar component', () => {
  const { getByText } = render(<SearchBar />);
  const linkElement = getByText(/SearchBar Component/i);
  expect(linkElement).toBeInTheDocument();
});
