import React from 'react';
import StyleDetail from '../StyleDetail';
import {
  mockBeerStyle,
  mockExpandedBeerStyle,
  mockMeadStyle,
  mockCiderStyle,
} from '../../__test__/mocks';
import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { BJCPStyle, BJCPBeerTags } from '../../types';

const sectionHeadings = [
  'Overall Impression',
  'Aroma',
  'Appearance',
  'Flavor',
  'Mouthfeel',
  'Comments',
  'History',
  'Ingredients',
  //'Entry Instructions',
  'Examples',
  'Tags',
];

const mockCloseClick = jest.fn();

const convertHeadingToDataKey = (heading: HTMLElement): keyof BJCPStyle => {
  let dataKey = heading.id.replace('-', '_');
  if (dataKey === 'overall_impression') {
    dataKey = 'impression';
  }

  return dataKey as keyof BJCPStyle;
};

describe('BeerStyleDetail', () => {
  describe('Beer', () => {
    beforeEach(() => {
      render(<StyleDetail onCloseClick={mockCloseClick} style={mockBeerStyle} />);
    });

    test(`it should render ${sectionHeadings.length} headings`, () => {
      expect(screen.getAllByRole('heading')).toHaveLength(12);
    });

    test('it should render the style ID + name', () => {
      expect(screen.getByText(`${mockBeerStyle["@_id"]}. ${mockBeerStyle.name}`)).toBeInTheDocument();
    });

    describe('stats block', () => {
      const { abv, ibu, og, fg, srm } = mockBeerStyle.stats;

      test('it should render the table', () => {
        expect(screen.getByRole('table')).toBeInTheDocument();
      });

      test.each([
        ['ABV', `${abv.range![0].low}-${abv.range![0].high}%`],
        ['IBU', `${ibu.range![0].low}-${ibu.range![0].high}`],
        ['O.G.', `${og.range![0].low}0-${og.range![0].high}`],
        ['F.G.', `${fg.range![0].low}0-${fg.range![0].high}`],
        ['SRM', `${srm.range![0].low}-${srm.range![0].high}`]
      ])(
        `%s block should read %s`,
        (thLabel, cellValue) => {
          expect(screen.getByText(thLabel)).toBeInTheDocument();
          expect(screen.getByText(cellValue)).toBeInTheDocument();
        }
      );

      test('renders the SRM as a faux gradient with color bands', () => {
        const srmGradientContainer = screen.getByTestId('srm-gradient');
        expect(srm.range![0].low).toBeDefined();
        expect(srm.range![0].high).toBeDefined()
        for (let srmValue = srm.range![0].low!; srmValue <= srm.range![0].high!; srmValue++) {
          expect(srmGradientContainer.querySelectorAll('div div')).toHaveLength(srm.range![0].high! - srm.range![0].low! + 1);
        }
      });

      test('it should not render the stats notes', () => {
        const statsNotes = screen.queryByTestId('style-stats-notes');
        expect(statsNotes).not.toBeInTheDocument();
      });
    });

    test('it should not render the preamble', () => {
      const preamble = screen.queryByTestId('style-preamble');
      expect(preamble).not.toBeInTheDocument();
    });

    test.each(sectionHeadings)(
      `it should render the %s heading and accompanying text`,
      (headingText) => {
        // the heading
        const heading = screen.getByText(headingText);
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveAttribute('id');
        expect(heading.id).toBe(headingText.toLowerCase().replace(/\s/g, '-'));
        expect(heading.nextSibling).toBeInstanceOf(HTMLParagraphElement);

        // the paragraph text
        const headingAsKey: keyof BJCPStyle = convertHeadingToDataKey(heading);
        if (headingAsKey === 'tags') {
          const tags = mockBeerStyle[headingAsKey];
          tags!.forEach((t: BJCPBeerTags) => {
            expect(screen.queryByText(`#${t.replace('-', '\u2011')}`, {
              exact: false
            })).toBeInTheDocument();
          });
        } else {
          expect(screen.queryByText(mockBeerStyle[headingAsKey] as string)).toBeInTheDocument();
        }
      }
    );

    test('.close-icon should ... work', () => {
      const article = screen.getByRole('article');
      const closeIcon = article.querySelector('.close-icon');
      expect(closeIcon).toBeInTheDocument();
  
      fireEvent.click(closeIcon!);
      expect(mockCloseClick).toHaveBeenCalled();
    });
  });

  describe('Beer with optional fields', () => {
    const sectionHeadingsWithOptional = [
      ...sectionHeadings,
      'Entry Instructions',
    ];

    beforeEach(() => {
      render(<StyleDetail onCloseClick={mockCloseClick} style={mockExpandedBeerStyle} />);
    });

    test('renders the stats notes', () => {
      const statsNotes = screen.getByTestId('style-stats-notes');
      expect(statsNotes).toBeInTheDocument();
    });

    test('it should not render the preamble', () => {
      const preamble = screen.getByTestId('style-preamble');
      expect(preamble).toBeInTheDocument();
    });

    test(`it should render ${sectionHeadingsWithOptional.length} headings`, () => {
      expect(screen.getAllByRole('heading')).toHaveLength(13);
    });

    test('it should render the Entry Instructions heading and accompanying text', () => {
      const headingText = 'Entry Instructions';
      
      // the heading
      const heading = screen.getByText(headingText);
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveAttribute('id');
      expect(heading.id).toBe(headingText.toLowerCase().replace(/\s/g, '-'));
      expect(heading.nextSibling).toBeInstanceOf(HTMLParagraphElement);

      // the paragraph text
      const headingAsKey: keyof BJCPStyle = convertHeadingToDataKey(heading);
      expect(screen.queryByText(mockExpandedBeerStyle[headingAsKey] as string)).toBeInTheDocument();
    });
  });

  describe('Mead', () => {
    beforeEach(() => {
      render(<StyleDetail onCloseClick={mockCloseClick} style={mockMeadStyle} />);
    });

    test('it should render the style ID + name', () => {
      expect(screen.getByText(`${mockMeadStyle["@_id"]}. ${mockMeadStyle.name}`)).toBeInTheDocument();
    });

    test('it should not render the stats block table', () => {
      expect(screen.queryByRole('table')).not.toBeInTheDocument();
    });
  });

  describe('Cider', () => {
    beforeEach(() => {
      render(<StyleDetail onCloseClick={mockCloseClick} style={mockCiderStyle} />);
    });

    test('it should render the style ID + name', () => {
      expect(screen.getByText(`${mockCiderStyle["@_id"]}. ${mockCiderStyle.name}`)).toBeInTheDocument();
    });

    describe('stats block', () => {
      const { abv, ibu, og, fg, srm } = mockCiderStyle.stats;

      test('it should render the table', () => {
        expect(screen.getByRole('table')).toBeInTheDocument();
      });

      test.each([
        ['ABV', `${abv.range![0].low}-${abv.range![0].high}%`],
        ['IBU', 'Varies'],
        ['O.G.', `${og.range![0].low}-${og.range![0].high}`],
        ['F.G.', `${fg.range![0].low}-${fg.range![0].high}0`],
        ['SRM', 'Varies']
      ])(
        `%s block should read %s`,
        (thLabel, cellValue) => {
          switch (thLabel) {
            case 'IBU':
            case 'SRM':
              expect(screen.queryByText(thLabel)).not.toBeInTheDocument();
              expect(screen.queryByText(cellValue)).not.toBeInTheDocument();
              break;
            default:
              expect(screen.getByText(thLabel)).toBeInTheDocument();
              expect(screen.getByText(cellValue)).toBeInTheDocument();
          }
        }
      );

      test('should not render the SRM faux gradient', () => {
        expect(screen.queryByTestId('srm-gradient')).not.toBeInTheDocument();
      });
    });
  });
});
