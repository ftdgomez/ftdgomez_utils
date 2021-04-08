import { _WithoutPrivateKeys } from '../../dist/';

describe('function: _withoutPrivateKeys', () => {
  test("must return all values keys that not begins with '_'", () => {
    expect(_WithoutPrivateKeys({ a: 1, b: 2, _c: 3 })).toMatchObject({
      a: 1,
      b: 2,
    });
  });
  describe('No unexpected error with bad input', () => {
    test('input is a Boolean', () => {
      expect(_WithoutPrivateKeys(true)).toMatchObject({});
    });
  });
});
