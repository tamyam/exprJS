/*!
 * exprJS
 * https://github.com/tamyam/exprJS
 *
 * MIT License
 * https://github.com/tamyam/exprJS/blob/master/LICENSE
 */

export const map_ = (...args) => Array.prototype.map.call(...args);
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
