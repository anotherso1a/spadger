import { parseQuery } from '../../src/string/parseQuery';
import { stringifyQuery } from '../../src/string/stringifyQuery';

test('parseQuery "a=1&b=2" returns an object', () => {
  expect(parseQuery('a=1&b=2')).toEqual({ a: '1', b: '2' });
});
test('stringifyQuery "{a:1,b:2}" returns an string', () => {
  expect(stringifyQuery({ a: 1, b: 2 })).toBe('a=1&b=2');
});
