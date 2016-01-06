import test from 'ava';
import arrayChunks from './';

test('size smaller than array length', t => {
  t.same(arrayChunks([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

test('size larger than array length', t => {
  t.same(arrayChunks([1, 2, 3, 4, 5], 6), [[1, 2, 3, 4, 5]]);
});

