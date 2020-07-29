import * as arrayFn from './src/array'
import * as functionalFn from './src/function'
import * as objectFn from './src/object'
import * as stringFn from './src/string'

export * from './src/function'
export * from './src/object'
export * from './src/string'
export * from './src/array'

export default {
  ...arrayFn,
  ...functionalFn,
  ...objectFn,
  ...stringFn
}
