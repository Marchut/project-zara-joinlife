import React from 'react';
import { render } from '@testing-library/react';
import Compromise from './Compromise';

test('renders Compromise component', () => {
  const { getByText } = render(<Compromise />);
  const linkElement = getByText(/Compromise Component/i);
  expect(linkElement).toBeInTheDocument();
});
