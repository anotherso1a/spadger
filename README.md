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

### shuffle

数组洗牌,返回顺序随机的新数组(浅拷贝)

#### 参数

|类型|参数名|描述|
|:-:|:-:|:-:|
|Array|arr|需要洗牌的数组,纯数字|


#### 返回值

|类型|描述|
|:-:|:-:|
|Array|打乱后的新数组|


#### 例子

```js
afl.shuffle([1,2,3]) //[3,2,1]
afl.shuffle([1]) //[1]
```

### throttle

节流函数(连续触发时第一次立即触发,之后每 delay ms 执行一次)

#### 参数

|类型|参数名|描述|
|:-:|:-:|:-:|
|Function|fn|需要节流的方法|
|Number|delay|单位:ms,每次执行函数的间隔|


#### 返回值

|类型|描述|
|:-:|:-:|
|Function|被节流后的函数|


#### 例子

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

### object2map

对象转map

#### 参数

|类型|参数名|描述|
|:-:|:-:|:-:|
|无|obj|obj 需要转换成map的对象|


#### 返回值

|类型|描述|
|:-:|:-:|
|Map|转换后的Map|


#### 例子

```js
afl.object2map({
a: 1,
b: 2
}) //Map(2) {"a" => 1, "b" => 2}
```

### objectDig

从对象中找到特定key的值

#### 参数

|类型|参数名|描述|
|:-:|:-:|:-:|
|Object|obj|无|
|string|target|无|


#### 返回值

|类型|描述|
|:-:|:-:|
|无|{}|


#### 例子

```js
afl.objectDig({a:{b:{c:{d:4}}}},'d') //4
```

### parseQuery

将链接search转换为对象,可以用原生api: URLSearchParams

#### 参数

|类型|参数名|描述|
|:-:|:-:|:-:|
|String|str|search字符串,不包含?|


#### 返回值

|类型|描述|
|:-:|:-:|
|Object|参数对象|


#### 例子

```js
afl.parseQuery('a=1&b=2') //{a: "1", b: "2"}
```

### stringifyQuery

将对象转换成search字符串(不带问号)

#### 参数

|类型|参数名|描述|
|:-:|:-:|:-:|
|Object|obj|要被转换成search字符串的对象|


#### 返回值

|类型|描述|
|:-:|:-:|
|String|字符串|


#### 例子

```js
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
