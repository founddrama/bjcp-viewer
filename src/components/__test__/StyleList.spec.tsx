import React from 'react';
import StyleList from '../StyleList';
import { mockStyleList } from '../../__test__/mocks';
import { fireEvent, getAllByRole, getByText, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

const mockEmitSelectedStyle = jest.fn();

describe('BeerStyleList', () => {
  let tbody: HTMLElement;
  let rows: HTMLElement[];
  beforeEach(() => {
    render(<StyleList styles={mockStyleList} emitSelectedStyle={mockEmitSelectedStyle} />);
    // RE: `[1]` -- account for `thead` y'all!
    tbody = screen.getAllByRole('rowgroup')[1];
    rows = getAllByRole(tbody, 'row');
  });
  
  test('should render the table heading appropriately', () => {
    expect(screen.getAllByRole('columnheader')).toHaveLength(6);
    [
      'Style',
      'ABV',
      'IBU',
      'O.G.',
      'F.G.',
      'SRM',
    ].forEach(th => {
      expect(screen.getByText(th)).toBeInTheDocument();
    });
  });

  test('should render a row for each style', () => {
    expect(rows).toHaveLength(mockStyleList.length);
  });

  test('by default, no row should be selected', () => {
    rows.forEach(row => {
      expect(row).not.toHaveClass('is-selected');
    });
  });

  test('clicking a row should call the emitter', () => {
    const _1D = getByText(tbody, '1D.', { exact: false });
    fireEvent.click(_1D);

    expect(mockEmitSelectedStyle).toBeCalledTimes(1);
    expect(mockEmitSelectedStyle).toBeCalledWith('1D');
  });
});
