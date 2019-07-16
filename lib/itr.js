/*!
 * exprJS
 * https://github.com/tamyam/exprJS
 *
 * MIT License
 * https://github.com/tamyam/exprJS/blob/master/LICENSE
 */

export const toArray_ = Array.from;
export const each_ = (itr, callback, thisArg=undefined) => {
  let index = 0;
  for(const currentValue of itr) {
    if(callback.call(thisArg, currentValue, index, itr) == false) break;
    ++index;
  }
};
