import { _objectSize } from '../../dist';

test('debe retornar 2', () => {
  expect(_objectSize({ a: 1, b: 2 })).toBe(2);
});
