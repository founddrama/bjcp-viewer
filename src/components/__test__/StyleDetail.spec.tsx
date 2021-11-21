import React from 'react';
import StyleDetail from '../StyleDetail';
import { mockBeerStyle, mockMeadStyle, mockCiderStyle } from '../../__test__/mocks';
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
  'Examples',
  'Entry Instructions',
  'Tags',
];

const mockCloseClick = jest.fn();

describe('BeerStyleDetail', () => {
  describe('Beer', () => {
    beforeEach(() => {
      render(<StyleDetail onCloseClick={mockCloseClick} style={mockBeerStyle} />);
    });
  
    test(`it should render ${sectionHeadings.length} headings`, () => {
      expect(screen.getAllByRole('heading')).toHaveLength(13);
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
        ['ABV', `${abv.low}-${abv.high}%`],
        ['IBU', `${ibu.low}-${ibu.high}`],
        ['O.G.', `${og.low}0-${og.high}`],
        ['F.G.', `${fg.low}0-${fg.high}`],
        ['SRM', `${srm.low}-${srm.high}`]
      ])(
        `%s block should read %s`,
        (thLabel, cellValue) => {
          expect(screen.getByText(thLabel)).toBeInTheDocument();
          expect(screen.getByText(cellValue)).toBeInTheDocument();
        }
      );

      test('renders the SRM as a faux gradient with color bands', () => {
        const srmGradientContainer = screen.getByTestId('srm-gradient');
        expect(srm.low).toBeDefined();
        expect(srm.high).toBeDefined()
        for (let srmValue = srm.low!; srmValue <= srm.high!; srmValue++) {
          expect(srmGradientContainer.querySelectorAll('div div')).toHaveLength(srm.high! - srm.low! + 1);
        }
      })
    });

    const convertHeadingToDataKey = (heading: HTMLElement): keyof BJCPStyle => {
      let dataKey = heading.id.replace('-', '_');
      if (dataKey === 'overall_impression') {
        dataKey = 'impression';
      }
  
      return dataKey as keyof BJCPStyle;
    };
  
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
        ['ABV', `${abv.low}-${abv.high}%`],
        ['IBU', `${ibu.low}-${ibu.high}`],
        ['O.G.', `${og.low}-${og.high}`],
        ['F.G.', `${fg.low}-${fg.high}0`],
        ['SRM', `${srm.low}-${srm.high}`]
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
