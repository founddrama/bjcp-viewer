import React from 'react';
import { formatSG, formatRange } from '../bjcp-formatters';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

describe('bjcp-formatters', () => {
  const stubRange = {
    ['@_flexible']: false,
    range: [{ low: 1, high: 2 }],
  };

  const VARIES = 'varies';

  describe('formatSG', () => {
    test('should return gravity as X.XXX', () => {
      expect(formatSG(undefined)).toBeUndefined();
      expect(formatSG(1)).toBe('1.000');
      expect(formatSG(1.1)).toBe('1.100');
      expect(formatSG(1.01)).toBe('1.010');
      expect(formatSG(1.0001)).toBe('1.000');
      expect(formatSG('1.23x')).toBe('1.23x');
    });
  });

  describe('formatRange', () => {
    const applyContainer = () => {
      return document.body.appendChild(document.createElement('table'))
                          .appendChild(document.createElement('tbody'))
                          .appendChild(document.createElement('tr'));
    };

    test('given a range with numbers, hyphenate the values', () => {
      render(<>{formatRange(stubRange)}</>, {
        container: applyContainer()
      });
      expect(screen.getByText('1-2')).toBeInTheDocument();
    });

    test('if the range is missing, should print "varies"', () => {
      render(<>{formatRange({ ['@_flexible']: false, range: undefined })}</>, {
        container: applyContainer()
      });
      expect(screen.getByText(VARIES)).toBeInTheDocument();
    });

    test('if @_flexible is true, should print "varies"', () => {
      render(<>{formatRange({ ['@_flexible']: true })}</>, {
        container: applyContainer()
      });
      expect(screen.getByText(VARIES)).toBeInTheDocument();
    });

    test('should apply a prefix if provided', () => {
      render(<>{formatRange(stubRange, { prefix: '$' })}</>, {
        container: applyContainer()
      });
      expect(screen.getByText('$1-2')).toBeInTheDocument();
    });

    test('should apply a suffix if provided', () => {
      render(<>{formatRange(stubRange, { suffix: '%' })}</>, {
        container: applyContainer()
      });
      expect(screen.getByText('1-2%')).toBeInTheDocument();
    });

    test('should apply a prefix and suffix if both are provided', () => {
      render(<>{formatRange(stubRange, { prefix: '$', suffix: '%' })}</>, {
        container: applyContainer()
      });
      expect(screen.getByText('$1-2%')).toBeInTheDocument();
    });
  });
});
