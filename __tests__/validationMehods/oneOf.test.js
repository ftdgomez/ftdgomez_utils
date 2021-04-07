import { validationMethods } from '../../dist/';

describe('function: oneOf', () => {
  const { oneOf } = validationMethods;
  // describe('Debe devolver false cuando:', () => {
  //   test('le pasan un int', () => {
  //     expect(oneOf(9, [])).toBe(false);
  //   });

  //   test('le pasan un float', () => {
  //     expect(oneOf(9.4)).toBe(false);
  //   });

  //   test('le pasan un array vacío', () => {
  //     expect(oneOf([])).toBe(false);
  //   });

  //   test('le pasan un objeto', () => {
  //     expect(oneOf({})).toBe(false);
  //   });

  //   test('le pasan false', () => {
  //     expect(oneOf(false)).toBe(false);
  //   });
  // });

  describe('Debe devolver true cuando:', () => {
    test('values contain operator', () => {
      expect(oneOf('hello', ['hello', 'other stuff', 9])).toBe(true);
    });
  });
});
