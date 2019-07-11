/*!
 * exprJS
 * https://github.com/tamyam/exprJS
 *
 * MIT License
 * https://github.com/tamyam/exprJS/blob/master/LICENSE
 */
class If {
  constructor(condition) {
    this.condition = condition;
  }
  then(statement) {
    return this.condition ? (
      typeof statement === "function" ? (
        statement()
      ) : (
        statement
      )
    ) : (
      void 0
    );
  }
}

export default condition => new If(condition);
