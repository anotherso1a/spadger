# [SpadgerJS](https://github.com/anotherso1a/spadger)

## Install

```sh
npm install spadgerjs
```

## Usage

### In Browser

```html
<script src="js/spadger.min.js"></script>
<script>
  sp.shuffle([1,2,3]) //[2,1,3]
  sp.object2map({
    a: 1,
    b: 2
  }) //Map(2) {"a" => 1, "b" => 2}
  sp.parseQuery('a=1&b=2') //{a: "1", b: "2"}
  sp.stringifyQuery({a:1,b:2}) //a=1&b=2
  sp.objectDig({a:{b:{c:{d:4}}}},'d') //4
</script>
```

### ES Module

```js
import sp from 'spadgerjs'
sp.shuffle([1,2,3]) //[2,1,3]
//or import some function
import { shuffle } from 'spadgerjs'
shuffle([1,2,3]) //[2,1,3]
```

### NodeJS

```js
let sp = require("spadgerjs")
sp.shuffle([1,2,3]) //[2,1,3]
```

感谢您的使用 | Thank you for using spadgerjs

## 描述

初步打算封装一些自己造的轮子

## API

### Array
{{Array}}
### Function
{{Function}}
### Object
{{Object}}
### String
{{String}}
## 项目说明

**1.** `commit`提交规范,请使用`npm run commit` 进行提交
参数如下:

- feat：新增功能；
- fix：修复bug；
- docs：修改文档；
- refactor：代码重构，未新增任何功能和修复任何bug；
- build：改变构建流程，新增依赖库、工具等（例如webpack修改）；
- style：仅仅修改了空格、缩进等，不改变代码逻辑；
- perf：改善性能和体现的修改；
- chore：非src和test的修改；
- test：测试用例的修改；
- ci：自动化流程配置修改；
- revert：回滚到上一个版本；
scope：【可选】用于说明commit的影响范围
subject：commit的简要说明，尽量简短

## 下一步计划

无
