# Changelog
## [1.0] - 2019-07-12
### Added
- .if(*condition*).then(*statement*) // if expression
  - .elseif(*condition*).then(*statement*) // elseif expression
  - .elseifnot(*condition*).then(*statement*) // elseifnot expression
  - .else(*statement*) // else expression
  - .end() // if expression end
- .ifnot(*condition*).then(*statement*) // ifnot expression
  - .elseif(*condition*).then(*statement*) // elseif expression
  - .elseifnot(*condition*).then(*statement*) // elseifnot expression
  - .else(*statement*) // else expression
  - .end() // if expression end
- .unless(*condition*).then(*statement*)
  - .else(*statement*)
  - .end() // if expression end
  
if, ifnot and unless:
If you do not use ".else(*statement*)", end it with ".end()". It can not be used after "else(*statement*)".
