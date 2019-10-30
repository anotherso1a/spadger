import { reactive } from './index';
export const isObject = (val: any): val is Record<any, any> =>
  val !== null && typeof val === 'object';

const createGetter = callback => {
  return function get(
    target: any,
    key: string | number | symbol,
    receiver: any
  ): any {
    const res = Reflect.get(target, key, receiver);
    return isObject(res) ? reactive(res, callback) : res;
  };
};
const createSetter = callback => {
  let timer = null;
  return function set(
    target: any,
    key: string | symbol,
    value: any,
    receiver: any
  ): boolean {
    const result = Reflect.set(target, key, value, receiver);
    clearTimeout(timer);
    setTimeout(callback, 0);
    return result;
  };
};

export const baseHandler = (callback: Function) => ({
  get: createGetter(callback),
  set: createSetter(callback)
});
