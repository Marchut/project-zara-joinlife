import React from 'react';
import { render } from '@testing-library/react';
import UserOptions from './UserOptions';

test('renders UserOptions component', () => {
  const { getByText } = render(<UserOptions />);
  const linkElement = getByText(/UserOptions Component/i);
  expect(linkElement).toBeInTheDocument();
});
