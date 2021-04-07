import { validationMethods } from '../../dist/src/methods';

describe('function: isString', () => {
  const { isString } = validationMethods;
  describe('Debe devolver false cuando:', () => {
    test('le pasan un int', () => {
      expect(isString(9)).toBe(false);
    });

    test('le pasan un float', () => {
      expect(isString(9.4)).toBe(false);
    });

    test('le pasan un array', () => {
      expect(isString([])).toBe(false);
    });

    test('le pasan un objeto', () => {
      expect(isString({})).toBe(false);
    });

    test('le pasan true', () => {
      expect(isString(true)).toBe(false);
    });

    test('le pasan false', () => {
      expect(isString(false)).toBe(false);
    });
  });
  describe('Debe devolver true cuando:', () => {
    test('le pasan un string', () => {
      expect(isString('hello world')).toBe(true);
    });
  });
});
