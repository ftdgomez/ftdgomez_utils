import { validationMethods } from '../../dist/';

describe('function: oneOf', () => {
  const { oneOf } = validationMethods;
  describe('Debe devolver false cuando:', () => {
    test('le pasan un int que no sea 1', () => {
      expect(oneOf(9)).toBe(false);
    });

    test('le pasan un float', () => {
      expect(oneOf(9.4)).toBe(false);
    });

    test('le pasan un array', () => {
      expect(oneOf([])).toBe(false);
    });

    test('le pasan un objeto', () => {
      expect(oneOf({})).toBe(false);
    });

    test('le pasan false', () => {
      expect(oneOf(false)).toBe(false);
    });
  });
  describe('Debe devolver true cuando:', () => {
    test('le pasan un string "yes"', () => {
      expect(oneOf('yes')).toBe(true);
    });
    test('le pasan un string "on"', () => {
      expect(oneOf('on')).toBe(true);
    });
  });
  test('le pasan un numero 1', () => {
    expect(oneOf(1)).toBe(true);
  });
  test('le pasan un true', () => {
    expect(oneOf(true)).toBe(true);
  });
});
