import { utils } from '../../dist';
const { _objectSize } = utils;

test('debe retornar 2', () => {
  expect(_objectSize({ a: 1, b: 2 })).toBe(2);
});
