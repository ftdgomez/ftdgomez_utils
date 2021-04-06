import { validationMethods } from '../../dist/';

describe('function: isAccepted', () => {
  const { isAccepted } = validationMethods;
  describe('Debe devolver false cuando:', () => {
    test('le pasan un int que no sea 1', () => {
      expect(isAccepted(9)).toBe(false);
    });

    test('le pasan un float', () => {
      expect(isAccepted(9.4)).toBe(false);
    });

    test('le pasan un array', () => {
      expect(isAccepted([])).toBe(false);
    });

    test('le pasan un objeto', () => {
      expect(isAccepted({})).toBe(false);
    });

    test('le pasan false', () => {
      expect(isAccepted(false)).toBe(false);
    });
  });
  describe('Debe devolver true cuando:', () => {
    test('le pasan un string "yes"', () => {
      expect(isAccepted('yes')).toBe(true);
    });
    test('le pasan un string "on"', () => {
      expect(isAccepted('on')).toBe(true);
    });
  });
  test('le pasan un numero 1', () => {
    expect(isAccepted(1)).toBe(true);
  });
  test('le pasan un true', () => {
    expect(isAccepted(true)).toBe(true);
  });
});
