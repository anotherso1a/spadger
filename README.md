# 函数库

## Usage

```html
<script src="js/afl.min.js"></script>
<script>
  afl.shuffle([1,2,3]) //[2,1,3]
  afl.object2map({
    a: 1,
    b: 2
  }) //Map(2) {"a" => 1, "b" => 2}
  afl.parseQuery('a=1&b=2') //{a: "1", b: "2"}
  afl.stringifyQuery({a:1,b:2}) //a=1&b=2
  afl.objectDig({a:{b:{c:{d:4}}}},'d') //4
</script>
```

## 描述

初步打算封装一些自己造的轮子

## API

### Array

#### shuffle

洗牌算法,用于随机打乱数组

```js
afl.shuffle([1,2,3]) //[2,1,3]
```

### Function

#### throttle

节流函数

```js
let count = {n:0}
let thottled = afl.throttle(count=> ++count.n,500)
setTimeout(()=>{
  for(let i = 0; i < 10 ; i++){
    thottled(count)
  }
  console.log(count.n)//1
},1000)
```

### Object

#### object2map

对象转为Map

```js
afl.object2map({
  a: 1,
  b: 2
}) //Map(2) {"a" => 1, "b" => 2}
```

#### objectDig

查找对象中特定key值

```js
afl.objectDig({a:{b:{c:{d:4}}}},'d') //4
```

### String

#### parseQuery && stringifyQuery

序列化或解析search字符串

```js
afl.parseQuery('a=1&b=2') //{a: "1", b: "2"}
afl.stringifyQuery({a:1,b:2}) //a=1&b=2
```

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
