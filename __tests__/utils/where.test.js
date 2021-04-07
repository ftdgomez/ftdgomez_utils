import { _where } from '../../dist';

describe('Function: _where', () => {
  test('Debe retornar { id: 1, name: "john doe" }', () => {
    expect(
      _where(
        [
          { id: 1, name: 'John' },
          { id: 2, name: 'Jane' },
        ],
        { id: 1 },
      ),
    ).toMatchObject([{ id: 1, name: 'John' }]);
  });
});
