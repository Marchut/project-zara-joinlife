// src/components/Timeline/TimelineItem.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import TimelineItem from './TimelineItem';
import { TimelineItemProps } from '../../types';

describe('TimelineItem', () => {
  const defaultProps: TimelineItemProps = {
    title: '96% ALGODÓN DE FUENTES PREFERENTES',
    description: 'Durante la última campaña del ejercicio 2023, hemos conseguido que el 96% del algodón provenga de fuentes preferentes.'
  };

  test('renders TimelineItem component', () => {
    const { getByText } = render(<TimelineItem {...defaultProps} />);

    // Verificar que el año se muestra
    expect(getByText(/2023/i)).toBeInTheDocument();

    // Verificar que el título se muestra
    expect(getByText(/96% ALGODÓN DE FUENTES PREFERENTES/i)).toBeInTheDocument();

    // Verificar que la descripción se muestra
    expect(getByText(/Durante la última campaña del ejercicio 2023, hemos conseguido que el 96% del algodón provenga de fuentes preferentes./i)).toBeInTheDocument();
  });
});
