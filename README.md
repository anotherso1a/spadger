# 函数库

## Usage

```html
<script src="js/spadger.min.js"></script>
<script>
  spadger.shuffle([1,2,3]) //[2,1,3]
  spadger.object2map({
    a: 1,
    b: 2
  }) //Map(2) {"a" => 1, "b" => 2}
  spadger.parseQuery('a=1&b=2') //{a: "1", b: "2"}
  spadger.stringifyQuery({a:1,b:2}) //a=1&b=2
  spadger.objectDig({a:{b:{c:{d:4}}}},'d') //4
</script>
```

## 描述

初步打算封装一些自己造的轮子

## API

### Array

#### nest

数组转树,必须带有id属性,并且拥有一个类似parent_id能指向父级id的键

##### 参数

|类型|参数名|描述|
|:-:|:-:|:-:|
|Array|items|被转化的数组|
|String|Number|id|父节点的id值|
|String|link|链接父节点id的属性key|


##### 返回值

|类型|描述|
|:-:|:-:|
|Object|树形对象|


##### 例子

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

##### 参数

|类型|参数名|描述|
|:-:|:-:|:-:|
|Array|arr|需要洗牌的数组,纯数字|


##### 返回值

|类型|描述|
|:-:|:-:|
|Array|打乱后的新数组|


##### 例子

```js
spadger.shuffle([1,2,3]) //[3,2,1]
spadger.shuffle([1]) //[1]
```

### Function

#### debounce

防抖函数(连续触发时 保证只执行一次，过了delay时间后，才会再次触发

##### 参数

|类型|参数名|描述|
|:-:|:-:|:-:|
|Function|fn|需要防抖的方法|
|Number|delay|单位:ms,防抖间隔|


##### 返回值

|类型|描述|
|:-:|:-:|
|Function|被防抖后的函数|


##### 例子

```js
let debounced = spadger.debounce(()=>console.log("scroll")),500)
window.onScroll = debounced; //滚动停止后才会执行
```

#### throttle

节流函数(连续触发时第一次立即触发,之后每 delay ms 执行一次)

##### 参数

|类型|参数名|描述|
|:-:|:-:|:-:|
|Function|fn|需要节流的方法|
|Number|delay|单位:ms,每次执行函数的间隔|


##### 返回值

|类型|描述|
|:-:|:-:|
|Function|被节流后的函数|


##### 例子

```js
let count = {n:0}
let thottled = spadger.throttle(count=> ++count.n,500)
setTimeout(()=>{
 for(let i = 0; i < 10 ; i++){
    thottled(count)
 }
 console.log(count.n)//1
},1000)
```

### Object

#### object2map

对象转map

##### 参数

|类型|参数名|描述|
|:-:|:-:|:-:|
|无|obj|obj 需要转换成map的对象|


##### 返回值

|类型|描述|
|:-:|:-:|
|Map|转换后的Map|


##### 例子

```js
spadger.object2map({
  a: 1,
  b: 2
}) //Map(2) {"a" => 1, "b" => 2}
```

#### objectDig

从对象中找到特定key的值

##### 参数

|类型|参数名|描述|
|:-:|:-:|:-:|
|Object|obj|无|
|string|target|无|


##### 返回值

|类型|描述|
|:-:|:-:|
|*|无|


##### 例子

```js
spadger.objectDig({a:{b:{c:{d:4}}}},'d') //4
```

### String

#### parseQuery

将链接search转换为对象,可以用原生api: URLSearchParams

##### 参数

|类型|参数名|描述|
|:-:|:-:|:-:|
|String|str|search字符串,不包含?|


##### 返回值

|类型|描述|
|:-:|:-:|
|Object|参数对象|


##### 例子

```js
spadger.parseQuery('a=1&b=2') //{a: "1", b: "2"}
```

#### stringifyQuery

将对象转换成search字符串(不带问号)

##### 参数

|类型|参数名|描述|
|:-:|:-:|:-:|
|Object|obj|要被转换成search字符串的对象|


##### 返回值

|类型|描述|
|:-:|:-:|
|String|字符串|


##### 例子

```js
spadger.stringifyQuery({a:1,b:2}) //a=1&b=2
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
