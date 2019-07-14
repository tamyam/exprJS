/*!
 * exprJS
 * https://github.com/tamyam/exprJS
 *
 * MIT License
 * https://github.com/tamyam/exprJS/blob/master/LICENSE
 */
import object from "./expr.js";
export default expression => block => {
  let breakFlag = false,
      returnValue;
  const _when = value => statement => {
    if(expression === value && !breakFlag) {
      returnValue = typeof statement === "function" ? statement() : statement;
      breakFlag = true;
    }
  };
  const _default = () => statement => {
    if(!breakFlag) {
      returnValue = typeof statement === "function" ? statement() : statement;
      breakFlag = true;
    }
  };
  block(Object.assign({
    when: _when,
    default: _default
  }, object));
  return returnValue;
};
