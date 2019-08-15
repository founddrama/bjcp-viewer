export const SRM_VALUES = [ '',//0th is sentinel
                     'FEE287',
                     'FED265',
                     'FEC048',
                     'FDB335',
                     'F9A21C',
                     'F49708',
                     'ED8A09',
                     'E37C07',
                     'DE7206',
                     'D46806',
                     'CC5E06',
                     'C35404',
                     'BC4D03',
                     'B44605',
                     'AB3C04',
                     'A53904',
                     '9E3203',
                     '932C02',
                     '8D2601',
                     '882203',
                     '811F02',
                     '7A1C02',
                     '721701',
                     '6D1301',
                     '671002',
                     '630F00',
                     '5C0C00',
                     '560601',
                     '520500',
                     '4B0601',
                     '470403',
                     '4C0102',
                     '410409',
                     '390005',
                     '350106',
                     '330109',
                     '2F0309',
                     '2B0309',
                     '2B050B',
                     '28060A'
];

function getColorFromSRM(n) {
  switch (n) {
    case 1: case 2:
      return 'Straw';
    case 3: case 4:
      return 'Yellow';
    case 5: case 6:
      return 'Gold';
    case 7: case 8: case 9:
      return 'Amber';
    case 10: case 11: case 12:
    case 13: case 14:
      return 'Deep Amber/Light Copper';
    case 15: case 16:
      return 'Copper';
    case 17: case 18:
      return 'Deep Copper/Light Brown';
    case 19: case 20:
    case 21: case 22:
      return 'Brown';
    case 23: case 24: case 25:
    case 26: case 27: case 28:
    case 29: case 30:
      return 'Dark Brown';
    case 31: case 32: case 33:
    case 34: case 35:
      return 'Very Dark Brown';
    case 36: case 37: case 38:
    case 39: case 40:
      return 'Black';
    default:
      return 'Other Color';
  }
}
