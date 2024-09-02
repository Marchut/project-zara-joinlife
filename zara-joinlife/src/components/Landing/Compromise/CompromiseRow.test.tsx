// src/components/Compromise/CompromiseRow.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import CompromiseRow from './CompromiseRow';
import { CompromiseRowProps } from '../../types';

const items: CompromiseRowProps['items'] = [
  {
    title: "Test Title 1",
    description: "Test Description 1"
  },
  {
    title: "Test Title 2",
    description: "Test Description 2"
  }
];

test('renders CompromiseRow component', () => {
  const { getByText } = render(<CompromiseRow year="2025" items={items} />);
  
  // Verificar que el año se muestra
  expect(getByText(/2025/i)).toBeInTheDocument();
  
  // Verificar que los títulos de los items se muestran
  expect(getByText(/Test Title 1/i)).toBeInTheDocument();
  expect(getByText(/Test Title 2/i)).toBeInTheDocument();
});
