/*!
 * exprJS
 * https://github.com/tamyam/exprJS
 *
 * MIT License
 * https://github.com/tamyam/exprJS/blob/master/LICENSE
 */
import {If, Unless} from "./if.js";
import switch_ from "./switch.js";
import try_ from "./try.js";
import * as array from "./array.js";

const object = {
  if: condition => new If(condition),
  ifnot: condition => new If(!condition),
  unless: condition => new Unless(condition),
  switch: switch_,
  try: try_,
  array: {
    map: array.map_,
    reverse: array.reverse_,
    pop: array.pop_,
    push: array.push_,
    shift: array.shift_,
    unshift: array.unshift_,
    sort: array.sort_,
    splice: array.splice_,
    fill: array.fill_,
    copyWithin: array.copyWithin_
  }
};
object.case = object.switch;

export default object;
