# Changelog
statement is `() => {...}` or `object`.

## [1.1.1] - 2019-07-12
### Fixed

Microsoft Edge support for `switch`

## [1.1] - 2019-07-12
### Added

```
_.switch(expression) (_ => {
  _.when(value) (statement);
  _.default() (statement);
});
```

## [1.0] - 2019-07-12
### Added

```
_.if(condition).then(statement) // if expression
  .elseif(condition).then(statement) // elseif expression
  .elseifnot(condition).then(statement) // elseifnot expression
  .else(statement) // else expression

_.if(condition).then(statement) // if expression
  .end() // if expression end

_.ifnot(condition).then(statement) // ifnot expression
  .elseif(condition).then(statement) // elseif expression
  .elseifnot(condition).then(statement) // elseifnot expression
  .else(statement) // else expression

_.ifnot(condition).then(statement) // ifnot expression
  .end() // if expression end

_.unless(condition).then(statement) // unless exoression
  .else(statement) // else expression

_.unless(condition).then(statement) // unless exoression
  .end() // if expression end
```
  
if, ifnot and unless:
If you do not use `.else(statement)`, end it with `.end()`. It can not be used after `.else(statement)`.
