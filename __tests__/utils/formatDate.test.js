import { _formatDate } from '../../dist';

describe('Function _formatDate', () => {
    test('Must return date format', () => {
        expect(_formatDate('2021-04-12T00:25:48.563Z')).toBe('12-04-2021');
    });
});