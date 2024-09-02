import React from 'react';
import { render } from '@testing-library/react';
import CompromiseHeader from './CompromiseHeader';

test('renders CompromiseHeader component', () => {
  const { getByText } = render(<CompromiseHeader title='COMPROMISOS'/>);
  const linkElement = getByText(/CompromiseHeader Component/i);
  expect(linkElement).toBeInTheDocument();
});
