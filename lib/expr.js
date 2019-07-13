/*!
 * exprJS
 * https://github.com/tamyam/exprJS
 *
 * MIT License
 * https://github.com/tamyam/exprJS/blob/master/LICENSE
 */
class If {
  constructor(condition, ifresult) {
    this.condition = condition;
    this.ifresult = ifresult;
  }
  then(statement) {
    return new Then(
      this.condition,
      !this.condition ? (
        null
      ) : this.condition === If.NOPROCESSING ? (
        this.ifresult
      ) : typeof statement === "function" ? (
        statement()
      ) : (
        statement
      )
    );
  }
}
If.NOPROCESSING = Symbol("NOPROCESSING");

class Then {
  constructor(condition, ifresult) {
    this.condition = condition;
    this.ifresult = ifresult;
  }
  else(statement) {
    return (
      this.condition ? (
        this.ifresult
      ) : typeof statement === "function" ? (
        statement()
      ) : (
        statement
      )
    );
  }
  elseif(condition) {
    return new If(
      this.condition ? If.NOPROCESSING : condition,
      this.ifresult
    );
  }
  elseifnot(condition) {
    return this.elseif(!condition);
  }
  end() {
    return this.else(null);
  }
}

class Unless {
  constructor(condition) {
    this.condition = condition;
  }
  then(statement) {
    return new UnlessThen(
      this.condition,
      this.condition ? (
        null
      ) : typeof statement === "function" ? (
        statement()
      ) : (
        statement
      )
    );
  }
}

class UnlessThen {
  constructor(condition, ifresult) {
    this.condition = !condition;
    this.ifresult = ifresult;
  }
  else(statement) {
    return this.condition ? (
      this.ifresult
    ) : (
      typeof statement === "function" ? (
        statement()
      ) : (
        statement
      )
    );
  }
  end() {
    return this.else(null);
  }
}

const switch_ = expression => block => {
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

const try_ = func => {
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

const map_ = (...args) => Array.prototype.map.call(...args);
const reverse_ = array => [...array].reverse();
const pop_ = array => (
  (
    copy = [...array]
  ) => (
    copy.pop(),
    copy
  )
)();
const push_ = (array, ...elements) => (
  (
    copy = [...array]
  ) => (
    copy.push(...elements),
    copy
  )
)();
const shift_ = array => (
  (
    copy = [...array]
  ) => (
    copy.shift(),
    copy
  )
)();
const unshift_ = (array, ...elements) => (
  (
    copy = [...array]
  ) => (
    copy.unshift(...elements),
    copy
  )
)();
const sort_ = (array, compareFunction = undefined) => [...array].sort(compareFunction);
const splice_ = (array, ...args) => (
  (
    copy = [...array]
  ) => (
    copy.splice(...args),
    copy
  )
)();
const fill_ = (array, ...args) => [...array].fill(...args);
const copyWithin_ = (array, ...args) => [...array].copyWithin(...args);

const object = {
  if: condition => new If(condition),
  ifnot: condition => new If(!condition),
  unless: condition => new Unless(condition),
  switch: switch_,
  try: try_,
  array: {
    map: map_,
    reverse: reverse_,
    pop: pop_,
    push: push_,
    shift: shift_,
    unshift: unshift_,
    sort: sort_,
    splice: splice_,
    fill: fill_,
    copyWithin: copyWithin_
  }
};
object.case = object.switch;

export default object;
