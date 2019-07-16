/*!
 * exprJS
 * https://github.com/tamyam/exprJS
 *
 * MIT License
 * https://github.com/tamyam/exprJS/blob/master/LICENSE
 */

export const entries_ = (...args) => Array.prototype.entries.call(...args);
export const every_ = (...args) => Array.prototype.every.call(...args);
export const filter_ = (...args) => Array.prototype.filter.call(...args);
export const find_ = (...args) => Array.prototype.find.call(...args);
export const findIndex_ = (...args) => Array.prototype.findIndex.call(...args);
export const keys_ = (...args) => Array.prototype.keys.call(...args);
export const map_ = (...args) => Array.prototype.map.call(...args);
export const reduce_ = (...args) => Array.prototype.reduce.call(...args);
export const reduceRight_ = (...args) => Array.prototype.reduceRight.call(...args);
export const some_ = (...args) => Array.prototype.some.call(...args);
export const values_ = (...args) => Array.prototype.values.call(...args);

export const reverse_ = array => [...array].reverse();
export const pop_ = array => (
  (
    copy = [...array]
  ) => (
    copy.pop(),
    copy
  )
)();
export const push_ = (array, ...elements) => (
  (
    copy = [...array]
  ) => (
    copy.push(...elements),
    copy
  )
)();
export const shift_ = array => (
  (
    copy = [...array]
  ) => (
    copy.shift(),
    copy
  )
)();
export const unshift_ = (array, ...elements) => (
  (
    copy = [...array]
  ) => (
    copy.unshift(...elements),
    copy
  )
)();
export const sort_ = (array, compareFunction = undefined) => [...array].sort(compareFunction);
export const splice_ = (array, ...args) => (
  (
    copy = [...array]
  ) => (
    copy.splice(...args),
    copy
  )
)();
export const fill_ = (array, ...args) => [...array].fill(...args);
export const copyWithin_ = (array, ...args) => [...array].copyWithin(...args);
