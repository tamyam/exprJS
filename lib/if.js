/*!
 * exprJS
 * https://github.com/tamyam/exprJS
 *
 * MIT License
 * https://github.com/tamyam/exprJS/blob/master/LICENSE
 */
export class If {
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

export class Unless {
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
