import React from 'react';
import BeerStyleRow from '../BeerStyleRow';
import { mockBeerStyle } from '../../__test__/mocks';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

describe('BeerStyleRow', () => {
  let tbody: HTMLElement;
  let table: HTMLElement;

  beforeEach(() => {
    table = document.createElement('table');
    tbody = document.createElement('tbody');

    render(<BeerStyleRow onClick={jest.fn} isSelected={false} style={mockBeerStyle} />, {
      container: document.body.appendChild(table).appendChild(tbody),
    });
  });

  test('should render 7 cells', () => {
    expect(screen.getAllByRole('cell')).toHaveLength(7);
  });

  test('should render the style ID', () => {
    expect(screen.getByText(`${mockBeerStyle["@_id"]}.`)).toBeInTheDocument();
  });

  test('should render the style name', () => {
    expect(screen.getByText(`${mockBeerStyle.name}`)).toBeInTheDocument();
  });

  test('should render ABV as a range', () => {
    const { low, high } = mockBeerStyle.stats.abv;
    expect(screen.getByText(`${low}-${high}%`)).toBeInTheDocument();
  });

  test('should render IBU as a range', () => {
    const { low, high } = mockBeerStyle.stats.ibu;
    expect(screen.getByText(`${low}-${high}`)).toBeInTheDocument();
  });

  test('should render O.G. as a range', () => {
    const { low, high } = mockBeerStyle.stats.og;
    expect(screen.getByText(`${low}0-${high}`)).toBeInTheDocument();
  });

  test('should render F.G. as a range', () => {
    const { low, high } = mockBeerStyle.stats.fg;
    expect(screen.getByText(`${low}0-${high}`)).toBeInTheDocument();
  });

  test('should render SRM as a range', () => {
    const { low, high } = mockBeerStyle.stats.srm;
    expect(screen.getByText(`${low}-${high}`)).toBeInTheDocument();
  });

  test('should render WITHOUT .is-selected by default', () => {
    expect(screen.getByRole('row')).not.toHaveClass('is-selected');
  });

  test('should render with .is-selected when the prop is passed', () => {
    render(<BeerStyleRow onClick={jest.fn} isSelected={true} style={mockBeerStyle} />, {
      container: document.body.appendChild(table).appendChild(tbody),
    });
    expect(screen.getByRole('row')).toHaveClass('is-selected');
  });
});
