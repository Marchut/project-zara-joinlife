// src/components/Compromise/ExpandableItem.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ExpandableItem from './ExpandableItem';
import { ExpandableItemProps } from '../../types';

const setup = (props: Partial<ExpandableItemProps> = {}) => {
  const defaultProps: ExpandableItemProps = {
    title: 'Test Title',
    description: 'Test Description',
  };

  return render(<ExpandableItem {...defaultProps} {...props} />);
};

test('renders ExpandableItem component', () => {
  const { getByText } = setup();

  // Verificar que el título se muestra
  expect(getByText(/Test Title/i)).toBeInTheDocument();

  // Verificar que el símbolo '+' se muestra inicialmente
  expect(getByText(/\+/i)).toBeInTheDocument();
});

test('expands and collapses description', () => {
  const { getByText, queryByText } = setup();

  // Verificar que la descripción no se muestra inicialmente
  expect(queryByText(/Test Description/i)).not.toBeInTheDocument();

  // Click para expandir
  fireEvent.click(getByText(/Test Title/i));

  // Verificar que la descripción se muestra después de expandir
  expect(getByText(/Test Description/i)).toBeInTheDocument();

  // Verificar que el símbolo cambia a '-'
  expect(getByText(/-/i)).toBeInTheDocument();

  // Click para colapsar
  fireEvent.click(getByText(/Test Title/i));

  // Verificar que la descripción no se muestra después de colapsar
  expect(queryByText(/Test Description/i)).not.toBeInTheDocument();

  // Verificar que el símbolo cambia a '+'
  expect(getByText(/\+/i)).toBeInTheDocument();
});
