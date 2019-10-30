import { baseHandler } from './baseHandler.nm';

const targetToProxyMap = new WeakMap();
const proxyToTargetMap = new WeakMap();

type proxyHandlerLike = {
  get: (target: any, p: string | number | symbol, receiver: any) => any;
  set: (
    target: any,
    p: string | number | symbol,
    value: any,
    receiver: any
  ) => boolean;
};

function createReactiveObject(
  target: any,
  toProxy: WeakMap<any, any>,
  toTarget: WeakMap<any, any>,
  baseHandler: proxyHandlerLike
) {
  let observed = toProxy.get(target);
  // 原数据已经有相应的可响应数据, 返回可响应数据
  if (observed !== void 0) {
    return observed;
  }
  // 原数据已经是可响应数据
  if (toTarget.has(target)) {
    return target;
  }
  observed = new Proxy(target, baseHandler);
  toProxy.set(target, observed);
  toTarget.set(observed, target);
  return observed;
}

/**
 * @name reactive
 * @description 用于侦测对象的数据变化(支持深度侦测,深度侦测的实现方案为延迟侦测)
 * @param {Object | Array} target 要被监测的对象
 * @param {Function} callback 对象变化后所执行的方法
 * @returns {Proxy} 侦测后的对象(修改该对象时会触发回调函数)
 * @example
 * import { reactive } from 'spadgerjs'
 * //or let reactive = sp.reactive
 * let obj = {
 *   num:1,
 *   arr:[],
 *   o:{ n:1 }
 * }
 * let observed = reactive(obj,()=>{
 *   console.log(obj.num)
 *   console.log(obj.arr)
 *   console.log(obj.o)
 * })
 * observed.num = 100
 * observed.arr.push(1,2,3)
 * observed.o.n = 1000
 * //logs:
 * //100
 * //[1,2,3]
 * //{n:100}
 */
export const reactive = (target: any, callback: Function) => {
  return createReactiveObject(
    target,
    targetToProxyMap,
    proxyToTargetMap,
    baseHandler(callback)
  );
};
