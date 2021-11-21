import React from 'react';
import BeerStyleDetail from '../BeerStyleDetail';
import { mockStyle } from '../../__test__/mocks';
import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { BJCPStyle } from '../../beer-style-types';

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
  beforeEach(() => {
    render(<BeerStyleDetail onCloseClick={mockCloseClick} style={mockStyle} />);
  });

  test(`it should render ${sectionHeadings.length} headings`, () => {
    expect(screen.getAllByRole('heading')).toHaveLength(13);
  });

  test('it should render the style ID + name', () => {
    expect(screen.getByText(`${mockStyle["@_id"]}. ${mockStyle.name}`)).toBeInTheDocument();
  })

  test('it should render stats block appropriately', () => {
    const { abv, ibu, og, fg, srm } = mockStyle.stats;
    expect(screen.getAllByRole('table')).toHaveLength(1);

    expect(screen.getAllByRole('columnheader')).toHaveLength(5);
    ['ABV', 'IBU', 'O.G.', 'F.G.', 'SRM'].forEach(th => {
      expect(screen.getByText(th)).toBeInTheDocument();
    });

    expect(screen.getAllByRole('cell')).toHaveLength(6);
    [ `${abv.low}-${abv.high}%`,
      `${ibu.low}-${ibu.high}`,
      `${og.low}0-${og.high}`,
      `${fg.low}0-${fg.high}`,
      `${srm.low}-${srm.high}`
    ].forEach(p => {
      expect(screen.getByText(p)).toBeInTheDocument();
    });

    const srmGradientContainer = screen.getByTestId('srm-gradient');
    for (let srmValue = srm.low; srmValue <= srm.high; srmValue++) {
      expect(srmGradientContainer.querySelectorAll('div div')).toHaveLength(srm.high - srm.low + 1);
    }
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
        const tags = mockStyle[headingAsKey];
        tags.forEach(t => {
          expect(screen.queryByText(`#${t.replace('-', '\u2011')}`, {
            exact: false
          })).toBeInTheDocument();
        });
      } else {
        expect(screen.queryByText(mockStyle[headingAsKey] as string)).toBeInTheDocument();
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
