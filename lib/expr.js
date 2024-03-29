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
import range_ from "./range.js";
import * as array from "./array.js";
import * as itr from "./itr.js";

const object = {
  if: condition => new If(condition),
  ifnot: condition => new If(!condition),
  unless: condition => new Unless(condition),
  switch: switch_,
  try: try_,
  range: range_,
  array: {
    entries: array.entries_,
    every: array.every_,
    filter: array.filter_,
    find: array.find_,
    findIndex: array.findIndex_,
    keys: array.keys_,
    map: array.map_,
    reduce: array.reduce_,
    reduceRight: array.reduceRight_,
    some: array.some_,
    values: array.values_,

    reverse: array.reverse_,
    pop: array.pop_,
    push: array.push_,
    shift: array.shift_,
    unshift: array.unshift_,
    sort: array.sort_,
    splice: array.splice_,
    fill: array.fill_,
    copyWithin: array.copyWithin_
  },
  itr: {
    toArray: itr.toArray_,
    each: itr.each_
  }
};
object.case = object.switch;

export default object;
