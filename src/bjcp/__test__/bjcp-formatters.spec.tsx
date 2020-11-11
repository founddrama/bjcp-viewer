import React from 'react';
import { formatSG, formatRange } from '../bjcp-formatters';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

describe('bjcp-formatters', () => {
  describe('formatSG', () => {
    test('should return gravity as X.XXX', () => {
      expect(formatSG(undefined)).toBeUndefined();
      expect(formatSG(1)).toBe('1.000');
      expect(formatSG(1.1)).toBe('1.100');
      expect(formatSG(1.01)).toBe('1.010');
      expect(formatSG(1.0001)).toBe('1.000');
    });
  });

  describe('formatRange', () => {
    const applyContainer = () => {
      return document.body.appendChild(document.createElement('table'))
                          .appendChild(document.createElement('tbody'))
                          .appendChild(document.createElement('tr'));
    };

    test('given a range with strings, hyphenate the values', () => {
      render(<>{formatRange('1', '2')}</>, {
        container: applyContainer()
      });
      expect(screen.getByText('1-2')).toBeInTheDocument();
    });

    test('given a range with numbers, hyphenate the values', () => {
      render(<>{formatRange(1, 2)}</>, {
        container: applyContainer()
      });
      expect(screen.getByText('1-2')).toBeInTheDocument();
    });

    test('if the lower bound is missing, should print "varies"', () => {
      render(<>{formatRange(undefined, 2)}</>, {
        container: applyContainer()
      });
      expect(screen.getByText('varies')).toBeInTheDocument();
    });

    test('if the upper bound is missing, should print "varies"', () => {
      render(<>{formatRange(1, undefined)}</>, {
        container: applyContainer()
      });
      expect(screen.getByText('varies')).toBeInTheDocument();
    });

    test('if the lower and upper bounds are missing, should print "varies"', () => {
      render(<>{formatRange(undefined, undefined)}</>, {
        container: applyContainer()
      });
      expect(screen.getByText('varies')).toBeInTheDocument();
    });

    test('should apply a prefix if provided', () => {
      render(<>{formatRange(1, 2, { prefix: '$' })}</>, {
        container: applyContainer()
      });
      expect(screen.getByText('$1-2')).toBeInTheDocument();
    });

    test('should apply a suffix if provided', () => {
      render(<>{formatRange(1, 2, { suffix: '%' })}</>, {
        container: applyContainer()
      });
      expect(screen.getByText('1-2%')).toBeInTheDocument();
    });

    test('should apply a prefix and suffix if both are provided', () => {
      render(<>{formatRange(1, 2, { prefix: '$', suffix: '%' })}</>, {
        container: applyContainer()
      });
      expect(screen.getByText('$1-2%')).toBeInTheDocument();
    });
  });
});
