/*!
 * exprJS
 * https://github.com/tamyam/exprJS
 *
 * MIT License
 * https://github.com/tamyam/exprJS/blob/master/LICENSE
 */

const equals = (a, b) => {
  if(Object.is(a, b)) {
    return true;
  } else {
    if(typeof a !== "object" || typeof b !== "object" || a == null || b == null) {
      return false;
    } else if(Array.isArray(a) && Array.isArray(b)) {
      if(a.length === b.length) {
        return a.every((element, index) => {
          return equals(element, b[index]);
        });
      } else {
        return false;
      }
    } else {
      const aKeys = Object.keys(a);
      const bKeys = Object.keys(b);
      if(aKeys.length === bKeys.length) {
        return aKeys.every((key, index) => {
          if(bKeys[index] === key) {
            return equals(a[key], b[key]);
          } else {
            return false;
          }
        });
      } else {
        return false;
      }
    }
  }
};

export default equals;
