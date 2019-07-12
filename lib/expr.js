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
    return (
      this.condition ? (
        new Then(true, (
          this.condition === If.NOPROCESSING ? (
            this.ifresult
          ) : typeof statement === "function" ? (
            statement()
          ) : (
            statement
          )
        ))
      ) : (
        new Then(false, null)
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
    return this.condition === false ? new If(condition) : new If(If.NOPROCESSING, this.ifresult);
  }
  elseifnot(condition) {
    return this.elseif(!condition);
  }
  end() {
    return this.else(null);
  }
}

export default {
  if: condition => new If(condition),
  ifnot: condition => new If(!condition)
};
