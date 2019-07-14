/*!
 * exprJS
 * https://github.com/tamyam/exprJS
 *
 * MIT License
 * https://github.com/tamyam/exprJS/blob/master/LICENSE
 */
export default func => {
  if("finally" in func) {
    try {
      return func.try();
    } catch(error) {
      return func.catch(error);
    } finally {
      func.finally();
    }
  } else {
    try {
      return func.try();
    } catch(error) {
      return func.catch(error);
    }
  }
};
