/*!
 * exprJS
 * https://github.com/tamyam/exprJS
 *
 * MIT License
 * https://github.com/tamyam/exprJS/blob/master/LICENSE
 */

export default function*(start, end = null, step = 1) {
  const start2 = end == null ? 0 : start;
  const end2 = end == null ? start : end;
  for(let i = start2; i < end2; i += step) {
    yield i;
  }
};
