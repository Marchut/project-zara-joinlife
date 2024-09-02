import React from 'react';
import { render } from '@testing-library/react';
import Timeline from './Timeline';

test('renders Timeline component', () => {
  const { getByText } = render(<Timeline />);
  const linkElement = getByText(/Timeline Component/i);
  expect(linkElement).toBeInTheDocument();
});
