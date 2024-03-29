# Changelog
## [1.5] - 2019-07-16
### Added
#### range
```
_.range(end)
```

```
_.range(start, end[, step])
```

#### itr
```
_.itr.toArray(arrayLike[, function mapFn(currentValue[, index[, array]]) {...}[, thisArg]])
```

```
_.itr.each(itr, function callback(currentValue[, index[, itr]]) {...}[, thisArg])
```

#### array
```
_.array.entries(array)
```

```
_.array.every(array, function callback(element[, index[, array]]) {...}[, thisArg])
```

```
_.array.filter(array, function callback(element[, index[, array]]) {...}[, thisArg])
```

```
_.array.find(array, function callback(element[, index[, array]]) {...}[, thisArg])
```

```
_.array.findIndex(array, function callback(element[, index[, array]]) {...}[, thisArg])
```

```
_.array.keys(array)
```

```
_.array.reduce(array, function callback(accumulator, currentValue[, currentIndex[, array]]) {...}[, initialValue])
```

```
_.array.reduceRight(array, function callback(accumulator, currentValue[, currentIndex[, array]]) {...}[, initialValue])
```

```
_.array.some(array, function callback(element[, index[, array]]) {...}[, thisArg])
```

```
_.array.values(array)
```

## [1.4] - 2019-07-15
### Changed

changed from `_.when(value)` to `_.when(...values)`.

## [1.3.1] - 2019-07-14
### Code Changed

Split file using ECMAScript 2015 import / export
#### files
- expr.js (main)
- array.js
- if.js
- switch.js
- try.js

## [1.3] - 2019-07-14
### Added

```
_.array.map(array, function callback(currentValue[, index[, array]]) {
  statement
}[, thisArg]);
```

```
_.array.reverse(array);
```

```
_.array.pop(array);
```

```
_.array.push(array, ...elements);
```

```
_.array.shift(array);
```

```
_.array.unshift(array, ...elements);
```

```
_.array.sort(array[, compareFunction]);
```

```
_.array.splice(array, start[, deleteCount, ...items]);
```

```
_.array.fill(array, value[, start[, end]]);
```

```
_.array.copyWithin(array, target[, start[, end]]);
```


## [1.2.1] - 2019-07-13
### Fixed

Fixed an issue where `.then()` in `_.unless()` would be executed immediately.

## [1.2] - 2019-07-12
### Added

```
_.try({
  try() {
    statement
  },
  catch(e) {
    statement
  }[,
  finally() {
    statement
  }]
});
```

## [1.1.1] - 2019-07-12
### Fixed

Microsoft Edge support for `switch`

## [1.1] - 2019-07-12
### Added

```
_.switch(expression) (_ => {
  _.when(value) (callback or object);
  _.default() (statement);
});
```

```
_.case(expression) (_ => {
  _.when(value) (callback or object);
  _.default() (callback or object);
});
```

## [1.0] - 2019-07-12
### Added

```
_.if(condition).then(callback or object) // if expression
  .elseif(condition).then(callback or object) // elseif expression
  .elseifnot(condition).then(callback or object) // elseifnot expression
  .else(callback or object) // else expression
```

```
_.if(condition).then(callback or object) // if expression
  .end() // if expression end
```

```
_.ifnot(condition).then(callback or object) // ifnot expression
  .elseif(condition).then(callback or object) // elseif expression
  .elseifnot(condition).then(callback or object) // elseifnot expression
  .else(callback or object) // else expression
```

```
_.ifnot(condition).then(callback or object) // ifnot expression
  .end() // if expression end
```

```
_.unless(condition).then(callback or object) // unless exoression
  .else(callback or object) // else expression
```

```
_.unless(condition).then(callback or object) // unless exoression
  .end() // if expression end
```
  
if, ifnot and unless:
If you do not use `.else(callback or object)`, end it with `.end()`. It can not be used after `.else(callback or object)`.
