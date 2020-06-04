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

#### chunk

将数组按大小分片,返回新数组

**参数:**

|类型|参数名|描述|
|:-:|:-:|:-:|
|Array|arr|要分片的数组|
|Number|size|分片大小|

**返回值:**

|类型|描述|
|:-:|:-:|
|Array|分片后的数组|

**例子:**

```js
sp.chunk([1,2,3]) //[[1],[2],[3]]
sp.chunk([1,2,3,4,5],2) //[[1,2],[3,4],[5]]
sp.chunk([1,2,3,4],5) //[[1,2,3,4]]
```

#### nest

数组转树,必须带有id属性,并且拥有一个类似parent_id能指向父级id的键

**参数:**

|类型|参数名|描述|
|:-:|:-:|:-:|
|Array|items|被转化的数组|
|String&#124;Number|id|父节点的id值|
|String|link|链接父节点id的属性key|

**返回值:**

|类型|描述|
|:-:|:-:|
|Object|树形对象|

**例子:**

```js
let items = [
   { id: 1, parent_id: null },
   { id: 2, parent_id: 1 },
   { id: 3, parent_id: 2 },
   { id: 4, parent_id: 1 },
]
nest(items,null,'parent_id')
```

#### shuffle

数组洗牌,返回顺序随机的新数组(浅拷贝)

**参数:**

|类型|参数名|描述|
|:-:|:-:|:-:|
|Array|arr|需要洗牌的数组,纯数字|

**返回值:**

|类型|描述|
|:-:|:-:|
|Array|打乱后的新数组|

**例子:**

```js
sp.shuffle([1,2,3]) //[3,2,1]
sp.shuffle([1]) //[1]
```

### Function

#### curry

函数柯里化

**参数:**

|类型|参数名|描述|
|:-:|:-:|:-:|
|Function|fn|需要被柯里化的函数|

**返回值:**

|类型|描述|
|:-:|:-:|
|Function|返回柯里化后的函数|

**例子:**

```js
let fn = (a,b,c)=>a+b+c
let curried = sp.curry(fn)
curried(1,2,3) //6
curried(1)(2)(3) //6
curried(1,2)(3) //6
```

#### debounce

防抖函数(连续触发时 保证只执行一次，过了delay时间后，才会再次触发

**参数:**

|类型|参数名|描述|
|:-:|:-:|:-:|
|Function|fn|需要防抖的方法|
|Number|delay|单位:ms,防抖间隔|
|Boolean|isPostposition|是否后置执行(当停止操作 delay ms 后执行,如果设为 true, 则触发时立即执行,后续 delay ms 内连续触发不执行)|

**返回值:**

|类型|描述|
|:-:|:-:|
|Function|被防抖后的函数|

**例子:**

```js
let debounced = sp.debounce(()=>console.log("scroll")), 500, true)
window.onScroll = debounced; //滚动停止后500ms才会执行
```

#### floatCompare

用于比较浮点数的大小

**参数:**

|类型|参数名|描述|
|:-:|:-:|:-:|
|Number|a|浮点数A|
|Number|b|浮点数B|

**返回值:**

|类型|描述|
|:-:|:-:|
|Boolean|两数是否相等|

**例子:**

```js
sp.floatCompare(0.3, 0.1+0.2) // true
```

#### memorize

缓存函数,被缓存的函数执行后会将参数对应的结果进行缓存

**参数:**

|类型|参数名|描述|
|:-:|:-:|:-:|
|Function|fn|无|

**返回值:**

|类型|描述|
|:-:|:-:|
|Memorized|接受(?string&#124;number&#124;boolean)参数,返回任意值|

**例子:**

```js
let fib = n => n<2 ? 1 : fib(n-1) + fib(n-2)
//不做缓存直接调用会导致浏览器卡死
fib = sp.memorize(fib)
fib(1000) //7.0330367711422765e+208
```

#### reactive

用于侦测对象的数据变化(支持深度侦测,深度侦测的实现方案为延迟侦测)

**参数:**

|类型|参数名|描述|
|:-:|:-:|:-:|
|Object &#124; Array|target|要被监测的对象|
|Function|callback|对象变化后所执行的方法|

**返回值:**

|类型|描述|
|:-:|:-:|
|Proxy|侦测后的对象(修改该对象时会触发回调函数)|

**例子:**

```js
import { reactive } from 'spadgerjs'
//or let reactive = sp.reactive
let obj = {
  num:1,
  arr:[],
  o:{ n:1 }
}
let observed = reactive(obj,()=>{
  console.log(obj.num)
  console.log(obj.arr)
  console.log(obj.o)
})
observed.num = 100
observed.arr.push(1,2,3)
observed.o.n = 1000
//logs:
//100
//[1,2,3]
//{n:100}
```

#### throttle

节流函数(连续触发时第一次立即触发,之后每 delay ms 执行一次)

**参数:**

|类型|参数名|描述|
|:-:|:-:|:-:|
|Function|fn|需要节流的方法|
|Number|delay|单位:ms,每次执行函数的间隔|

**返回值:**

|类型|描述|
|:-:|:-:|
|Function|被节流后的函数|

**例子:**

```js
let count = {n:0}
let thottled = sp.throttle(count=> ++count.n,500)
setTimeout(()=>{
 for(let i = 0; i < 10 ; i++){
    thottled(count)
 }
 console.log(count.n)//1
},1000)
```

### Object

#### deepClone

深拷贝

**参数:**

|类型|参数名|描述|
|:-:|:-:|:-:|
|object|obj|需要拷贝的对象|

**返回值:**

|类型|描述|
|:-:|:-:|
|object|深拷贝过后的对象|

**例子:**

```js
a = { a:"A",b:[1,2,3,4,5] };
a.c = a;
copy = sp.deepClone(a);
copy === a //false
copy.a === a.a //true
copy.b === a.b //false
```

#### isEqual

比较两个对象是否值相等,深度为1

**参数:**

|类型|参数名|描述|
|:-:|:-:|:-:|
|any|o1|对象1|
|any|o2|对象2|

**返回值:**

|类型|描述|
|:-:|:-:|
|Boolean|判断结果|

**例子:**

```js
sp.isEqual(1,1) //true
sp.isEqual({a:1},{a:1}) //true
sp.isEqual('a','bc') //false
```

#### object2map

对象转map

**参数:**

|类型|参数名|描述|
|:-:|:-:|:-:|
|无|obj|obj 需要转换成map的对象|

**返回值:**

|类型|描述|
|:-:|:-:|
|Map|转换后的Map|

**例子:**

```js
sp.object2map({
  a: 1,
  b: 2
}) //Map(2) {"a" => 1, "b" => 2}
```

#### objectDig

从对象中找到特定key的值

**参数:**

|类型|参数名|描述|
|:-:|:-:|:-:|
|Object|obj|无|
|string|target|无|

**返回值:**

|类型|描述|
|:-:|:-:|
|*|无|

**例子:**

```js
sp.objectDig({a:{b:{c:{d:4}}}},'d') //4
```

### String

#### parseQuery

将链接search转换为对象,可以用原生api: URLSearchParams

**参数:**

|类型|参数名|描述|
|:-:|:-:|:-:|
|String|str|search字符串,不包含?|

**返回值:**

|类型|描述|
|:-:|:-:|
|Object|参数对象|

**例子:**

```js
sp.parseQuery('a=1&b=2') //{a: "1", b: "2"}
```

#### stringifyQuery

将对象转换成search字符串(不带问号)

**参数:**

|类型|参数名|描述|
|:-:|:-:|:-:|
|Object|obj|要被转换成search字符串的对象|

**返回值:**

|类型|描述|
|:-:|:-:|
|String|字符串|

**例子:**

```js
sp.stringifyQuery({a:1,b:2}) //a=1&b=2
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
